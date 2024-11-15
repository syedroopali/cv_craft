"use server";

import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import dbConnect from "../lib/dbConnect";

export const svFormData = async function (formData: any) {
  await dbConnect();
  const cookiesData = await cookies();
  const token: any = await cookiesData.get("token");
  const { id }: any = await jwt.verify(token.value, process.env.SECRET_KEY!);
  const newUser = await User.updateOne(
    { _id: id },
    {
      $set: {
        cvData: { ...formData },
      },
      $currentDate: {
        lastUpdated: true,
      },
    }
  );

  const user2 = await User.findOne({ _id: id });
};
