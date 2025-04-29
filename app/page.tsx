import BestSellers from "./ui/home/best-sellers";
import Categories from "./ui/home/categories";
import Footer from "./ui/footer";
import LimitedPromo from "./ui/home/limited-promo";
import NewArrivals from "./ui/home/new-arrivals";
import Newsletter from "./ui/newsletter";
import ProductBanner from "./ui/product-banner";
import ProductGrid from "./ui/product-grid";
import Testimonials from "./ui/home/testimonials";

export default function Home() {
  return (
    <div className="mb-10">
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
        <section className="pt-20">
          <Newsletter />
        </section>
      </main>
      <footer className="pt-20">
        <Footer />
      </footer>
    </div>
  );
}
