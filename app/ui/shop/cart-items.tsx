"use client";

import { NewCartContext } from "@/app/contexts/new-cart-context";
import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartItems({ id }: { id: number }) {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(false);
  const { setCart } = useContext(NewCartContext);

  async function fetchProductWithCartId() {
    try {
      const res = await fetch(`https://dummyjson.com/products/1${id}`);
      if (!res.ok) {
        console.error("Failed to fetch product from cart.tsx");
        return [];
      }
      const product = await res.json();
      setProduct(product);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  async function deleteItem(id: number) {
    const baseURL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://oja-nine.vercel.app";

    try {
      const res = await fetch(`${baseURL}/api/carts`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productID: id }),
      });
      if (!res.ok) {
        console.error("Failed to delete item from cart");
        return;
      }
      fetchProductWithCartId();
      setCart((prev) => prev.filter((item) => item.productID !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  useEffect(() => {
    fetchProductWithCartId();
  }, []);

  return (
    <>
      {product && (
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-3 items-center">
            <div className="flex items-center justify-center bg-[#f2f3f8] rounded-xl p-2 min-w-fit">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={80}
                height={80}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Link
                className="text-[#1C274C] hover:text-[#3C50E0] font-medium whitespace-break-spaces"
                href=""
              >
                {product.title}
              </Link>
              <span className="text-[#606882] text-sm">
                Price: ${product.price}
              </span>
            </div>
          </div>
          <button
            className="bg-[#f2f3f8] rounded-lg p-2 hover:bg-[#3C50E0] hover:text-white transition-colors duration-200"
            onClick={() => deleteItem(id)}
          >
            <RiDeleteBin6Line size={24} />
          </button>
        </div>
      )}
    </>
  );
}
