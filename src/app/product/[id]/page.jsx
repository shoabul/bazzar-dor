import { notFound } from "next/navigation";
import { api } from "@/lib/api";
import ProductDetailsCard from "@/components/ProductDetailsCard";

export const instant = false;

const toBn = (n) => Number(n).toLocaleString("bn-BD");

const getDiff = (current, previous) => {
  if (current == null || previous == null) return null;
  const amount = current - previous;
  return {
    amount: Math.abs(amount),
    dir: amount > 0 ? "up" : amount < 0 ? "down" : "same",
  };
};

const groupByDivision = (markets = []) => {
  const map = {};
  for (const m of markets) {
    (map[m.division] ||= []).push(m);
  }
  return Object.entries(map).map(([division, items]) => ({ division, markets: items }));
};

const getExtremes = (markets = []) => {
  if (!markets.length) return null;
  const lowest = markets.reduce((a, b) => (b.min < a.min ? b : a));
  const highest = markets.reduce((a, b) => (b.max > a.max ? b : a));
  return { lowest, highest };
};

const normalizeProduct = (res, id) => {
  const data = res?.data ?? res;
  if (Array.isArray(data)) {
    return data.find((p) => String(p.id) === String(id) || p.slug === id) ?? null;
  }
  return data ?? null;
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = normalizeProduct(await api.getProduct(id), id);
  return {
    title: product?.nameBn ? `${product.nameBn} এর দাম | বাজার দর` : "বাজার দর",
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = normalizeProduct(await api.getProduct(id), id);

  if (!product) notFound();

  const priceInfo = {
    todayLabel: `৳${toBn(product.today)}`,
    unit: product.unit,
    vsYesterday: getDiff(product.today, product.yesterday),
    vsLastWeek: getDiff(product.today, product.lastWeek),
    vsLastMonth: getDiff(product.today, product.lastMonth),
  };

  return (
    <main>
      <ProductDetailsCard
        product={product}
        priceInfo={priceInfo}
        marketsByDivision={groupByDivision(product.markets)}
        extremes={getExtremes(product.markets)}
      />
    </main>
  );
}