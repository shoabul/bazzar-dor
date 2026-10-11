"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const UNIT_BN = { kg: "কেজি", liter: "লিটার", l: "লিটার", dozen: "ডজন", piece: "পিস", pcs: "পিস", hali: "হালি" };

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
const toBn = (n) => String(n).replace(/\d/g, (d) => BN_DIGITS[d]);

const DIR = {
  up: { icon: "▲", text: "text-red-600", word: "বেড়েছে" },
  down: { icon: "▼", text: "text-green-600", word: "কমেছে" },
  same: { icon: "–", text: "text-gray-500", word: "অপরিবর্তিত" },
};

export default function ProductDetailsCard({ product, priceInfo, marketsByDivision, extremes }) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (isPending || session?.user) return;

    toast(
      (t) => (
        <div className="flex items-center gap-3 text-sm">
          <span>
            এই পেজ দেখতে আগে{" "}
            <Link
              href={`/sign-in?callbackURL=${encodeURIComponent(pathname)}`}
              onClick={() => toast.dismiss(t.id)}
              className="font-semibold text-green-700 underline"
            >
              সাইন ইন
            </Link>{" "}
            করুন
          </span>
          <button
            type="button"
            onClick={() => toast.dismiss(t.id)}
            aria-label="বন্ধ করুন"
            className="ml-1 rounded-full px-2 py-0.5 text-base leading-none text-gray-400 hover:bg-gray-100 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
      ),
      { id: "auth-required", icon: "🔒", duration: 1000 }
    );

    router.replace(`/sign-in?callbackURL=${encodeURIComponent(pathname)}`);
  }, [isPending, session, pathname, router]);

  if (isPending || !session?.user) return null;

  const unitBn = UNIT_BN[product.unit] || product.unit;
  const dir = DIR[product.change?.dir] || DIR.same;
  const vsY = priceInfo.vsYesterday;

  const rows = marketsByDivision
    .flatMap((g) => g.markets)
    .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);

  const summary = [
    {
      label: "সর্বনিম্ন দাম",
      value: extremes?.lowest?.min,
      color: "text-green-600",
      note: "সবচেয়ে কম দামের বাজার",
    },
    {
      label: "সর্বাধিক দাম",
      value: extremes?.highest?.max,
      color: "text-red-600",
      note: "সবচেয়ে বেশি দামের বাজার",
    },
    {
      label: "গড় দাম",
      value: product.today,
      color: "text-green-700",
      note: `প্রতি ${unitBn}-এর হিসাবে`,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl space-y-5 px-4 py-6">
      <nav className="flex items-center gap-2 text-xs text-gray-500">
        <Link href="/" className="hover:text-green-700">হোম</Link>
        <span>›</span>
        <Link href={`/category/${product.category}`} className="hover:text-green-700">
          {product.categoryNameBn}
        </Link>
        <span>›</span>
        <span className="text-gray-700">{product.nameBn}</span>
      </nav>

      <section className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-4xl">
            {product.image}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{product.nameBn}</h1>
            <p className="mt-1 text-xs text-gray-500">
              প্রতি {unitBn} · {product.categoryNameBn}
            </p>
            {vsY && (
              <p className="mt-1 text-xs text-gray-600">
                গতকালের তুলনায় আজ দাম{" "}
                <span className={`font-semibold ${DIR[vsY.dir].text}`}>{DIR[vsY.dir].word}</span>
                {vsY.dir !== "same" && <> · {toBn(vsY.amount)} টাকা</>}
              </p>
            )}
          </div>
        </div>

        <div className="rounded-xl bg-gray-100 px-6 py-4 text-center sm:min-w-[150px]">
          <p className="text-xs text-gray-500">আজকের দাম</p>
          <p className="text-3xl font-bold text-gray-900">{toBn(product.today)}</p>
          <p className="text-xs text-gray-500">টাকা / {unitBn}</p>
          {product.change && (
            <p className={`mt-1 text-xs font-semibold ${dir.text}`}>
              {dir.icon} {toBn(product.change.pct)}%
            </p>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-sm font-bold text-gray-900">দামের সারসংক্ষেপ</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {summary.map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-gray-500">{s.label}</p>
              <p className={`text-2xl font-bold ${s.color}`}>
                {s.value != null ? toBn(s.value) : "–"}{" "}
                <span className="text-xs font-medium">টাকা</span>
              </p>
              <p className="mt-1 text-xs text-gray-500">{s.note}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-3 mt-8 text-sm font-bold text-gray-900">বাজারভিত্তিক আজকের দাম</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[560px] text-sm">
            <thead className="bg-gray-50 text-xs text-gray-500">
              <tr>
                <th className="px-4 py-3 text-left font-medium">বাজার</th>
                <th className="px-4 py-3 text-left font-medium">বিভাগ</th>
                <th className="px-4 py-3 text-right font-medium">সর্বনিম্ন</th>
                <th className="px-4 py-3 text-right font-medium">সর্বোচ্চ</th>
                <th className="px-4 py-3 text-right font-medium">গড়</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((m, i) => (
                <tr
                  key={`${m.market}-${m.division}`}
                  className={`border-t border-gray-200 ${i % 2 ? "bg-gray-50/60" : "bg-white"}`}
                >
                  <td className="px-4 py-3 font-medium text-gray-900">{m.market}</td>
                  <td className="px-4 py-3 text-gray-500">{m.division}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{toBn(m.min)} টাকা</td>
                  <td className="px-4 py-3 text-right text-gray-700">{toBn(m.max)} টাকা</td>
                  <td className="px-4 py-3 text-right font-bold text-gray-900">{toBn(m.avg)} টাকা</td>
                </tr>
              ))}
              {!rows.length && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-gray-400">
                    কোনো বাজারের তথ্য নেই
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}