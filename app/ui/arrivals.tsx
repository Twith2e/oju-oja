"use client";

import Link from "next/link";
import { newArrivals } from "../data";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ProductActions from "./product-actions";
import { useState } from "react";

export default function Arrivals() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="arrivals-container">
      {newArrivals.map((arrival) => (
        <div
          className="relative cursor-pointer"
          key={arrival.id}
          onMouseEnter={() => setHoveredProduct(arrival.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className="w-70 h-70 bg-[#f2f3f8] rounded-md flex flex-col items-center justify-center">
            <Image
              src={arrival.image}
              width={1000}
              height={1000}
              alt={arrival.image}
            />
          </div>
          <div className="flex flex-col gap-3 mt-3">
            <div className="flex gap-3 items-center">
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    size={16}
                    key={index}
                    className={`text-[#ffa645] ${
                      index < arrival.rating
                        ? "text-[#ffa645]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              ({arrival.ratingCount})
            </div>
            <Link href="" className="text-base font-medium">
              {arrival.productName}
            </Link>
            <div className="flex gap-2 items-center text-lg font-bold">
              <span>${arrival.newPrice}</span>
              <span className="text-gray-500 line-through">
                ${arrival.oldPrice}
              </span>
            </div>
          </div>
          <div
            className={`absolute left-1/2 -translate-x-1/2 ${
              hoveredProduct === arrival.id
                ? "bottom-[180px] opacity-100"
                : "bottom-10 opacity-0"
            } transition-all duration-200`}
          >
            <ProductActions />
          </div>
        </div>
      ))}
    </div>
  );
}
