import Image from "next/image";
import Link from "next/link";
import { getCategories } from "../../lib/data";

export default async function CategoryProducts() {
  const categories = await getCategories();
  const cappedCategories = categories?.slice(0, 6);

  return (
    <div className="flex overflow-auto gap-16 justify-center mt-8">
      {cappedCategories?.map((category, index) => (
        <Link
          key={index}
          href=""
          className="flex flex-col items-center gap-2 mb-8"
        >
          <div className="h-30 w-30 rounded-full bg-[#f2f3f8] flex items-center justify-center">
            <Image
              src={category.image}
              alt={category.category}
              width={90}
              height={90}
            />
          </div>

          <h3 className="text-base font-semibold text-[#1C274C]">
            {category.category}
          </h3>
        </Link>
      ))}
    </div>
  );
}
