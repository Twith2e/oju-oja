import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import ProductCard from "./product-card";
import { newArrivals } from "@/app/data";

export default function NewProductCard() {
  return (
    <div className="px-24">
      <span className="flex gap-3 items-center font-medium text-base">
        <FiShoppingBag color="#3c50e0" size={24} />
        This Week's
      </span>
      <div className="flex justify-between items-center mt-4">
        <h2 className="home-section-header">New Arrivals</h2>
        <Link
          className="bg-[#f2f3f8] border border-gray-300 py-3 px-6 rounded-md hover:bg-[#1C274C] hover:text-white duration-200 transition-colors font-medium text-sm"
          href=""
        >
          View All
        </Link>
      </div>
      <div className="arrivals-container">
        {newArrivals.map((arrival) => (
          <ProductCard
            id={arrival.id}
            productName={arrival.productName}
            oldPrice={arrival.oldPrice}
            newPrice={arrival.newPrice}
            rating={arrival.rating}
            ratingCount={arrival.ratingCount}
            image={arrival.image}
            key={arrival.id}
          />
        ))}
      </div>
    </div>
  );
}
