// import type { Metadata } from "next";
"use client";

import "./globals.css";
import { raleway } from "./fonts";
import NavBar from "./ui/nav-bar";
import NewCartContextProvider from "./contexts/new-cart-context";
import Cart from "./ui/cart";

// export const metadata: Metadata = {
//   title: "Oju Oja",
//   description: "A mock ecommerce website",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NewCartContextProvider>
      <html lang="en">
        <body className={`${raleway.className} antialiased`}>
          <Cart />
          <header className="fixed top-0 w-full z-10">
            <NavBar />
          </header>
          {children}
        </body>
      </html>
    </NewCartContextProvider>
  );
}
