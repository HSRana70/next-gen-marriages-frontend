// pages/wedding/index.js

'use client';

import { useState } from 'react';
import Image from 'next/image';

const allWeddings = [
  {
    id: 1,
    title: "AARAV & MEERA'S CELEBRATION",
    image: '/wedding/1.jpg',
    location: 'Jodhpur, Rajasthan, India',
    date: '12 to 14 Sep, 2025',
  },
  {
    id: 2,
    title: "RISHABH & ANANYA'S BIG DAY",
    image: '/wedding/2.jpg',
    location: 'Coorg, Karnataka, India',
    date: '5 to 7 Oct, 2025',
  },
  {
    id: 3,
    title: "VIHAN & ISHA'S WEDDING FIESTA",
    image: '/wedding/3.webp',
    location: 'Manali, Himachal Pradesh, India',
    date: '18 to 20 Aug, 2025',
  },
  {
    id: 4,
    title: "SAMEER & KRITI'S WEDDING JOURNEY",
    image: '/wedding/4.jpg',
    location: 'Udaipur, Rajasthan, India',
    date: '3 to 5 Nov, 2025',
  },
  {
    id: 5,
    title: "ADITYA & PRACHI'S CELEBRATIONS",
    image: '/wedding/5.jpg',
    location: 'Alleppey, Kerala, India',
    date: '21 to 23 Dec, 2025',
  },
  {
    id: 6,
    title: "DEV & TANVI'S MAGICAL DAY",
    image: '/wedding/6.jpg',
    location: 'Goa, India',
    date: '15 to 17 Jan, 2026',
  },
  {
    id: 7,
    title: "VIKAS & NEHA'S GRAND CELEBRATION",
    image: '/wedding/7.jpg',
    location: 'Jaipur, Rajasthan, India',
    date: '10 to 12 Feb, 2026',
  },
  {
    id: 8,
    title: "RAHUL & SHRUTI'S WEDDING WEEKEND",
    image: '/wedding/8.jpeg',
    location: 'Mysore, Karnataka, India',
    date: '27 to 29 Mar, 2026',
  },
  {
    id: 9,
    title: "NIRANJAN & RIA'S LOVE CELEBRATION",
    image: '/wedding/9.jpg',
    location: 'Shimla, Himachal Pradesh, India',
    date: '6 to 8 Apr, 2026',
  },
  {
    id: 10,
    title: "ARJUN & SAUMYA'S BIG FAT WEDDING",
    image: '/wedding/10.jpg',
    location: 'Kumarakom, Kerala, India',
    date: '15 to 17 May, 2026',
  },
];

export default function WeddingPage() {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Load 4 more each time
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#10325a] text-white text-center py-4">
        <h1 className="text-3xl font-bold">ALL WEDDINGS</h1>
        <p className="text-lg">Choose the wedding you would like to join</p>
      </header>

      {/* Date Picker Section */}
      <div className="flex justify-center my-6">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 border border-[#10325a]">
          <div>
            <p className="text-gray-700">Planning to travel between certain dates?</p>
            <p className="text-gray-700">Pick a starting date of interest:</p>
          </div>
          <input
            type="date"
            defaultValue="2025-06-06"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#10325a]"
          />
        </div>
      </div>

      {/* Wedding Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 pb-8">
        {allWeddings.slice(0, visibleCount).map((wedding) => (
          <div key={wedding.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={wedding.image}
                alt={wedding.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h2 className="text-white text-lg font-bold leading-tight">{wedding.title}</h2>
              </div>
            </div>
            <div className="p-4 text-center">
              <p className="font-semibold text-gray-800">{wedding.location}</p>
              <p className="text-gray-600">{wedding.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < allWeddings.length && (
        <div className="flex justify-center pb-8">
          <button
            onClick={handleLoadMore}
            className="bg-[#10325a] text-white px-6 py-2 rounded-md hover:bg-[#0c2a4e] transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
