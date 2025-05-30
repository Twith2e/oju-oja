import Image from "next/image";
import Countdown from "./countdown";
import Link from "next/link";

export default function LimitedPromo() {
  return (
    <div className="px-5 lg:px-10 xl:px-24">
      <div className="bg-[#d0e9f3] lg:p-[60px] p-5 py-8 rounded-md relative">
        <div className="max-w-[422px] w-full">
          <span className="text-[#3c50e0] font-medium text-[1.375rem] mb-2.5">
            Don&apos;t Miss!!
          </span>
          <h2 className="text-[#1C274C] lg:text-[2.5rem] text-xl font-bold mb-3 leading-12">
            Enhance Your Music Experience
          </h2>
          <p className="text-base text-[#606882]">
            True Wireless Noise Cancelling Headphone
          </p>
          <Countdown />
          <Link
            className="bg-[#3c50e0] text-white hover:bg-[#1C3FB7] py-4 px-[38px] rounded-md font-medium text-sm mt-10"
            href=""
          >
            <span>Check it Out!</span>
          </Link>
        </div>
        <Image
          className="absolute right-4 xl:right-33 bottom-4 xl:bottom-10 hidden lg:block"
          src="/sog.webp"
          height={376}
          width={411}
          alt="headset"
        />
      </div>
    </div>
  );
}
