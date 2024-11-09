"use server";

import { User } from "@/models/user";
import dbConnect from "../lib/dbConnect";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export interface formDataInterface {
  username: string;
  email: string;
  password: string;
  repassword: string;
}

export default async function signup(formData: formDataInterface) {
  const { username, email, password, repassword } = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
    repassword: formData.repassword,
  };

  if (username.length < 3) return { message: "*Please Provide Valid Username" };
  if (!email.split("").includes("@") || email.length < 11)
    return { message: "*Please Provide Valid Email", success: false };
  if (password.length < 3)
    return { message: "*Password must be atleast 3 digits", success: false };
  if (password !== repassword)
    return { message: "*Repeat Password does not match", success: false };

  await dbConnect();
  const user = await User.findOne({ email });
  if (user) {
    return { message: "User already exist", success: false };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username: username,
    email: email,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();

  const token = await jwt.sign(savedUser.id, process.env.SECRET_KEY!);

  const cookiesData = await cookies();
  await cookiesData.set("token", token);
  return { message: "Signup Successfully", success: true };
}
