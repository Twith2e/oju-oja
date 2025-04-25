import Image from "next/image";

export default function LimitedPromo() {
  return (
    <div className="px-24">
      <div className="bg-[#d0e9f3] p-[60px] rounded-md relative">
        <div className="max-w-[422px] w-full">
          <span className="text-[#3c50e0] font-medium text-[1.375rem] mb-2.5">
            Don't Miss!!
          </span>
          <h2 className="text-[#1C274C] text-[2.5rem] font-bold mb-3 leading-12">
            Enhance Your Music Experience
          </h2>
          <p className="text-base text-[#606882]">
            True Wireless Noise Cancelling Headphone
          </p>
        </div>
        <Image
          className="absolute right-4 xl:right-33 bottom-4 xl:bottom-10"
          src="/sog.webp"
          height={376}
          width={411}
          alt="headset"
        />
      </div>
    </div>
  );
}
