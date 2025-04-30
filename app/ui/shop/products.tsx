import { Product } from "@/app/lib/definitions";
import ProductCard from "../product-card";

export default async function Products({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 overflow-auto">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          newPrice={(
            product.price -
            (product.discountPercentage / 100) * product.price
          ).toFixed(2)}
          oldPrice={product.price.toString()}
          rating={product.rating}
          ratingCount={product.reviews.length}
          image={product.images[0]}
          productName={product.title}
          backgroundColor={true}
        />
      ))}
    </div>
  );
}
