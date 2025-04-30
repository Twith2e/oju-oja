"use client";

import { useState, useEffect } from "react";
import { getCategories } from "@/app/lib/data";
import { GoChevronDown } from "react-icons/go";
import CustomRadio from "./custom-radio";
import { Category } from "@/app/lib/definitions";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      if (data) setCategories(data);
    };
    fetchCategories();
  }, []);
  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full py-4 px-5 bg-white ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        }`}
      >
        <h2>Category</h2>
        <GoChevronDown
          size={24}
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="rhs-dropdown flex-col gap-3">
          {categories?.map((category, index) => (
            <CustomRadio
              key={index}
              count={category.count}
              text={category.category}
            />
          ))}
        </div>
      )}
    </div>
  );
}
