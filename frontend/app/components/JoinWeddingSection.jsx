'use client';

import React from 'react';
import Link from 'next/link';

export default function JoinWeddingSection() {
  return (
    <div
      className="py-16 px-4 sm:px-6 lg:px-8 text-center"
      style={{
        background: 'linear-gradient(90deg, #10325a 0%, #45a183 100%)',
      }}
    >
      <p className="text-sm font-semibold text-white tracking-wide mb-2">
        LOVE EXPLORING CULTURES?
      </p>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
       Enjoy Indian Wedding Celebrations
      </h2>
      <Link href="/join-marriages-register" passHref>
        <button
          className="bg-white text-[#10325a] px-8 py-3 rounded-full text-base font-semibold hover:bg-gray-200 transition duration-300"
        >
          SHARE YOUR DREAM DESTINATION
        </button>
      </Link>
    </div>
  );
}
