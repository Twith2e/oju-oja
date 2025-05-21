"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import CartItems from "./shop/cart-items";
import { NewCartContext } from "../contexts/new-cart-context";

type CartType = {
  productID: number;
};

export default function Cart() {
  const [cart, setCart] = useState<CartType[]>([]);
  const { isOpen, setIsOpen, totalPrice } = useContext(NewCartContext);

  async function fetchCart() {
    const baseURL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://oja-nine.vercel.app";

    try {
      const res = await fetch(`/api/carts`);
      if (!res.ok) {
        console.error("Failed to fetch cart from cart.tsx");
        console.error(`${baseURL}/api/cart`);
        return [];
      }
      const cart = await res.json();
      setCart(cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
      return [];
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <aside
      className={`bg-white fixed top-0 w-full xl:w-[35%] h-screen z-20 shadow-lg p-8 ${
        isOpen ? "right-0" : "-right-full"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-[#1C274C]">Cart</h2>
        <button
          className="text-gray-300 font-semibold border-2 border-gray-300 h-5 w-5 flex items-center justify-center rounded-full hover:text-black hover:border-black hover:border-2 transition-colors duration-200 ease-in-out"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          <span className="sr-only">Close</span>
          <IoIosClose size={30} />
        </button>
      </div>
      <div className="py-3 border-y border-gray-200 mt-12 overflow-auto h-[60vh]">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-xl font-semibold text-[#1C274C]">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mt-2">
              Add items to your cart to see them here.
            </p>
          </div>
        ) : (
          cart.map((item: { productID: number }, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <CartItems id={item.productID} />
            </div>
          ))
        )}
      </div>
      <div className="flex flex-col mt-5 gap-4">
        <div className="flex justify-between items-center text-[#1C274C] text-xl font-medium">
          <span>Subtotal:</span>
          <span>${totalPrice?.toFixed(2)}</span>
        </div>
        <div className="flex gap-3 text-white">
          <Link
            className="py-[13px] px-7 rounded-md bg-[#3c50e0] w-full text-center"
            href="/cart"
          >
            View in Cart
          </Link>
          <Link
            className="py-[13px] px-7 rounded-md bg-[#1C274C] w-full text-center"
            href="/checkout"
          >
            Checkout
          </Link>
        </div>
      </div>
    </aside>
  );
}
