import { TbBackpack } from "react-icons/tb";
import ProductCard from "../product-card";
import Link from "next/link";
import { fetchBestSelling } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";

export default async function BestSellers() {
  const bestSelling: Product[] = await fetchBestSelling(8);
  return (
    <div className="px-4 lg:px-24">
      <div className="flex items-center gap-3">
        <TbBackpack size={24} color="#3C50E0" />
        <span className="text-sm font-medium">This Month</span>
      </div>
      <h2 className="home-section-header mt-4">Best Sellers</h2>
      <div className="arrivals-container">
        {bestSelling.map((arrival) => (
          <ProductCard
            id={arrival.id}
            oldPrice={(
              arrival.price -
              (arrival.discountPercentage / 100) * arrival.price
            ).toFixed(2)}
            newPrice={arrival.price.toString()}
            rating={arrival.rating}
            ratingCount={arrival.reviews.length}
            productName={arrival.title}
            image={arrival.images[0]}
            key={arrival.id}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="/shop?sort=bestSelling"
          className="bg-[#f2f3f8] border border-gray-300 py-3 px-[50px] rounded-md hover:bg-[#1C274C] hover:text-white duration-200 transition-colors font-medium text-sm"
          type="button"
        >
          View All
        </Link>
      </div>
    </div>
  );
}
