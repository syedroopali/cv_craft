"use client";

import { FormEvent } from "react";
import Button from "./Button";

export default function CvForm({ username }: any) {
  const handleSubmit = function (e: FormEvent) {
    e.preventDefault();
  };

  return (
    <form
      className="w-full bg-gray-200 flex items-center justify-center flex-col"
      onSubmit={handleSubmit}
    >
      <div className=" bg-purple-950 w-full flex items-center justify-between px-6">
        <h2 className="py-4 text-white  capitalize">Hy, {username} </h2>
        <Button />
      </div>
      <hr className="mb-4" />
      <div className="flex flex-col gap-4 px-4 bg-white w-80 py-4 shadow-sm">
        <div className="text-purple-950 font-bold">Personal Info</div>
        <div>
          <label htmlFor="name" className="text-purple-950">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Ahmed Abdullah"
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md "
          />
        </div>

        <div>
          <label htmlFor="name" className="text-purple-950">
            Father Name
          </label>
          <input
            type="text"
            placeholder="Ahmed Abdullah"
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md"
          />
        </div>

        <div>
          <label htmlFor="name" className="text-purple-950">
            CNIC
          </label>
          <input
            type="text"
            placeholder="Ahmed Abdullah"
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md"
          />
        </div>

        <div>
          <label htmlFor="date" className="text-purple-950">
            Date of Birth
          </label>
          <input
            type="date"
            placeholder="Ahmed Abdullah"
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md"
          />
        </div>

        <div className="w-full flex items-center justify-between">
          <select
            name="religion"
            id="religion"
            title="religion"
            className="p-1 border-2 border-purple-950 rounded-sm"
          >
            <option> Muslim</option>
            <option>Non Muslim</option>
          </select>

          <select
            name="marital"
            id="marital"
            title="marital"
            className="p-1 border-2 border-purple-950 rounded-sm"
          >
            <option> Merried</option>
            <option>Non Merried</option>
          </select>
        </div>
      </div>
    </form>
  );
}
