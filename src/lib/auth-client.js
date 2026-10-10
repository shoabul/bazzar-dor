import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient();


export function authErrorBn(error) {
  console.error("[AUTH ERROR]", error);

  const map = {
    USER_ALREADY_EXISTS: "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা হয়েছে।",
    USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা হয়েছে।",
    INVALID_EMAIL_OR_PASSWORD: "ইমেইল বা পাসওয়ার্ড ভুল হয়েছে।",
    INVALID_EMAIL: "সঠিক ইমেইল দিন।",
    PASSWORD_TOO_SHORT: "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।",
  };

  return map[error?.code] || error?.message || "কিছু একটা ভুল হয়েছে, আবার চেষ্টা করুন।";
}