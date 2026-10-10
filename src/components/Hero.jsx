import Link from "next/link";
import Image from "next/image";


export default function Hero() {
    const today = new Date().toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka",
    });

    return (
        <section className="mx-auto mt-6 max-w-6xl px-4">
            <div className="flex items-center justify-between gap-6 rounded-2xl border border-gray-200 bg-white px-6 py-10 sm:px-8 md:py-14">

                <div className="max-w-xl">
                    <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-800">
                        {today}
                    </span>

                    <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত,
                        গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>

                    <Link
                        href="#all-products"
                        className="mt-6 inline-block rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-green-800"
                    >
                        সব পণ্য দেখুন
                    </Link>
                </div>

                <div className="hidden shrink-0 pr-4 md:block">
                    <Image
                        src="/bazar-hero.png"
                        alt="ফল ও সবজির ঝুড়ি"
                        width={260}
                        height={220}
                        priority
                        className="h-44 w-auto sm:h-52"
                    />
                </div>
            </div>
        </section>
    );
}