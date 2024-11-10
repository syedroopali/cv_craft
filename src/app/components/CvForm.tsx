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
      <div className="flex flex-col gap-4 px-4 bg-white w-80 py-4 shadow-sm ">
        <h2 className="text-purple-950 font-bold">Personal Info</h2>
        <div>
          <label htmlFor="name" className="text-purple-950">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Ahmed Abdullah"
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize "
          />
        </div>

        <div>
          <label htmlFor="name" className="text-purple-950">
            Father Name
          </label>
          <input
            type="text"
            placeholder="Ahmed Abdullah"
            className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize"
          />
        </div>

        <div>
          <label htmlFor="name" className="text-purple-950">
            CNIC
          </label>
          <input
            type="number"
            max={15}
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
            className="p-1 border-2 border-purple-950 rounded-sm w-[5.6rem]"
          >
            <option> Muslim</option>
            <option>Non Muslim</option>
          </select>

          <select
            name="marital"
            id="marital"
            title="marital"
            className="p-1 border-2 border-purple-950 rounded-sm w-[5.6rem] "
          >
            <option> Married</option>
            <option>Unmarried</option>
          </select>

          <input
            name="nationality"
            id="nationality"
            placeholder="Nationality"
            title="nationality"
            className="p-1 border-2 border-purple-950 rounded-sm w-[5.9rem] px-1 capitalize"
          ></input>
        </div>
        <h2 className="text-purple-950 font-bold mt-2">Education</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="text-purple-950">
              Matric
            </label>
            <input
              type="text"
              placeholder="Name of School"
              className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize "
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-purple-950">
                Passing Year
              </label>
              <input
                type="text"
                placeholder="2014"
                className="border-2 border-purple-950 py-2 px-2 rounded-md capitalize w-[8rem] "
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name" className="text-purple-950">
                Certificate
              </label>
              <input
                type="text"
                className="border-2 border-purple-950 py-2 px-2 w-[8rem] rounded-md capitalize "
                placeholder="Metric"
                value="Metric"
                disabled
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="text-purple-950">
              Intermediate
            </label>
            <input
              type="text"
              placeholder="Name of college"
              className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize "
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-purple-950">
                Passing Year
              </label>
              <input
                type="text"
                placeholder="2016"
                className="border-2 border-purple-950 py-2 px-2 rounded-md capitalize w-[8rem] "
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name" className="text-purple-950">
                Certificate
              </label>
              <input
                type="text"
                className="border-2 border-purple-950 py-2 px-2 w-[8rem] rounded-md capitalize "
                placeholder="Intermediate"
                value="Intermediate"
                disabled
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="text-purple-950">
              Graduation
            </label>
            <input
              type="text"
              placeholder="Name of University"
              className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize "
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-purple-950">
                Passing Year
              </label>
              <input
                type="text"
                placeholder="2018"
                className="border-2 border-purple-950 py-2 px-2 rounded-md capitalize w-[8rem] "
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name" className="text-purple-950">
                Certificate
              </label>
              <input
                type="text"
                placeholder="B.Com"
                className="border-2 border-purple-950 py-2 px-2 w-[8rem] rounded-md capitalize "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="text-purple-950">
              Masters
            </label>
            <input
              type="text"
              placeholder="Name of University "
              className="border-2 border-purple-950 py-2 px-2 w-full rounded-md capitalize "
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-purple-950">
                Passing Year
              </label>
              <input
                type="text"
                placeholder="2020"
                className="border-2 border-purple-950 py-2 px-2 rounded-md capitalize w-[8rem] "
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name" className="text-purple-950">
                Certificate
              </label>
              <input
                type="text"
                placeholder="MBA"
                className="border-2 border-purple-950 py-2 px-2 w-[8rem] rounded-md capitalize "
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
