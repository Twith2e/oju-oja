import Breadcrumbs from "../../ui/shop/breadcrumbs";
import { Metadata } from "next";
import { fetchProductByID } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";
import { FaStar } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { ProductQtyButton } from "@/app/ui/product-qty-button";
import AddToCartButton from "@/app/ui/add-to-cart-button";
import ProductImagePreview from "@/app/ui/product/product-image-preview";
import { CiHeart } from "react-icons/ci";
import AdditionalInfoSection from "@/app/ui/product/additional-info-section";

export const metadata: Metadata = {
  title: ``,
  description: "",
};

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product: Product = await fetchProductByID(id);

  return (
    <main className="pt-50">
      <div className="pt-10 flex flex-col gap-3 lg:gap-0 lg:flex-row lg:items-center lg:justify-between px-4 lg:px-10 xl:px-24">
        <h1 className="text-xl lg:text-[2rem] text-[#1C274C] font-semibold">
          Explore All Products
        </h1>
        <Breadcrumbs />
      </div>
      <div className="px-4 lg:px-10 xl:px-24 h-full py-5 lg:py-28">
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="flex-1">
            <ProductImagePreview image={product.images} />
          </div>
          <div className="flex-1 p-4 bg-white flex flex-col gap-4">
            <div className="flex gap-2 items-start">
              <h2 className="product-title w-[80%]">{product.title}</h2>
              <span className="bg-[#3C50E0] text-white text-sm py-0.5 px-2.5 rounded-sm font-medium">
                {product.discountPercentage}% OFF
              </span>
            </div>
            <div className="flex gap-3 items-center flex-wrap">
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    size={16}
                    key={index}
                    className={`text-[#ffa645] ${
                      index < product.rating
                        ? "text-[#ffa645]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span>({product.reviews.length} customer reviews)</span>
              {product.stock > 0 ? (
                <span className="text-[#22AD5C] flex gap-2 items-center">
                  <CiCircleCheck size={24} /> In Stock
                </span>
              ) : (
                <span>Out of Stock</span>
              )}
            </div>
            <div className="flex gap-2 items-center text-lg font-bold">
              <span>${product.price}</span>
              <span className="text-gray-500 line-through">
                ${product.price + product.discountPercentage}
              </span>
            </div>
            <div className="py-10 border-y border-y-gray-200 flex gap-5 flex-wrap">
              <div className="flex gap-2">
                <span>Tags</span>
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#f2f3f8] text-[#1C274C] text-sm py-1 px-3 rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span>Weight: {product.weight}</span>
            </div>
            <div className="flex gap-3 flex-wrap">
              <ProductQtyButton stock={product.stock} />
              <button className="bg-[#1C3FB7] py-3 px-7 font-medium rounded-md text-white">
                <span>Purchase Now</span>
              </button>
              <AddToCartButton id={product.id} price={product.price} />
              <button className="bg-white p-2 px-3 rounded-md cursor-pointer shadow-md">
                <CiHeart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AdditionalInfoSection product={product} />
      </div>
    </main>
  );
}
