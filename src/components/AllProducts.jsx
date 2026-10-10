import { api } from "@/lib/api";
import ProductCard from "./ProductCard";

export default async function AllProducts() {
  const products = (await api.getProducts()) || [];

  return (
    <section id="all-products" className="mx-auto mt-10 max-w-6xl scroll-mt-6 px-4 pb-16">
      <h2 className="text-xl font-extrabold text-gray-900">সব পণ্য</h2>
      <p className="mb-4 text-xs text-gray-500">
        মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}