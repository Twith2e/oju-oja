"use client";

import { useRef, useEffect, useState } from "react";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import Preview from "./preview";
import { Product } from "../lib/definitions";

export default function ProductActions({ id }: { id: number }) {
  const [product, setProduct] = useState<Product>();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
    console.log("open");
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };

  async function addToCart() {
    const res = await fetch("http://localhost:3000/carts", {
      method: "post",
    });
    console.log(res);
  }

  async function fetchProduct() {
    console.log(id);

    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      console.log("no response gee");

      return;
    }
    const product = await res.json();
    console.log(product);

    setProduct(product);
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={openDialog}
        className="bg-white p-2 px-3 rounded-md cursor-pointer shadow-md hover:text-[#3c50e0]"
      >
        <LuEye size={20} />
      </button>
      <button
        onClick={addToCart}
        type="button"
        className="bg-[#3c50e0] hover:bg-[#1C3FB7] px-5 py-[7px] rounded-md text-white cursor-pointer text-sm font-medium shadow-md"
      >
        <span className="whitespace-nowrap">Add to Cart</span>
      </button>
      <button className="bg-white p-2 px-3 rounded-md cursor-pointer shadow-md">
        <CiHeart size={20} />
      </button>
      {product && (
        <dialog className="w-[85%] m-auto h-fit rounded-md" ref={dialogRef}>
          <Preview
            image={product.images}
            title={product.title}
            rating={product.rating}
            ratingCount={product.reviews.length}
            stock={product.stock}
            price={product.price}
            oldPrice={(
              product.price -
              (product.discountPercentage / 100) * product.price
            ).toFixed(2)}
            discountPercentage={product.discountPercentage}
            description={product.description}
            id={product.id}
            close={closeDialog}
          />
        </dialog>
      )}
    </div>
  );
}
