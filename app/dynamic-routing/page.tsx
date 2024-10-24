import ProductFilter from "@/components/ProductFilter";

export default async function DynamicRoutingPage() {
  const products = await fetch("https://tryout-api.vercel.app/api/products").then((res) => res.json());

  return (
    <div>
      <ProductFilter products={products} />
    </div>
  );
}
