import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import ProductCard from "../product-card";
import { fetchAllProducts } from "../../lib/data";
import { Product } from "../../lib/definitions";

export default async function NewProductCard() {
  const products: Product[] = await fetchAllProducts();

  const cappedProducts = products.slice(0, 8);
  console.log(cappedProducts);

  return (
    <div className="px-24">
      <span className="flex gap-3 items-center font-medium text-base">
        <FiShoppingBag color="#3c50e0" size={24} />
        This Week&apos;s
      </span>
      <div className="flex justify-between items-center mt-4">
        <h2 className="home-section-header">New Arrivals</h2>
        <Link
          className="bg-[#f2f3f8] border border-gray-300 py-3 px-6 rounded-md hover:bg-[#1C274C] hover:text-white duration-200 transition-colors font-medium text-sm"
          href="/shop"
        >
          View All
        </Link>
      </div>
      <div className="arrivals-container">
        {cappedProducts.map((product) => (
          <ProductCard
            id={product.id}
            productName={product.title}
            oldPrice={product.price.toString()}
            newPrice={(
              product.price -
              (product.discountPercentage / 100) * product.price
            ).toFixed(2)}
            rating={product.rating}
            ratingCount={product.reviews.length}
            image={product.images[1] || product.thumbnail}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
