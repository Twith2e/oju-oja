import { Product } from "./definitions";

export async function fetchAllProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=0");
  if (!res.ok) {
    console.error("Failed to fetch data:", res.status);
    return;
  }
  const { products } = await res.json();

  return products;
}

export async function getCategories() {
  const res = await fetch("https://dummyjson.com/products?limit=0");
  if (!res.ok) {
    console.error("Failed to fetch data:", res.status);
    return;
  }

  const { products } = await res.json();

  const categoryMap = new Map<
    string,
    { category: string; image: string; count: number }
  >();

  for (const product of products) {
    const cat = product.category;

    if (categoryMap.has(cat)) {
      categoryMap.get(cat)!.count += 1;
    } else {
      categoryMap.set(cat, {
        category: cat,
        image: product.images[1] || product.thumbnail,
        count: 1,
      });
    }
  }

  const uniqueCategories = Array.from(categoryMap.values());

  return uniqueCategories;
}

export async function fetchFilteredProducts(
  searchParams: URLSearchParams
): Promise<Product[]> {
  const isBestSelling = searchParams.get("sort") === "bestSelling";
  let products: Product[] = [];

  if (isBestSelling) {
    products = await fetchBestSelling(0);
  } else {
    const res = await fetch("https://dummyjson.com/products?limit=0");
    if (!res.ok) {
      console.error("Failed to fetch products:", res.status);
      return [];
    }
    const json = (await res.json()) as { products: Product[] };
    products = json.products;
  }

  let filtered = [...products];

  // Text search
  const q = searchParams.get("q")?.toLowerCase();
  if (q) {
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  // Category filtering
  const catParam = searchParams.get("category");
  if (catParam) {
    const cats = catParam.split(",").map((s) => s.trim());
    filtered = filtered.filter((p) => cats.includes(p.category));
  }

  // Tags filtering
  const tagParam = searchParams.get("tags");
  if (tagParam) {
    const tags = tagParam.split(",").map((s) => s.trim());
    filtered = filtered.filter((p) => p.tags.some((tag) => tags.includes(tag)));
  }

  // Brand filtering
  const brandParam = searchParams.get("brand");
  if (brandParam) {
    const brands = brandParam.split(",").map((s) => s.trim());
    filtered = filtered.filter((p) => brands.includes(p.brand));
  }

  // Price range filtering
  const minP = parseFloat(searchParams.get("minPrice") || "");
  if (!isNaN(minP)) {
    filtered = filtered.filter((p) => p.price >= minP);
  }
  const maxP = parseFloat(searchParams.get("maxPrice") || "");
  if (!isNaN(maxP)) {
    filtered = filtered.filter((p) => p.price <= maxP);
  }

  return filtered;
}

export async function fetchBestSelling(limit: number): Promise<Product[]> {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
  if (!res.ok) {
    console.error("Failed to fetch data:", res.status);
    return [];
  }
  const { products } = await res.json();

  const bestSelling = products.sort(
    (a: Product, b: Product) => b.rating - a.rating
  );

  return bestSelling;
}
