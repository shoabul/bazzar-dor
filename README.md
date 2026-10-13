<div align="center">

# 🛒 বাজার দর | BazarDor

**আজকের বাজারের দাম এক নজরে**

চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম, এক জায়গায়।

![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Better Auth](https://img.shields.io/badge/Better_Auth-Google_%7C_GitHub-green)

</div>

---

## 📖 পরিচিতি

**বাজার দর (BazarDor)** একটি বাংলা ভাষার ওয়েব অ্যাপ্লিকেশন, যেখানে নিত্যপ্রয়োজনীয় পণ্যের বাজারদর সহজে দেখা যায়। পণ্য ক্যাটাগরি অনুযায়ী সাজানো, প্রতিটি পণ্যের দাম ও দামের পরিবর্তনের হার (শতকরা) দেখানো হয়, যাতে ক্রেতা বাজারে যাওয়ার আগেই সঠিক ধারণা পেতে পারেন।

## ✨ প্রধান ফিচার

| # | ফিচার | বিবরণ |
|---|-------|-------|
| 1 | 📂 **ক্যাটাগরিভিত্তিক পণ্য** | চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ ও মসলা, প্রতিটির আলাদা পেজ |
| 2 | 📈 **লাইভ প্রাইস টিকার** | পণ্যের দাম ও দাম বাড়া/কমার শতকরা হার স্ক্রল করা টিকারে |
| 3 | 🔼🔽 **দাম বাড়া ও কমার সেকশন** | কোন পণ্যের দাম বেড়েছে বা কমেছে তা আলাদা করে এক নজরে দেখা যায় |
| 4 | 🔐 **নিরাপদ অথেন্টিকেশন** | ইমেইল/পাসওয়ার্ড, Google ও GitHub দিয়ে সাইন ইন ও সাইন আপ |
| 5 | 🧾 **পণ্যের বিস্তারিত ও প্রোফাইল** | প্রতিটি পণ্যের বিস্তারিত তথ্য এবং ব্যবহারকারীর নিজস্ব প্রোফাইল পেজ |

**অতিরিক্ত UX:** বাংলা তারিখ (Asia/Dhaka), toast notification, skeleton loader ও responsive ডিজাইন।

## 🛠️ ব্যবহৃত প্রযুক্তি

| ক্ষেত্র | প্রযুক্তি |
|--------|-----------|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| UI Library | [React](https://react.dev/) (React Compiler চালু) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Authentication | [Better Auth](https://www.better-auth.com/) (Email/Password, Google, GitHub) |
| Database | [MongoDB](https://www.mongodb.com/) |
| Notifications | [react-hot-toast](https://react-hot-toast.com/) |
| Language | JavaScript (ES6+) |

## 📁 প্রজেক্ট স্ট্রাকচার

```
src/
├── app/
│   ├── (home)/          # হোম পেজ
│   ├── category/[id]/   # ক্যাটাগরি পেজ
│   ├── product/[id]/    # পণ্যের বিস্তারিত
│   ├── profile/         # ইউজার প্রোফাইল
│   ├── sign-in/         # সাইন ইন
│   └── sign-up/         # সাইন আপ
├── components/          # Navbar, Hero, PriceTicker, SocialButtons ইত্যাদি
└── lib/                 # api.js, auth.js, auth-client.js, session.js
```

## 🚀 লোকালি চালানোর নিয়ম

**১. প্রজেক্ট clone করুন**

```bash
git clone <আপনার-repository-url>
cd bazar-dor
```

**২. dependencies install করুন**

```bash
npm install
```

**৩. `.env` ফাইল তৈরি করে নিচের মানগুলো দিন**

```env
MONGODB_URI=
MONGODB_DB=

BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

**৪. ডেভেলপমেন্ট সার্ভার চালু করুন**

```bash
npm run dev
```

এরপর ব্রাউজারে [http://localhost:3000](http://localhost:3000) খুলুন।

### 🔑 OAuth Callback URL

| Provider | Callback URL |
|----------|--------------|
| Google | `http://localhost:3000/api/auth/callback/google` |
| GitHub | `http://localhost:3000/api/auth/callback/github` |

## 👨‍💻 ডেভেলপার

**Shoabul**, Web Developer, Bangladesh 🇧🇩

---

<div align="center">

⭐ প্রজেক্টটি ভালো লাগলে একটি star দিতে ভুলবেন না!

</div>