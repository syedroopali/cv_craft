import Image from "next/image";
import { ImSpinner2 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="w-full h-[85vh] flex items-center justify-center flex-col gap-2">
      <ImSpinner2 className="text-5xl animate-spin text-gray-400" />
      <p>Loading, Please Wait...</p>
    </div>
  );
}
