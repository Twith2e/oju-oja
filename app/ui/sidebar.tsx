"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative xl:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoIosClose size={28} /> : <RxHamburgerMenu size={28} />}
      </button>
      {isOpen && (
        <ul className="text-sm flex flex-col gap-4 absolute top-15 w-[300px] -right-4 bg-white p-5 rounded-lg shadow-lg">
          <li className="cursor-pointer">Popular</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      )}
    </div>
  );
}
