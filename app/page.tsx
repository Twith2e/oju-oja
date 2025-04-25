import Categories from "./ui/categories";
import NavBar from "./ui/nav-bar";
import ProductGrid from "./ui/product-grid";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <section>
          <ProductGrid />
        </section>
        <section>
          <Categories />
        </section>
      </main>
    </div>
  );
}
