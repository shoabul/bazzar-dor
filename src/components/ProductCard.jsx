import Link from "next/link";

const UNIT_BN = { kg: "কেজি", litre: "লিটার", dozen: "ডজন", piece: "পিস" };

const bn = (n, d = 0) =>
  Number(n).toLocaleString("bn-BD", { minimumFractionDigits: d, maximumFractionDigits: d });

export default function ProductCard({ product }) {
  const { id, nameBn, image, unit, today, change } = product;
  const dir = change?.dir ?? "flat";
  const pct = Math.abs(change?.pct ?? 0);

  const badge = {
    up: { cls: "bg-red-50 text-red-600", icon: "▲" },
    down: { cls: "bg-green-50 text-green-600", icon: "▼" },
    flat: { cls: "bg-gray-100 text-gray-500", icon: "—" },
  }[dir];

  return (
    <Link
      href={`/product/${id}`}
      className="block rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
    >

      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl">
          {image}
        </span>
        <div className="leading-tight">
          <h3 className="text-sm font-bold text-gray-900">{nameBn}</h3>
          <p className="text-[11px] text-gray-500">প্রতি {UNIT_BN[unit] || unit}</p>
        </div>
      </div>


      <p className="mt-4 text-[11px] text-gray-500">আজকের দাম</p>
      <div className="mt-0.5 flex items-center justify-between">
        <span className="text-lg font-extrabold text-gray-900">
          {bn(today)} <span className="text-sm font-medium">টাকা</span>
        </span>
        <span className={`ml-auto rounded-full px-2 py-0.5 text-xs font-bold ${badge.cls}`}>
          {badge.icon} {bn(pct, 1)}%
        </span>
      </div>
    </Link>
  );
}