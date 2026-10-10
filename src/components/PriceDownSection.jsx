import { api } from "@/lib/api";
import ProductCard from "./ProductCard";

export default async function PriceDownSection() {
  const products = (await api.getProducts()) || [];

  const fallen = products
    .filter((p) => p.change?.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  if (!fallen.length) return null;

  return (
    <section className="mx-auto mt-10 max-w-6xl px-4">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-extrabold text-gray-900">
        <span className="text-sm text-green-600">▼</span> আজ দাম কমেছে
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fallen.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}