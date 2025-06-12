'use client';

import React from 'react';
import Image from 'next/image';
import { FaRegHeart, FaRegSmile, FaHandsHelping } from 'react-icons/fa';

export default function CulturalImmersionSection() {
  return (
 <section className="relative bg-gradient-to-br from-[#fff0f5] via-[#f9fbff] to-[#fff0f5] py-12 px-6 lg:px-12 text-center overflow-hidden">
  <h2 className="text-4xl sm:text-5xl font-extrabold text-[#10325a] mb-8 leading-tight">
    Discover the Heartbeat of Indian Weddings
  </h2>

  <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-700 font-medium mb-16">
    Through <span className="text-[#10325a] font-semibold">NextGenMarriages</span>, your journey transforms into an unforgettable story of unity, color, and celebration.
  </p>

  <div className="relative border-l-4 border-[#10325a] max-w-3xl mx-auto text-left">
    <div className="mb-10 ml-6">
      <div className="flex items-center mb-2">
        <div className="w-5 h-5 bg-[#10325a] rounded-full mr-3"></div>
        <h3 className="text-2xl font-bold text-[#10325a]">Step 1: Embrace Traditions</h3>
      </div>
      <p className="text-gray-700 text-lg ml-8">
        Participate in sacred rituals and ancient customs with your host family.
      </p>
    </div>

    <div className="mb-10 ml-6">
      <div className="flex items-center mb-2">
        <div className="w-5 h-5 bg-[#10325a] rounded-full mr-3"></div>
        <h3 className="text-2xl font-bold text-[#10325a]">Step 2: Celebrate Together</h3>
      </div>
      <p className="text-gray-700 text-lg ml-8">
        Dance in vibrant processions, enjoy wedding festivities, and share moments of joy.
      </p>
    </div>

    <div className="mb-10 ml-6">
      <div className="flex items-center mb-2">
        <div className="w-5 h-5 bg-[#10325a] rounded-full mr-3"></div>
        <h3 className="text-2xl font-bold text-[#10325a]">Step 3: Savor Flavors</h3>
      </div>
      <p className="text-gray-700 text-lg ml-8">
        Relish traditional Indian dishes and experience the warmth of Indian hospitality.
      </p>
    </div>
  </div>
</section>




  );
}
