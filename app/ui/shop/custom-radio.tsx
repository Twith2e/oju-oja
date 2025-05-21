"use client";

import { CustomRadioProps } from "@/app/lib/definitions";
import { useContext, useEffect, useRef, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ShopContext } from "@/app/contexts/shop-context";

export default function CustomRadio({ count, text }: CustomRadioProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const checkboxId = `checkbox-${text.replace(/\s+/g, "-").toLowerCase()}`;
  const { setIsOpen } = useContext(ShopContext);

  const textRef = useRef<HTMLSpanElement>(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleCategoryPick() {
    const currentParams = new URLSearchParams(searchParams.toString());
    const selectedCategory = textRef.current?.innerText;
    if (!selectedCategory) return;

    const existing = currentParams.get("category") ?? "";
    const categories = existing ? existing.split(",") : [];

    const idx = categories.indexOf(selectedCategory);
    if (idx >= 0) {
      categories.splice(idx, 1);
    } else {
      categories.push(selectedCategory);
    }

    if (categories.length) {
      currentParams.set("category", categories.join(","));
    } else {
      currentParams.delete("category");
    }

    replace(`${pathname}?${currentParams.toString()}`, { scroll: false });
  }

  const handleToggle = () => setIsChecked((prev) => !prev);

  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams.toString());
    const selectedCategory = textRef.current?.innerText;
    if (!selectedCategory) return;

    const existing = currentParams.get("category") ?? "";
    const categories = existing ? existing.split(",") : [];

    if (categories.includes(selectedCategory)) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [searchParams]);

  return (
    <div
      onClick={() => {
        handleToggle();
        handleCategoryPick();
        setIsOpen(false);
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className="flex justify-between items-center cursor-pointer select-none"
    >
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id={checkboxId}
          className="hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
            isChecked ? "bg-blue-600 border-blue-600" : "border-gray-400"
          }`}
        >
          {isChecked && (
            <svg
              className="text-white w-3 h-3"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>

        <span ref={textRef}>{text}</span>
      </div>
      <span
        className={`py-1 px-2 text-xs rounded-full ${
          isChecked
            ? "bg-[#3c50e0]"
            : isHovered
            ? "bg-[#3c50e0]"
            : "bg-gray-300"
        }`}
      >
        {count}
      </span>
    </div>
  );
}
