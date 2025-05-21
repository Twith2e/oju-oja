"use client";

import { useState, useRef, useContext } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ShopContext } from "@/app/contexts/shop-context";

export default function TagButton({ text }: { text: string }) {
  const [isActive, setIsActive] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { setIsOpen } = useContext(ShopContext);
  function handleTagPick() {
    const currentParams = new URLSearchParams(searchParams.toString());
    const selectedTag = textRef.current?.innerText;
    if (!selectedTag) return;

    const existing = currentParams.get("tags") ?? "";
    const tags = existing ? existing.split(",") : [];

    const idx = tags.indexOf(selectedTag);
    if (idx >= 0) {
      tags.splice(idx, 1);
    } else {
      tags.push(selectedTag);
    }

    if (tags.length) {
      currentParams.set("tags", tags.join(","));
    } else {
      currentParams.delete("tags");
    }

    replace(`${pathname}?${currentParams.toString()}`, { scroll: false });
  }
  return (
    <button
      className={`px-3 py-2 rounded-md text-sm transition-all duration-200 ${
        isActive ? "bg-[#3c50e0] text-white" : "bg-gray-200"
      }`}
      onClick={() => {
        setIsActive(!isActive);
        handleTagPick();
        setIsOpen(false);
      }}
    >
      <span ref={textRef}>{text}</span>
    </button>
  );
}
