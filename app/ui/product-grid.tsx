import Image from "next/image";
import Link from "next/link";

export default function ProductGrid() {
  return (
    <div className="container px-4 py-5 lg:px-10 xl:px-24">
      <div className="big flex flex-col-reverse md:flex-row justify-between">
        <div className="flex flex-col justify-center gap-10 max-w-md">
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
            width={500}
            height={500}
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
      <div className="small-1 flex justify-between items-center">
        <div className="flex flex-col">
          <Link href="" className="text-[#3c50e0] text-xl font-semibold mb-20">
            Macbook Pro - 512/16GB
          </Link>
          <div className="flex flex-col gap-2">
            <span className="text-[#8D93A5]">limited time offer</span>
            <div className="flex gap-3">
              <span className="text-[1.75rem] text-[#F23030] font-medium">
                $450
              </span>
              <span className="line-through text-[#8D93A5] text-2xl font-medium">
                $500
              </span>
            </div>
          </div>
        </div>
        <Image src="/pro.webp" width={150} height={150} alt="Macbook Pro" />
      </div>
      <div className="small-2 flex justify-between items-center">
        <div className="flex flex-col">
          <Link href="" className="text-[#3c50e0] text-xl font-semibold mb-20">
            iPhone 16 Pro - 8/128GB
          </Link>
          <div className="flex flex-col gap-2">
            <span className="text-[#8D93A5]">limited time offer</span>
            <div className="flex gap-3">
              <span className="text-[1.75rem] text-[#F23030] font-medium">
                $600
              </span>
              <span className="line-through text-[#8D93A5] text-2xl font-medium">
                $899
              </span>
            </div>
          </div>
        </div>
        <Image
          src="/iPhone-16-pro.webp"
          width={150}
          height={150}
          alt="iPhone 16 pro"
        />
      </div>
    </div>
  );
}
