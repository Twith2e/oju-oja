"use client";

import { createContext, useState } from "react";

export const ShopContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

export default function ShopContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ShopContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ShopContext.Provider>
  );
}
