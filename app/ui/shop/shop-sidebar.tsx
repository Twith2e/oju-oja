"use client";

import { useContext } from "react";
import Categories from "./categories";
import ClearFilters from "./clear-filters";
import Tags from "./tags";
import { ShopContext } from "@/app/contexts/shop-context";

export default function ShopSidebar() {
  const { isOpen } = useContext(ShopContext);
  return (
    <aside
      className={`w-[80%] flex pt-20 xl:hidden fixed top-0 ${
        isOpen ? "left-0" : "-left-full"
      } h-screen bg-white shadow-md z-10 transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col gap-8 w-full">
        <ClearFilters />
        <Categories />
        <Tags />
      </div>
    </aside>
  );
}
