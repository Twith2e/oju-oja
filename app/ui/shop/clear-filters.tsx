"use client";

import { ShopContext } from "@/app/contexts/shop-context";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

export default function ClearFilters() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const { setIsOpen } = useContext(ShopContext);

  function clearSearchParams() {
    replace(pathname, { scroll: false });
  }
  return (
    <div className="bg-white rounded-lg py-4 px-5 flex items-center justify-between">
      <span className="text-[#606882]">Filters:</span>
      <button
        className="text-[#3c50e0] font-medium flex items-center gap-2 cursor-pointer"
        onClick={() => {
          clearSearchParams();
          setIsOpen(false);
        }}
      >
        <span>Clean All</span>
      </button>
    </div>
  );
}
