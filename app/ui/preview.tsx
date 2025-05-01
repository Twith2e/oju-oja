"use client";

import Image from "next/image";
import { PreviewPropsType } from "../lib/definitions";
// import { LiaExpandSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";

export default function Preview({
  image,
  title,
  rating,
  ratingCount,
  stock,
  price,
  oldPrice,
  discountPercentage,
  description,
  //   id,
  close,
}: PreviewPropsType) {
  return (
    <div className="p-5 rounded-md preview-container">
      <div>
        {image.map((img, index) => (
          <Image key={index} src={img} width={100} height={100} alt={img} />
        ))}
      </div>
      <div className="border border-gray-300 rounded-lg bg-[#f9fafb] p-10">
        <Image src={image[0]} width={300} height={300} alt={image[0]} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex w-full justify-end">
          <button onClick={close}>Close</button>
        </div>
        <span className="bg-[#22AD5C] text-white text-[0.75rem] text-medium py-1 px-3 w-fit">
          {discountPercentage}% OFF
        </span>
        <h2 className="text-[1.75rem] text-[#1C274C] font-semibold">{title}</h2>
        <div className="flex items-center gap-8">
          <span className="flex gap-2">
            {[...Array(5)].map((_, index) => (
              <FaStar
                className={`text-[#ffa645] ${
                  index < rating ? "text-[#ffa645]" : "text-gray-300"
                }`}
                size={16}
                key={index}
              />
            ))}
          </span>
          <span>
            {rating} Rating ({ratingCount} reviews)
          </span>
          {stock > 0 ? <span>In Stock</span> : <span>Out of Stock</span>}
        </div>
        <p>{description}</p>
        <div>
          <div className="flex flex-col">
            <span>Price</span>
            <span>
              {price} <span>{oldPrice}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
