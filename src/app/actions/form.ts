"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import dbConnect from "../lib/dbConnect";
import { User } from "@/models/user";

export const form = async function () {
  const cookiesData = await cookies();
  const token = await cookiesData.get("token");
  const decodedToken = await jwt.verify(token?.value!, process.env.SECRET_KEY!);
  try {
    await dbConnect();
    const user = await User.findOne({ _id: decodedToken });
    return user;
  } catch (error) {
    return { message: "unable to find user" };
  }
};
