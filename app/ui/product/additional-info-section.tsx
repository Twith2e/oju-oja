"use client";

import { Product } from "@/app/lib/definitions";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function AdditionalInfoSection({
  product,
}: {
  product: Product;
}) {
  const [selectedTab, setSelectedTab] = useState("description");
  const [hovered, setHovered] = useState({
    description: false,
    additionalInfo: false,
    reviews: false,
  });
  return (
    <div className="bg-[#F3F4F6] py-20 px-4 lg:px-10 xl:px-24 h-full lg:py-28">
      <nav className="bg-white rounded-xl p-6">
        <ul className="flex gap-5 xl:gap-12 flex-wrap">
          <li>
            <button
              className={`${hovered.description && "text-[#3C50E0]"} ${
                selectedTab === "description" && "text-[#3c50e0]"
              } text-lg font-semibold text-[#1C274C] cursor-pointer`}
              onMouseEnter={() => setHovered({ ...hovered, description: true })}
              onMouseLeave={() =>
                setHovered({ ...hovered, description: false })
              }
              onClick={() => {
                setSelectedTab("description");
              }}
            >
              Description
            </button>
          </li>
          <li>
            <button
              className={`${hovered.additionalInfo && "text-[#3C50E0]"} ${
                selectedTab === "additional-info" && "text-[#3C50E0]"
              } text-lg font-semibold text-[#1C274C] cursor-pointer`}
              onMouseEnter={() =>
                setHovered({ ...hovered, additionalInfo: true })
              }
              onMouseLeave={() =>
                setHovered({ ...hovered, additionalInfo: false })
              }
              onClick={() => {
                setSelectedTab("additional-info");
              }}
            >
              Additional Information
            </button>
          </li>
          <li>
            <button
              className={`${hovered.reviews && "text-[#3C50E0]"} ${
                selectedTab === "reviews" && "text-[#3c50e0]"
              } text-lg font-semibold text-[#1C274C] cursor-pointer`}
              onMouseEnter={() => setHovered({ ...hovered, reviews: true })}
              onMouseLeave={() => setHovered({ ...hovered, reviews: false })}
              onClick={() => {
                setSelectedTab("reviews");
              }}
            >
              Reviews
            </button>
          </li>
        </ul>
      </nav>
      {selectedTab === "description" && (
        <div className="mt-12">
          <h2 className="text-[#1C274C] text-2xl font-semibold">
            Description:
          </h2>
          <p className="mt-5 text-[#606882] w-full xl:w-2/3">
            {product.description}
          </p>
        </div>
      )}
      {selectedTab === "additional-info" && (
        <div className="mt-12">
          <h2 className="text-[#1C274C] text-2xl font-semibold">
            Additional Information:
          </h2>
          <p className="mt-5 text-[#606882] w-2/3 font-bold">
            Return Policy:{" "}
            <span className="font-normal">{product.returnPolicy}</span>
          </p>
        </div>
      )}
      {selectedTab === "reviews" && (
        <div className="mt-12">
          <div className="mt-5">
            <h2 className="text-2xl font-semibold text-[#1C274C]">
              {product.reviews.length} Reviews for this product
            </h2>
            <div className="flex flex-col gap-3 mt-5">
              {product.reviews.map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-md">
                  <div className="flex mb-4 items-center justify-between">
                    <span className="text-[#1C274C] font-semibold">
                      {review.reviewerName}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          size={16}
                          key={index}
                          className={`text-[#ffa645] ${
                            index < review.rating
                              ? "text-[#ffa645]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#1C274C]">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
