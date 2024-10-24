import ProductFilter from "@/components/ProductFilter";
// Fetch product data from https://tryout-api.vercel.app/api/products
const products = await fetch("https://tryout-api.vercel.app/api/products").then((res) => res.json());

export default async function FilterPage() {
  return (
    <div>
      <ProductFilter products={products} />
    </div>
  );
}
    