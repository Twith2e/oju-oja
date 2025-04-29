import { TbBackpack } from "react-icons/tb";
import { newArrivals } from "../../lib/json";
import ProductCard from "../product-card";
import Link from "next/link";

export default function BestSellers() {
  return (
    <div className="px-24">
      <div className="flex items-center gap-3">
        <TbBackpack size={24} color="#3C50E0" />
        <span className="text-sm font-medium">This Month</span>
      </div>
      <h2 className="home-section-header mt-4">Best Sellers</h2>
      <div className="arrivals-container">
        {newArrivals.map((arrival) => (
          <ProductCard
            id={arrival.id}
            oldPrice={arrival.oldPrice}
            newPrice={arrival.newPrice}
            rating={arrival.rating}
            ratingCount={arrival.ratingCount}
            productName={arrival.productName}
            image={arrival.image}
            key={arrival.id}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href=""
          className="bg-[#f2f3f8] border border-gray-300 py-3 px-[50px] rounded-md hover:bg-[#1C274C] hover:text-white duration-200 transition-colors font-medium text-sm"
          type="button"
        >
          View All
        </Link>
      </div>
    </div>
  );
}
