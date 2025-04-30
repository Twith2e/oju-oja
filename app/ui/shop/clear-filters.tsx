"use client";

import { usePathname, useRouter } from "next/navigation";

export default function ClearFilters() {
  const pathname = usePathname();
  const { replace } = useRouter();

  function clearSearchParams() {
    replace(pathname, { scroll: false });
  }
  return (
    <div className="bg-white rounded-lg py-4 px-5 flex items-center justify-between">
      <span className="text-[#606882]">Filters:</span>
      <button
        className="text-[#3c50e0] font-medium flex items-center gap-2"
        onClick={clearSearchParams}
      >
        <span>Clean All</span>
      </button>
    </div>
  );
}
