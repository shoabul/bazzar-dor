// app/not-found.jsx
import Link from "next/link";

export const metadata = {
  title: "404 - পেজটি খুঁজে পাওয়া যায়নি",
};

export default function NotFound() {
  return (
    <div className="flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-lg text-center bg-white border border-gray-200 rounded-2xl px-8 py-12 shadow-sm">
        <h1 className="text-8xl font-extrabold text-[#0a8a45] tracking-tight">
          ৪০৪
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mt-3 text-gray-600">
          আপনি যে ঠিকানায় যেতে চেয়েছিলেন সেটি নেই বা সরানো হয়েছে।
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-[#0a8a45] text-white font-semibold hover:bg-[#087538] transition-colors"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}