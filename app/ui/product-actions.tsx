"use client";

import { useRef } from "react";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import Preview from "./preview";

export default function ProductActions() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };
  return (
    <div className="flex gap-3 items-center">
      <button onClick={openDialog} className="bg-white p-2 px-3 rounded-md">
        <LuEye />
      </button>
      <button
        type="button"
        className="bg-[#3c50e0] hover:bg-[#1C3FB7] px-5 py-[7px] rounded-md text-white cursor-pointer text-sm font-medium"
      >
        <span className="whitespace-nowrap">Add to Cart</span>
      </button>
      <div className="bg-white p-2 px-3 rounded-md">
        <CiHeart />
      </div>
      <dialog className="w-[90%] m-auto h-fit rounded-md" ref={dialogRef}>
        <Preview
          image={["/pad.webp", "/pad.webp"]}
          title="iPad pro"
          rating={3}
          ratingCount={3}
          stock={30}
          price={2000}
          oldPrice={3000}
          discountPercentage={20}
          description="lorem ipsum"
          id={20}
          close={closeDialog}
        />
      </dialog>
    </div>
  );
}
