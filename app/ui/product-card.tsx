"use client";

import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ProductActions from "./product-actions";
import { productCardType } from "@/app/lib/definitions";
import { useState } from "react";

export default function ProductCard({
  id,
  image,
  productName,
  newPrice,
  oldPrice,
  rating,
  ratingCount,
  backgroundColor,
}: productCardType) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <Link
      href={`/products/${id}`}
      className="relative cursor-pointer w-full"
      key={id}
      onMouseEnter={() => setHoveredProduct(id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      <div className="w-full h-90 lg:h-70 bg-[#f2f3f8] rounded-xl flex flex-col items-center justify-center">
        <Image
          className={`p-2 rounded-xl max-h-full w-full object-contain ${
            backgroundColor && "bg-white"
          }`}
          src={image}
          width={300}
          height={300}
          alt={image}
        />
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <div className="flex gap-3 items-center">
          <div className="flex gap-1">
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
          ({ratingCount})
        </div>
        <span className="text-base font-medium">{productName}</span>
        <div className="flex gap-2 items-center text-lg font-bold">
          <span>${newPrice}</span>
          <span className="text-gray-500 line-through">${oldPrice}</span>
        </div>
      </div>
      <div
        className={`absolute left-1/2 -translate-x-1/2 ${
          hoveredProduct === id
            ? "bottom-[180px] opacity-100"
            : "bottom-10 opacity-0"
        } transition-all duration-200`}
      >
        <ProductActions id={id} price={+oldPrice} />
      </div>
    </Link>
  );
}
