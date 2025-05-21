"use client";

import Image from "next/image";
import { PreviewPropsType } from "../lib/definitions";
import { IoCloseOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
// import { LiaExpandSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import ImageOptionSkeleton from "./shop/imageOptionSkeleton";
import { ProductQtyButton } from "./product-qty-button";

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
  const [currentImage, setCurrentImage] = useState<string>(image[0]);
  return (
    <div className="p-5 pe-10 py-10 rounded-md preview-container">
      {image.length < 0 ? (
        <ImageOptionSkeleton />
      ) : (
        <div>
          {image.map((img, index) => (
            <button
              className={`bg-[#f9fafb] hover:ring-1 hover:ring-[#3c50e0] cursor-pointer rounded-lg ${
                currentImage === img && "ring-[#3c50e0] ring-2"
              }`}
              onClick={() => setCurrentImage(img)}
              key={index}
            >
              <Image src={img} width={100} height={100} alt={img} />
            </button>
          ))}
        </div>
      )}

      <div className="border border-gray-300 rounded-lg bg-[#f9fafb] p-10">
        <Image src={currentImage} width={300} height={300} alt={currentImage} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex w-full justify-end">
          <button
            className="cursor-pointer hover:text-red-500 flex items-center justify-center w-9 h-9 rounded-full bg-[#f3f4f6]"
            onClick={close}
          >
            <IoCloseOutline size={24} />
          </button>
        </div>
        <span className="bg-[#22AD5C] text-white text-[0.75rem] text-medium py-1 px-3 w-fit">
          {discountPercentage}% OFF
        </span>
        <h2 className="text-[1.75rem] text-[#1C274C] font-semibold">{title}</h2>
        <div className="flex items-center gap-3">
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
          <span className="text-[#1C274C] font-medium">
            {rating} Rating{" "}
            <span className="text-[#495270] font-normal">
              ({ratingCount} reviews)
            </span>
          </span>
          {stock > 0 ? (
            <span className="text-[#22AD5C] flex gap-2 items-center">
              <CiCircleCheck size={24} /> In Stock
            </span>
          ) : (
            <span>Out of Stock</span>
          )}
        </div>
        <p className="text-[#606882] font-normal">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-5">
            <h4 className="text-lg text-[#1C274C] font-semibold">Price</h4>
            <span className="text-3xl text-[#1C274C] font-semibold">
              ${price}{" "}
              <span className="text-2xl text-[#8D93A5] font-medium line-through">
                ${oldPrice}
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-lg text-[#1C274C] font-semibold select-none">
              Quantity
            </h4>
            <ProductQtyButton stock={stock} />
          </div>
        </div>
      </div>
    </div>
  );
}
