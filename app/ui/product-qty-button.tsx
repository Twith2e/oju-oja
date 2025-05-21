"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export function ProductQtyButton({ stock }: { stock: number }) {
  const [qty, setQty] = useState(1);
  function incrementQty() {
    if (qty < stock) {
      setQty(qty + 1);
    }
  }

  function decrementQty() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }
  return (
    <div className="flex items-center gap-3">
      <button
        className="bg-[#f3f4f6] px-3 py-1 rounded-md cursor-pointer"
        onClick={decrementQty}
      >
        <FaMinus size={24} />
      </button>
      <div className="bg-white border border-gray-300 text-base px-7 py-2 rounded-md select-none">
        {qty}
      </div>
      <button
        className="bg-[#f3f4f6] px-3 py-1 rounded-md cursor-pointer"
        onClick={incrementQty}
      >
        <FaPlus size={24} />
      </button>
    </div>
  );
}
