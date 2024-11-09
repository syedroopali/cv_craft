import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <Image
        width={70}
        height={70}
        alt="loadin"
        src="/loader.png"
        className="animate-spin"
      />
    </div>
  );
}
