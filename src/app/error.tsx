"use client";

import Link from "next/link";

export default function Error({ error }) {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <p className="text-xl mb-1 font-medium">Something went wrong...</p>
      <p className="mb-4">{error.message}</p>
      <div>
        <Link
          href="/"
          className="bg-purple-500 rounded-lg px-6 py-2 text-gray-100"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
