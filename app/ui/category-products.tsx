import { categories } from "@/app/data";
import Image from "next/image";
import Link from "next/link";

export default function CategoryProducts() {
  return (
    <div className="flex overflow-auto gap-16 justify-center mt-8">
      {categories.map((category) => (
        <Link
          key={category.id}
          href=""
          className="flex flex-col items-center gap-2 mb-8"
        >
          <div className="h-30 w-30 rounded-full bg-[#f2f3f8] flex items-center justify-center">
            <Image
              src={category.image}
              alt={category.title}
              width={70}
              height={70}
            />
          </div>

          <h3 className="text-base font-semibold text-[#1C274C]">
            {category.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}
