"use server";

import { cookies } from "next/headers";

export const logout = async function () {
  const cookiesData = await cookies();
  await cookiesData.delete("token");
};
