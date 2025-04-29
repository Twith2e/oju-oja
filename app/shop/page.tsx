import { Metadata } from "next";
import Breadcrumbs from "../ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Shop | Oju Oja",
  description: "Shop page",
};

export default function Shop() {
  return (
    <div className="px-24">
      <div className="py-10 flex items-center justify-between">
        <h1 className="text-[2rem] text-[#1C274C] font-semibold">
          Explore All Products
        </h1>
        <Breadcrumbs />
      </div>
    </div>
  );
}
