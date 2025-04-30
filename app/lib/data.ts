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

export async function fetchFilteredProducts(
  searchParams: URLSearchParams
): Promise<Product[]> {
  // 1️⃣ Fetch all products
  const res = await fetch("https://dummyjson.com/products?limit=0");
  if (!res.ok) {
    console.error("Failed to fetch products:", res.status);
    return [];
  }
  const { products } = (await res.json()) as { products: Product[] };

  // 2️⃣ Start with the full list
  let filtered: Product[] = products;

  // 3️⃣ Text search (q)
  const q = searchParams.get("q")?.toLowerCase();
  if (q) {
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  // 4️⃣ Category filter (comma-separated)
  const catParam = searchParams.get("category");
  if (catParam) {
    const cats = catParam.split(",").map((c) => c.trim());
    filtered = filtered.filter((p) => cats.includes(p.category));
  }

  const tagParam = searchParams.get("tags");
  if (tagParam) {
    // parse out the selected tags from the query string
    const selectedTags = tagParam.split(",").map((t) => t.trim());

    // keep any product that has at least one of the selected tags
    filtered = filtered.filter((p: Product) =>
      p.tags.some((tag: string) => selectedTags.includes(tag))
    );
  }

  // 5️⃣ Brand filter (comma-separated)
  const brandParam = searchParams.get("brand");
  if (brandParam) {
    const brands = brandParam.split(",").map((b) => b.trim());
    filtered = filtered.filter((p) => brands.includes(p.brand));
  }

  // 6️⃣ Price range
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
