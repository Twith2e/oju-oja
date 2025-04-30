import ProductCard from "../product-card";

export default async function ({ products }: { products: any[] }) {
  return (
    <div className="grid grid-cols-3 gap-5 overflow-auto">
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
          image={product.images[1] || product.thumbnail}
          productName={product.title}
          backgroundColor={true}
        />
      ))}
    </div>
  );
}
