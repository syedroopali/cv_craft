"use client";

import { useRouter } from "next/navigation";
import { logout } from "../actions/logout";

export default function Button() {
  const router = useRouter();

  const logoutFunc = async function () {
    await logout();
    router.push("/login");
  };

  const handleClick = function () {
    logoutFunc();
  };

  return (
    <button
      className="text-white border-2 rounded-lg px-4 py-1"
      onClick={handleClick}
    >
      Logout
    </button>
  );
}
