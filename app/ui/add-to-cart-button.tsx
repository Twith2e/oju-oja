"use client";

import { useContext, useState } from "react";
import { NewCartContext } from "../contexts/new-cart-context";
import { toast } from "react-toastify";

export default function AddToCartButton({
  id,
  price,
}: {
  id: number;
  price: number;
}) {
  const { cart, setCart } = useContext(NewCartContext);
  const [isLoading, setIsLoading] = useState(false);
  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://oja-nine.vercel.app";
  const isInCart = cart.find((item) => item.productID === id);

  async function addToCart(id: number, price: number) {
    try {
      const res = await fetch(`${baseURL}/api/carts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productID: id, price }),
      });
      console.log(id);

      if (!res.ok) {
        console.log("no response gee");
        return;
      }
      const data = await res.json();
      console.log(data);

      if (data.message !== "Item already in cart") {
        setCart((prev) => [...prev, data]);
        toast.success("Item added to cart");
      } else {
        toast.error("Item already in cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Error adding to cart");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <button
      className="bg-[#495270] py-3 px-7 rounded-md text-white font-semibold hover:bg-[#3c50e0] transition-all duration-200 ease-in-out"
      disabled={isLoading}
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
        if (isInCart) {
          console.log("Item already in cart");
        } else {
          addToCart(id, price);
        }
      }}
    >
      {isInCart ? <span>Added</span> : <span>Add to Cart</span>}
    </button>
  );
}
