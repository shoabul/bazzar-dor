"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient, authErrorBn } from "@/lib/auth-client";
import SocialButtons from "./SocialButtons";

const input =
  "mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600";

export default function SignUpForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password.length < 8) return setError("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
    if (form.password !== form.confirm) return setError("দুইটা পাসওয়ার্ড মিলছে না।");

    setLoading(true);
    const { error } = await authClient.signUp.email({
      name: form.name,
      email: form.email,
      password: form.password,
    });

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
      <h1 className="text-center text-2xl font-extrabold text-gray-900">অ্যাকাউন্ট তৈরি করুন</h1>
      <p className="mt-1 text-center text-xs text-gray-500">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl border border-gray-200 bg-white p-6">
        <label className="block text-xs font-semibold text-gray-800">
          নাম
          <input type="text" required value={form.name} onChange={set("name")} className={input} />
        </label>

        <label className="block text-xs font-semibold text-gray-800">
          ইমেইল
          <input type="email" required value={form.email} onChange={set("email")} className={input} />
        </label>

        <label className="block text-xs font-semibold text-gray-800">
          পাসওয়ার্ড
          <input type="password" required value={form.password} onChange={set("password")} className={input} />
        </label>

        <label className="block text-xs font-semibold text-gray-800">
          পাসওয়ার্ড নিশ্চিত করুন
          <input type="password" required value={form.confirm} onChange={set("confirm")} className={input} />
        </label>

        {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-800 disabled:opacity-60"
        >
          {loading ? "অপেক্ষা করুন..." : "অ্যাকাউন্ট তৈরি করুন"}
        </button>

        <div className="flex items-center gap-3 text-[11px] text-gray-400">
          <span className="h-px flex-1 bg-gray-200" /> অথবা <span className="h-px flex-1 bg-gray-200" />
        </div>

        <SocialButtons />

        <p className="text-center text-xs text-gray-600">
          অ্যাকাউন্ট আছে?{" "}
          <Link href="/sign-in" className="font-semibold text-green-700 hover:underline">
            সাইন ইন করুন
          </Link>
        </p>
      </form>

      <Link href="/" className="mt-6 block text-center text-xs text-gray-500 hover:text-gray-800">
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}