"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { authClient, authErrorBn } from "@/lib/auth-client";

export default function SocialButtons() {
  const [loading, setLoading] = useState("");

  const handle = async (provider) => {
    try {
      setLoading(provider);
      const { error } = await authClient.signIn.social({ provider, callbackURL: "/" });
      if (error) {
        toast.error(authErrorBn(error));
        setLoading("");
      }
      // সফল হলে browser নিজেই provider এর page এ redirect করবে
    } catch (e) {
      toast.error(authErrorBn(e));
      setLoading("");
    }
  };

  const btn =
    "flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-semibold text-gray-800 hover:bg-gray-50 disabled:opacity-60";

  return (
    <div className="flex gap-3">
      <button type="button" onClick={() => handle("google")} disabled={!!loading} className={btn}>
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#4285F4"
            d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.8-5.5 3.8-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.4 14.6 2.4 12 2.4 6.7 2.4 2.4 6.7 2.4 12S6.7 21.6 12 21.6c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6H12z"
          />
        </svg>
        Google দিয়ে চালিয়ে যান
      </button>

      <button type="button" onClick={() => handle("github")} disabled={!!loading} className={btn}>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
        GitHub দিয়ে চালিয়ে যান
      </button>
    </div>
  );
}