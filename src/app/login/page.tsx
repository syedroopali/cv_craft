"use client";

import Link from "next/link";
import { ImSpinner2 } from "react-icons/im";
import { FormEvent, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { login } from "../actions/login";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  /////////////////////////////////////////////////////////

  const handleSubmit = async function (e: FormEvent) {
    e.preventDefault();
    const data = {
      email: userData.email,
      password: userData.password,
    };

    try {
      setLoading(true);
      const returnData = await login(data);
      setMessage(returnData.message);
      if (returnData.success) router.push("/form");
    } catch (error: any) {
      setMessage("unable to Login");
      throw new Error(`${error}`, error.message);
    } finally {
      setLoading(false);
    }
  };

  ////////////////////////////////////////////////////////

  return (
    <div className="w-full bg-gray-100 h-[90vh] flex items-center justify-center">
      <div className="w-96 bg-white py-8 px-6 shadow-md">
        <h1 className="text-center text-3xl font-bold tracking-wide mb-6">
          Login
        </h1>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-6 w-full mb-3">
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
                placeholder="Enter Password"
                className="border-2 px-2 py-2 w-full"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>
          </div>

          <div className="h-7 w-[80%] flex items-start justify-start">
            <p className="text-red-400 text-sm">{message}</p>
          </div>
          <button className="bg-purple-500 w-full h-11 rounded-lg py-2 text-gray-100 text-lg hover:bg-purple-600 transition-all duration-200 mb-4 flex items-center justify-center">
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                <ImSpinner2 className="text-2xl animate-spin" />
                <span> Processing...</span>{" "}
              </div>
            ) : (
              "Login"
            )}
          </button>

          <p className="text-base text-gray-600">
            dont have an Account? goto{" "}
            <Link href="/signup" className="text-blue-600">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
