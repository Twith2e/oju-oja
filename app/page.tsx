import Categories from "./ui/categories";
import NavBar from "./ui/nav-bar";
import NewArrivals from "./ui/new-arrivals";
import ProductGrid from "./ui/product-grid";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="bg-[#e5eaf4]">
          <ProductGrid />
        </section>
        <section className="pt-20">
          <Categories />
        </section>
        <section className="pt-20">
          <NewArrivals />
        </section>
      </main>
    </div>
  );
}
