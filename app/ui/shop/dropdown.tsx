"use client";

import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";

export default function Dropdown() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState("Latest Products");
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="w-fit relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-2 items-center py-2 px-4 border border-gray-300 rounded-md bg-white text-[#606882] font-sm cursor-pointer hover:bg-[#f2f3f8] duration-200 transition-colors"
      >
        <span className="text-sm">{selected}</span>
        <GoChevronDown
          size={24}
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <ul className="absolute bg-white border border-gray-300 rounded-md shadow-lg mt-2 py-2 w-full z-10">
          <li className="p-3 hover:bg-gray-300 text-sm cursor-pointer">
            Latest Products
          </li>
          <li className="p-3 hover:bg-gray-300 text-sm cursor-pointer">
            Best Selling
          </li>
        </ul>
      )}
    </div>
  );
}
