"use server";

import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import dbConnect from "../lib/dbConnect";
export const login = async function (formData: any) {
  if (!formData.email) return { message: "Please enter email" };
  if (!formData.password) return { message: "Please enter password" };

  dbConnect();

  const existUser = await User.findOne({ email: formData.email });
  if (!existUser) return { message: "no account exist", success: false };

  const verified = await bcrypt.compare(formData.password, existUser.password);

  if (!verified) return { message: "Incorrct password", success: false };

  const token = await jwt.sign(existUser.id, process.env.SECRET_KEY!);

  const cookieSession = await cookies();
  cookieSession.set({
    name: "token",
    value: token,
    secure: true,
    httpOnly: true,
    maxAge: 2419200,
  });

  return { message: "Login Successfully", success: true };
};
