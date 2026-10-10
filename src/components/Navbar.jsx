
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function Navbar({ categories = [], user = null }) {
    const pathname = usePathname();

    const [today, setToday] = useState("");

    useEffect(() => {
        const formattedDate = new Intl.DateTimeFormat("bn-BD", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "Asia/Dhaka",
        }).format(new Date());

        setToday(formattedDate);
    }, []);

    return (
        <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-lg text-white shadow">
                        🛒
                    </span>

                    <span className="leading-tight">
                        <span className="block text-base font-bold text-gray-900">
                            বাজার দর
                        </span>

                        <span
                            className="block text-[11px] text-gray-500"
                            suppressHydrationWarning
                        >
                            {today}
                        </span>
                    </span>
                </Link>

                {user ? (
                    <div className="group relative">
                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-full px-2 py-1 text-sm font-medium text-gray-800 hover:bg-gray-100"
                        >
                            {user.image ? (
                                <img
                                    src={user.image}
                                    alt={user.name || "User"}
                                    className="h-8 w-8 rounded-full object-cover"
                                />
                            ) : (
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-white">
                                    {user.name?.[0]}
                                </span>
                            )}

                            <span>{user.name?.split(" ")[0]}</span>
                            <span className="text-[10px] text-gray-500">▾</span>
                        </button>

                        <div className="invisible absolute right-0 z-50 mt-1 w-40 rounded-xl border border-gray-200 bg-white p-1 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                            <Link
                                href="/profile"
                                className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                আমার প্রোফাইল
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link
                            href="/sign-in"
                            className="text-sm font-medium text-gray-800 hover:text-green-700"
                        >
                            সাইন ইন
                        </Link>

                        <Link
                            href="/sign-up"
                            className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-800"
                        >
                            সাইন আপ
                        </Link>
                    </div>
                )}
            </div>

            <nav className="border-t border-gray-100">
                <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">
                    {categories.map((cat) => {
                        const active = pathname === `/category/${cat.slug}`;

                        return (
                            <Link
                                key={cat.id}
                                href={`/category/${cat.slug}`}
                                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition ${active
                                        ? "bg-green-700 text-white shadow"
                                        : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                <span>{cat.icon}</span>
                                <span>{cat.nameBn}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
}