import { Product } from "./definitions";

export async function fetchAllProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  if (!res.ok) {
    console.error("Failed to fetch data:", res.status);
    return;
  }
  const { products } = await res.json();

  return products;
}

export async function getCategories() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    console.error("Failed to fetch data:", res.status);
    return;
  }

  const { products } = await res.json();

  const categoryMap = new Map<string, { category: string; image: string }>();

  for (const product of products) {
    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, {
        category: product.category,
        image: product.images[1] || product.thumbnail,
      });
    }
  }

  const uniqueCategories = Array.from(categoryMap.values());

  return uniqueCategories;
}
