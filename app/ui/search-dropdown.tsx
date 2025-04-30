"use client";

import { GoChevronDown } from "react-icons/go";

export default function SearchDropdown() {
  return (
    <div className="flex items-center gap-2 py-2.5 px-4">
      <span>All categories</span>
      <GoChevronDown />
    </div>
  );
}
