"use client";

import SearchBar from "../search-bar";
import { LuPhoneCall } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { BsCartCheck } from "react-icons/bs";
import Link from "next/link";
import Sidebar from "../sidebar";
import { NewCartContext } from "@/app/contexts/new-cart-context";
import { useContext, useEffect, useState } from "react";
import { Cart } from "@/app/lib/schemas";

export default function TopHeader() {
  const { cart, setCart, setIsOpen, isOpen, setTotalPrice } =
    useContext(NewCartContext);
  const [total, setTotal] = useState<number>(0);
  async function fetchCart() {
    const res = await fetch("http://localhost:3000/api/carts", {
      cache: "no-store",
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Fetch /api/carts failed:", res.status, text);
      throw new Error(`API error: ${res.status}`);
    }
    const carts = await res.json();
    console.log(carts);
    setCart(carts);
    const total: number = carts.reduce((acc: number, item: Cart) => {
      return acc + Number(item.price);
    }, 0);
    setTotal(Number(total.toFixed(2)));

    setTotalPrice && setTotalPrice(total);
  }

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="py-6 px-4 lg:px-10 gap-10 flex flex-col md:flex-row md:justify-between">
      <div className="flex flex-col md:flex-row md:items-center xl:gap-20">
        <Link
          href="/"
          className="text-3xl text-[#3c50e0] font-bold whitespace-nowrap"
        >
          OJU OJA
        </Link>
        <SearchBar />
      </div>
      <div className="flex gap-8 items-center justify-between w-full xl:w-fit">
        <ul className="flex items-center gap-8 text-sm">
          <li className="xl:flex items-center gap-2 hidden">
            <LuPhoneCall size={24} color="#3C50E0" />
            <div className="flex flex-col">
              <span className="text-[0.625rem]">24/7 support</span>
              <span>08061417226</span>
            </div>
          </li>
          <li className="flex items-center gap-2">
            <CiUser size={24} color="#3C50E0" />
            <Link href="">Sign In</Link>
          </li>
          <li className="relative">
            <button
              className="flex items-center gap-2"
              onClick={() => {
                setIsOpen(!isOpen);
                console.log("clicked");
                console.log(isOpen);
              }}
            >
              <BsCartCheck size={24} color="#3C50E0" />
              <div className="flex flex-col items-end">
                <span className="text-[0.625rem]">CART</span>
                <span>${total}</span>
              </div>
              <span className="h-1 w-1 p-2 text-xs -top-1 right-8 absolute flex justify-center items-center text-white font-semibold rounded-full bg-[#3C50E0]">
                {cart.length}
              </span>
            </button>
          </li>
        </ul>
        <Sidebar />
      </div>
    </div>
  );
}
