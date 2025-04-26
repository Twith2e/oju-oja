import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="px-24">
      <div className="relative rounded-xl overflow-hidden">
        <Image
          alt="background illustration"
          className="absolute left-0 top-0 h-full w-full rounded-xl -z-1"
          height={200}
          width={1170}
          src="/newsletter-bg.webp"
        />
        <div className="absolute -z-1 w-full h-full right-0 left-0 bg-gradient-1 max-h-[243px] max-w-[523px]"></div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-4 sm:px-7.5 xl:pl-12.5 xl:pr-14 py-11">
          <div className="max-w-[491px] w-full">
            <h2 className="max-w-[399px] text-white font-bold text-lg sm:text-xl xl:text-[1.875rem] mb-3">
              Don't Miss Out Latest Trends &amp; Offers
            </h2>
            <p className="text-white text-base">
              Register to receive news about the latest offers &amp; discount
              codes
            </p>
          </div>
          <div className="max-w-[477px] w-full">
            <form>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#f9fafb] border border-[rgb(229,231,235)] outline-hidden rounded-md placeholder:text-dark-4 py-3 px-5"
                  type="email"
                  name="email"
                />
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-7 text-white bg-[#3c50e0] font-medium rounded-md ease-out duration-200 hover:bg-[#1C3FB7] cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
