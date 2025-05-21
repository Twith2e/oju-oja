"use client";

import { ShopContext } from "@/app/contexts/shop-context";
import { useContext } from "react";
import { AiOutlineSwap } from "react-icons/ai";

export default function ToggleSidebarButton() {
  const { isOpen, setIsOpen } = useContext(ShopContext);
  return (
    <button
      className={`fixed top-40 block bg-white p-2 rounded-md shadow-md z-10 xl:hidden ${
        isOpen ? "right-5" : "left-5"
      } transition-all duration-300 ease-in-out`}
      onClick={() => {
        setIsOpen(!isOpen);
        console.log("sidebar isOpen:", isOpen);
      }}
    >
      <AiOutlineSwap size={24} />
    </button>
  );
}
