import Image from "next/image";
import { testimonyCardType } from "../types";
import { FaStar } from "react-icons/fa";

export function TestimonyCard({
  rating,
  name,
  comment,
  image,
  job,
}: testimonyCardType) {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg p-[30px] w-fit m-1">
      <div className="flex gap-2">
        {[...Array(5)].map((_, index) => (
          <FaStar
            size={16}
            key={index}
            className={`text-[#ffa645] ${
              index < rating ? "text-[#ffa645]" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-base text-[#1C274C] mt-2">{comment}</p>
      <div className="flex items-center mt-4">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <Image
            className="object-cover"
            width={120}
            height={120}
            src={image}
            alt="testimony"
          />
        </div>
        <div className="flex flex-col gap-1 ml-3">
          <h3 className="text-base font-medium text-[#1C274C]">{name}</h3>
          <p className="text-sm text-[#606882]">{job}</p>
        </div>
      </div>
    </div>
  );
}
