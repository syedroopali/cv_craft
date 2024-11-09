"use client";

import { useRouter } from "next/navigation";
import { logout } from "../actions/logout";
import { FormEvent } from "react";

export default function Page() {
  const router = useRouter();

  const logoutData = async function () {
    await logout();
  };

  const handleSubmit = function (e: FormEvent) {
    e.preventDefault();
    logoutData();
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <button className="px-4 py-2 rounded-lg bg-red-500 text-white">
        button
      </button>
    </form>
  );
}
