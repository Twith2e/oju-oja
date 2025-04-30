"use client";

import { GoChevronDown } from "react-icons/go";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";
import TagButton from "./tag-button";

export default function Tags() {
  const [isOpen, setIsOpen] = useState(true);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response: Product[] = await fetchAllProducts();
      const tags = response.flatMap((res) => res.tags);
      const uniqueTags = new Set(tags);
      setTags(Array.from(uniqueTags.values()));
    };
    fetchTags();
  }, []);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full py-4 px-5 bg-white ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        }`}
      >
        <h2>Tags</h2>
        <GoChevronDown
          size={24}
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="rhs-dropdown flex-wrap gap-x-3 gap-y-2">
          {tags.length > 0 &&
            tags.map((tag, index) => <TagButton text={tag} key={index} />)}
        </div>
      )}
    </div>
  );
}
