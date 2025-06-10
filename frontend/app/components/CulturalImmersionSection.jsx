'use client';

import React from 'react';
import Image from 'next/image';

export default function CulturalImmersionSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center">
      {/* Media Logos */}
      {/* <div className="flex flex-wrap justify-center items-center gap-8 mb-12 bg-gray-100 py-6 px-4 rounded-md">
        <Image src="/logos/bbc.png" alt="BBC" width={100} height={40} />
        <Image src="/logos/ht.png" alt="Hindustan Times" width={100} height={40} />
        <Image src="/logos/nyt.png" alt="New York Times" width={120} height={40} />
        <Image src="/logos/huffpost.png" alt="Huffington Post" width={100} height={40} />
        <Image src="/logos/toi.png" alt="Times of India" width={120} height={40} />
      </div> */}

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10325a] mb-6">
        DISCOVER THE HEARTBEAT OF INDIAN WEDDINGS
      </h2>

      {/* Subheading */}
      <p className="max-w-3xl mx-auto text-lg text-gray-700 font-medium mb-10">
        Join hands with local families and experience India’s most vibrant cultural traditions from the inside.
        Through <span className="text-[#10325a] font-semibold">NextGenMarriages</span>, your journey transforms into an unforgettable story of unity, color, and celebration.
      </p>

      {/* Two Columns Text */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-gray-800 text-base leading-relaxed">
        <div>
          Picture yourself participating in sacred rituals, learning about timeless traditions, and bonding with a welcoming host family. 
          Every ceremony, every smile, and every shared meal deepens your connection to Indian heritage.
        </div>
        <div>
          From dancing in vibrant processions to savoring authentic Indian flavors, you’ll step beyond being a tourist — you’ll become a cherished guest.
          Let <span className="text-[#10325a] font-semibold">NextGenMarriages</span> open the doors to this extraordinary cultural adventure.
        </div>
      </div>
    </section>
  );
}
