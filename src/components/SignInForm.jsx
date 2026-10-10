"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient, authErrorBn } from "@/lib/auth-client";
import SocialButtons from "./SocialButtons";

const input =
  "mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600";

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await authClient.signIn.email({ email, password });

    if (error) {
      setError(authErrorBn(error));
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  };

  return (
    <div className="mx-auto mt-12 w-full max-w-md px-4 pb-16">
      <h1 className="text-center text-2xl font-extrabold text-gray-900">সাইন ইন</h1>
      <p className="mt-1 text-center text-xs text-gray-500">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl border border-gray-200 bg-white p-6">
        <label className="block text-xs font-semibold text-gray-800">
          ইমেইল
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={input} />
        </label>

        <label className="block text-xs font-semibold text-gray-800">
          পাসওয়ার্ড
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className={input} />
        </label>

        {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-800 disabled:opacity-60"
        >
          {loading ? "অপেক্ষা করুন..." : "সাইন ইন করুন"}
        </button>

        <div className="flex items-center gap-3 text-[11px] text-gray-400">
          <span className="h-px flex-1 bg-gray-200" /> অথবা <span className="h-px flex-1 bg-gray-200" />
        </div>

        <SocialButtons />

        <p className="text-center text-xs text-gray-600">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/sign-up" className="font-semibold text-green-700 hover:underline">
            সাইন আপ করুন
          </Link>
        </p>
      </form>

      <Link href="/" className="mt-6 block text-center text-xs text-gray-500 hover:text-gray-800">
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}