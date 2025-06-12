'use client';

import React from 'react';
import Link from 'next/link';

export default function HostInvitationSection() {
  return (
    <div
      className="py-16 relative  px-4 sm:px-6 lg:px-8 text-center text-white"
      style={{
          backgroundImage: 'url(/wedding-back.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',  
      }}
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 z-10">
        OPEN YOUR WEDDING TO GLOBAL FRIENDS!
      </h2>
      <p className="max-w-2xl mx-auto text-base sm:text-lg font-medium mb-8 z-10">
        Share the beauty of your big day with travelers from around the world.
        Create cultural connections and offer them an unforgettable Indian wedding experience.
      </p>
      
      <Link href="/wedding-register" passHref>
        <button
          className="bg-white text-[#10325a] px-8 py-3 rounded-full text-base font-semibold hover:bg-gray-100 transition duration-300"
        >
          BECOME A HOST
        </button>
      </Link>

   
    </div>
  );
}
