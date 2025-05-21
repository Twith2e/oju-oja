"use client";

import React, { createContext, useState } from "react";
import { Cart } from "../lib/schemas";
export const NewCartContext = createContext<{
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  totalPrice?: number;
  setTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
}>({
  cart: [],
  setCart: () => {},
  isOpen: false,
  setIsOpen: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
});

export default function NewCartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<Cart[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <NewCartContext.Provider
      value={{ cart, setCart, isOpen, setIsOpen, setTotalPrice, totalPrice }}
    >
      {children}
    </NewCartContext.Provider>
  );
}
