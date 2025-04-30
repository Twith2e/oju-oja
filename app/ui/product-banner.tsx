import Image from "next/image";
import Link from "next/link";

export default function ProductBanner() {
  return (
    <div className="px-5 lg:px-10 xl:px-24 banner-grid">
      <div className="bg-[#f5f5f7] flex justify-between items-center py-[60px] lg:py-[90px] px-4 lg:px-[4.75rem] rounded-md relative wide">
        <div className="flex flex-col gap-5 items-start w-full max-w-[550px] z-10">
          <span className="text-xl font-medium">Apple iPhone 14 Plus</span>
          <span className="text-xl lg:text-[2.5rem] font-bold">
            UP TO 30% OFF
          </span>
          <p className="text-[#606882] text-base">
            iPhone 14 has the same superspeedy chip that&apos;s in iPhone 13
            Pro, A15 Bionic, with a 5-core GPU, powers all the latest features.
          </p>
          <Link
            className="bg-[#3c50e0] hover:bg-[#1C3FB7] text-white py-[0.6875rem] px-[2.375rem] rounded-md text-sm font-medium"
            href=""
          >
            <span>Buy Now</span>
          </Link>
        </div>
        <Image
          className="absolute bottom-0 right-4 lg:right-26"
          src="/banner-iphone.webp"
          width={274}
          height={350}
          alt="banner-image"
        />
      </div>
      <div className="narrow-1 relative bg-[#dbf4f3] rounded-lg py-16 px-4 lg:px-10 flex flex-col items-end gap-3">
        <Image
          src="/treadmill-200.webp"
          width={200}
          height={200}
          alt="banner-image"
          className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10"
        />
        <span className="z-10">Foldable Motorised Treadmill</span>
        <h2 className="text-xl lg:text-3xl font-bold z-10">Workout At Home</h2>
        <p className="text-[#02aaa4] text-[22px] font-semibold z-10">
          Flat 20% off
        </p>
        <Link
          className="bg-[#02aaa4] hover:bg-[#06A09B] text-white py-2.5 px-[34px] rounded-md text-sm font-medium mt-5 z-10"
          href=""
        >
          <span>Grab Now</span>
        </Link>
      </div>
      <div className="narrow-2 bg-[#ffece1] rounded-lg relative py-16 px-4 lg:px-10 flex flex-col items-start">
        <Image
          src="/watch-200.webp"
          width={200}
          height={200}
          alt="banner-image"
          className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5"
        />
        <span className="text-lg mb-1.5 z-10">Apple Watch Ultra</span>
        <h2 className="text-xl lg:text-3xl font-bold mb-2.5 z-10">
          Up to 40% off
        </h2>
        <p className="text-[#606882] text-sm mb-2.5 max-w-[285px] z-10">
          The aerospace-grade titanium case strikes the perfect balance of
          everything.
        </p>
        <Link
          className="bg-[#f27430] hover:bg-[#E1580E] text-white py-2.5 px-[34px] rounded-md text-sm font-medium mt-[30px] z-10"
          href=""
        >
          <span>Buy Now</span>
        </Link>
      </div>
    </div>
  );
}
