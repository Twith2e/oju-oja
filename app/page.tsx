import BestSellers from "./ui/best-sellers";
import Categories from "./ui/categories";
import LimitedPromo from "./ui/limited-promo";
import NavBar from "./ui/nav-bar";
import NewArrivals from "./ui/new-arrivals";
import ProductBanner from "./ui/product-banner";
import ProductGrid from "./ui/product-grid";
import Testimonials from "./ui/testimonials";

export default function Home() {
  return (
    <div className="mb-10">
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
        <section className="pt-20">
          <ProductBanner />
        </section>
        <section className="pt-20">
          <BestSellers />
        </section>
        <section className="pt-20">
          <LimitedPromo />
        </section>
        <section className="pt-20">
          <Testimonials />
        </section>
      </main>
    </div>
  );
}
