"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

const bn = new Intl.NumberFormat("bn-BD");

const SORTS = [
    { value: "default", label: "ডিফল্ট" },
    { value: "price-asc", label: "দাম: কম থেকে বেশি" },
    { value: "price-desc", label: "দাম: বেশি থেকে কম" },
];

export default function CategoryProducts({ category, products, failed }) {
    const [sort, setSort] = useState("default");

    const sorted = useMemo(() => {
        const list = [...products];
        if (sort === "price-asc") list.sort((a, b) => a.today - b.today);
        if (sort === "price-desc") list.sort((a, b) => b.today - a.today);
        return list;
    }, [products, sort]);

    return (
        <div className="mx-auto max-w-6xl space-y-4 px-4 py-6">
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                    {category.icon}
                </div>
                <div>
                    <h1 className="text-2xl font-bold">{category.nameBn}</h1>
                    <p className="text-sm text-gray-500">
                        {bn.format(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-end gap-3 rounded-2xl border border-gray-100 bg-white p-4">
                <label htmlFor="sort" className="text-sm text-gray-600">
                    সাজান
                </label>
                <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
                >
                    {SORTS.map((s) => (
                        <option key={s.value} value={s.value}>
                            {s.label}
                        </option>
                    ))}
                </select>
            </div>

            {failed ? (
                <p className="text-red-600">ডেটা আনা যায়নি, একটু পরে আবার চেষ্টা করুন।</p>
            ) : sorted.length === 0 ? (
                <p className="text-gray-500">এই ক্যাটাগরিতে এখনো কোনো পণ্য নেই।</p>
            ) : (
                <>
                    <p className="text-sm text-gray-500">
                        মোট {bn.format(sorted.length)}টি পণ্য দেখানো হচ্ছে
                    </p>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {sorted.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}