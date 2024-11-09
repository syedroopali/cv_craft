"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import signup, { formDataInterface } from "../actions/signup";

export default function Page() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  /////////////////////////////////////////////////////////
  const signupData = async function (data: formDataInterface) {
    try {
      setLoading(true);
      const d: { message: string } = await signup(data);
      setMessage(d.message);
    } catch (error: any) {
      throw new Error("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = function (e: FormEvent) {
    e.preventDefault();
    const data = {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      repassword: userData.repassword,
    };
    signupData(data);
  };

  ////////////////////////////////////////////////////////////

  return (
    <div className="w-full bg-gray-100 h-[90vh] flex items-center justify-center">
      <div className="w-96 bg-white py-8 px-6 shadow-md">
        <h1 className="text-center text-3xl font-bold tracking-wide mb-6">
          Sign Up
        </h1>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-6 w-full mb-3">
            <div className="flex items-center justify-center w-full gap-2">
              <FaUserLarge className="text-2xl" />

              <input
                name="username"
                type="text"
                placeholder="Enter Username"
                className="border-2 px-2 py-2  text-base w-full"
                value={userData.username}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />
            </div>

            <div className="flex gap-2 items-center justify-center w-full">
              <MdEmail className="text-2xl" />
              <input
                name="email"
                type="text"
                placeholder="Enter Email"
                className="border-2 px-2 py-2 w-full text-base"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </div>

            <div className="flex gap-2 items-center justify-center w-full">
              <RiLockPasswordFill className="text-2xl" />
              <input
                name="password"
                type="text"
                placeholder="Create Password"
                className="border-2 px-2 py-2 w-full"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>

            <div className="flex gap-2 items-center justify-center w-full">
              <RiLockPasswordFill className="text-2xl" />

              <input
                name="repassword"
                type="text"
                placeholder="Repeat Password"
                className="border-2 px-2 py-2 w-full"
                value={userData.repassword}
                onChange={(e) =>
                  setUserData({ ...userData, repassword: e.target.value })
                }
              />
            </div>
          </div>

          <div className="h-7 w-[80%] flex items-start justify-start">
            <p className="text-red-400 text-sm">{message}</p>
          </div>
          <button className="bg-purple-500 w-full rounded-lg py-2 text-gray-100 text-lg hover:bg-purple-600 transition-all duration-200 mb-4">
            {loading ? "Processing..." : "Signup"}
          </button>

          <p className="text-base text-gray-600">
            Aready have an Account? goto{" "}
            <Link href="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
