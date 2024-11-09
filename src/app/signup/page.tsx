import Link from "next/link";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Page() {
  return (
    <div className="w-full bg-gray-100 h-[90vh] flex items-center justify-center">
      <div className="w-96 bg-white py-8 px-6 shadow-md">
        <h1 className="text-center text-3xl font-bold tracking-wide mb-6">
          Sign Up
        </h1>
        <form className="flex flex-col gap-6 items-center justify-center ">
          <div className="flex gap-2 items-center justify-center w-full">
            <FaUserLarge className="text-2xl" />
            <input
              type="text"
              placeholder="Enter Username"
              className="border-2 px-2 py-2 w-full text-base"
            />
          </div>

          <div className="flex gap-2 items-center justify-center w-full">
            <MdEmail className="text-2xl" />
            <input
              type="text"
              placeholder="Enter Email"
              className="border-2 px-2 py-2 w-full text-base"
            />
          </div>

          <div className="flex gap-2 items-center justify-center w-full">
            <RiLockPasswordFill className="text-2xl" />
            <input
              type="text"
              placeholder="Create Password"
              className="border-2 px-2 py-2 w-full"
            />
          </div>

          <div className="flex gap-2 items-center justify-center w-full">
            <RiLockPasswordFill className="text-2xl" />

            <input
              type="text"
              placeholder="Repeat Password"
              className="border-2 px-2 py-2 w-full"
            />
          </div>
          <button className="bg-purple-500 w-full rounded-lg py-2 text-gray-100 text-lg hover:bg-purple-600 transition-all duration-200">
            SignUp
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
