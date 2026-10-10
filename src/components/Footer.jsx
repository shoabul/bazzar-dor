import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-4 px-6 md:px-12 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="text-center md:text-left">
          <span>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</span>
        </div>


        <div className="text-center md:text-right">
          <span>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</span>
        </div>
      </div>
    </footer>
  );
}