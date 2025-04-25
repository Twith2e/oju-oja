import Image from "next/image";
import Link from "next/link";

export default function ProductGrid() {
  return (
    <div className="container w-screen">
      <div className="big flex justify-between">
        <div className="flex flex-col gap-10">
          <div className="flex gap-2 items-center">
            <span className="text-6xl font-bold text-[#3c50e0]">30%</span>
            <span>Sale off</span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-3xl font-black">
              Macbook Pro M4 Pro - 512GB/16GB
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sed
              sunt laudantium voluptas provident nostrum quam autem iusto
              tempore numquam!
            </span>
          </div>
          <Link
            href=""
            className="bg-[#1c274c] hover:bg-[#3c50e0] text-white py-3 px-8 rounded-md w-fit"
          >
            <span>Show Now</span>
          </Link>
        </div>
        <div>
          <Image
            src="/download.jpg"
            width={354}
            height={360}
            alt="product image"
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0 bg-gray-200 flex items-center justify-center"
            style={{ display: "none" }}
          >
            Image not found
          </div>
        </div>
      </div>
      <div className="small-1">small 1</div>
      <div className="small-2">small 2</div>
    </div>
  );
}
