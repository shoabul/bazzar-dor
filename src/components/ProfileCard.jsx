"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function ProfileCard({ user }) {
  const router = useRouter();
  const [name, setName] = useState(user.name || "");
  const [saving, setSaving] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  const changed = name.trim() !== (user.name || "") && name.trim().length > 0;

  const handleSave = async (e) => {
    e.preventDefault();
    if (!changed) return;
    setSaving(true);
    const { error } = await authClient.updateUser({ name: name.trim() });
    setSaving(false);
    if (error) return toast.error(error.message || "আপডেট করা যায়নি");
    toast.success("প্রোফাইল আপডেট হয়েছে");
    router.refresh();
  };

  const handleSignOut = async () => {
    setSigningOut(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("সাইন আউট হয়েছে");
          router.push("/sign-in");
          router.refresh();
        },
        onError: () => setSigningOut(false),
      },
    });
  };

  return (
    <div className="mx-auto w-full max-w-[560px]">
      <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>
      <p className="mb-5 text-sm text-gray-500">
        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
      </p>


      <div className="mb-4 flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white/70 p-5">
        <div className="flex items-center gap-4 min-w-0">
          {user.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.image}
              alt={user.name}
              referrerPolicy="no-referrer"
              className="h-[60px] w-[60px] rounded-xl object-cover"
            />
          ) : (
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-green-600 text-xl font-bold text-white">
              {(user.name || "U").charAt(0).toUpperCase()}
            </div>
          )}
          <div className="min-w-0">
            <p className="truncate text-lg font-medium text-gray-900">{user.name}</p>
            <p className="truncate text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSignOut}
          disabled={signingOut}
          className="shrink-0 rounded-lg border border-red-400 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-60"
        >
          {signingOut ? "অপেক্ষা করুন..." : "সাইন আউট"}
        </button>
      </div>


      <form
        onSubmit={handleSave}
        className="rounded-2xl border border-gray-200 bg-white/70 p-5"
      >
        <h2 className="mb-5 font-semibold text-gray-900">তথ্য</h2>

        <label className="mb-1 block text-sm font-medium text-gray-800">নাম</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="আপনার নাম"
          className="mb-4 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
        />

        <label className="mb-1 block text-sm font-medium text-gray-800">ইমেইল</label>
        <input
          type="email"
          value={user.email}
          disabled
          className="mb-5 w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-100 px-3 py-2.5 text-sm text-gray-500"
        />

        <button
          type="submit"
          disabled={!changed || saving}
          className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving ? "সংরক্ষণ হচ্ছে..." : "সংরক্ষণ করুন"}
        </button>
      </form>
    </div>
  );
}