"use client";

import { useRef, useEffect, useState, useContext } from "react";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import Preview from "./preview";
import { Product } from "../lib/definitions";
import { NewCartContext } from "../contexts/new-cart-context";
import { toast } from "react-toastify";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://oja-nine.vercel.app";

export default function ProductActions({
  id,
  price,
}: {
  id: number;
  price: number;
}) {
  const { cart, setCart } = useContext(NewCartContext);
  const [product, setProduct] = useState<Product>();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isInCart = cart.find((item) => item.productID === id);
  console.log("id:", id);

  const openDialog = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };

  async function addToCart(id: number, price: number) {
    setIsLoading(true);
    try {
      const res = await fetch(`${baseURL}/api/carts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productID: id, price: Number(price) }),
      });
      if (!res.ok) {
        console.log("no response gee");
        return;
      }
      const data = await res.json();
      console.log(data);

      if (data.message !== "Item already in cart") {
        setCart((prev) => [...prev, data]);
        toast.success("Item added to cart");
      } else {
        toast.error("Item already in cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Error adding to cart");
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchProduct() {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      console.log("no response gee");

      return;
    }
    const product = await res.json();

    setProduct(product);
  }

  async function fetchCart() {
    const res = await fetch(`${baseURL}/api/carts`, {
      cache: "no-store",
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Fetch /api/carts failed:", res.status, text);
      throw new Error(`API error: ${res.status}`);
    }
    const carts = await res.json();
    setCart(carts);
  }

  function checkout() {
    if (isInCart) {
      toast.success("Redirecting to checkout");
      window.location.href = "/checkout";
    } else {
      toast.error("Item not in cart");
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  useEffect(() => {
    fetchCart();
  }, []);

  /**
   * Renders product action buttons including view details, add to cart, and wishlist.
   *
   * @description Displays buttons for product interaction with dynamic states:
   * - View details button opens a preview dialog
   * - Add to Cart/Checkout button changes based on cart status
   * - Wishlist button for future functionality
   *
   * @returns {JSX.Element} A div containing product action buttons and a preview dialog
   */
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex gap-3 items-center"
    >
      <button
        onClick={openDialog}
        className="bg-white p-2 px-3 rounded-md cursor-pointer shadow-md hover:text-[#3c50e0]"
      >
        <LuEye size={20} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (isInCart) {
            checkout();
          } else {
            addToCart(id, price);
          }
        }}
        type="button"
        disabled={isLoading}
        className={`hover:bg-[#1C3FB7] px-5 py-[7px] rounded-md text-white cursor-pointer text-sm font-medium shadow-md w-full ${
          isInCart ? "bg-[#1C3FB7]" : "bg-[#3c50e0]"
        } `}
      >
        {isLoading ? (
          <div className="h-6 w-6 rounded-full animate-spin border-green border-t-transparent"></div>
        ) : (
          <span className="whitespace-nowrap">
            {isInCart ? "Checkout" : "Add to Cart"}
          </span>
        )}
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
