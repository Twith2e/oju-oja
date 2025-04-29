import type { Metadata } from "next";
import "./globals.css";
import { raleway } from "./fonts";
import NavBar from "./ui/nav-bar";

export const metadata: Metadata = {
  title: "Oju Oja",
  description: "A mock ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
