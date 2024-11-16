"use server";

import { User } from "@/models/user";
import { cookies } from "next/headers";

import jwt from "jsonwebtoken";

export const cvData = async function () {
  const cookiesData = await cookies();
  const token: any = await cookiesData.get("token");
  const decodedToken = await jwt.verify(token.value, process.env.SECRET_KEY!);
  const user = await User.findOne({ _id: decodedToken?.id });
  return user;
};
