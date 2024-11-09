"use server";

import { User } from "@/models/user";
import dbConnect from "../lib/dbConnect";

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
    return { message: "*Please Provide Valid Email" };
  if (password.length < 3)
    return { message: "*Password must be atleast 3 digits" };
  if (password !== repassword)
    return { message: "*Repeat Password does not match" };

  await dbConnect();
  const user = await User.findOne({ email });
  if (user) {
    console.log("already");
    return { message: "User already exist" };
  }

  const newUser = new User({
    username: username,
    email: email,
    password: password,
  });

  const savedUser = await newUser.save();

  console.log(savedUser);

  return { message: "Signup Successfully" };
}
