import { Metadata } from "next";
import Breadcrumbs from "../ui/shop/breadcrumbs";
import ClearFilters from "../ui/shop/clear-filters";
import Nav from "../ui/shop/nav";
import Categories from "../ui/shop/categories";
import Tags from "../ui/shop/tags";
import Products from "../ui/shop/products";
import { fetchFilteredProducts } from "../lib/data";

export const metadata: Metadata = {
  title: "Shop | Oju Oja",
  description: "Shop page",
};

export default async function Shop({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;

  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(sp)) {
    if (!value) continue;

    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, v));
    } else {
      params.set(key, value);
    }
  }
  const products = await fetchFilteredProducts(params);
  return (
    <div className="">
      <div className="py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 lg:px-10 xl:px-24">
        <h1 className="text-xl lg:text-[2rem] text-[#1C274C] font-semibold">
          Explore All Products
        </h1>
        <Breadcrumbs />
      </div>
      <div className="products-container px-4 lg:px-10 xl:px-24 h-full py-5 lg:py-28">
        <div className="xl:flex flex-col gap-8 hidden">
          <ClearFilters />
          <Categories />
          <Tags />
        </div>
        <div className="flex flex-col gap-8">
          <Nav />
          <Products products={products} />
        </div>
      </div>
    </div>
  );
}
