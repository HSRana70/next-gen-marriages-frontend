"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const allBlogs = [
  {
    title: "Discovering Flavors: The Culinary Magic of Indian Wedding Feasts",
    description:
      "An Indian wedding is a journey through flavors and aromas. The elaborate spreads of regional delicacies turn every meal into a vibrant celebration of culture.",
    date: "May 25, 2025",
    readTime: "4 min read",
    image: "/blog/blog1.jpg",
    link: "/blog/culinary-magic-indian-weddings",
  },
  {
    title: "Circle of Fire: The Symbolism of Saat Phere in Indian Marriages",
    description:
      "The saat phere, or seven sacred rounds around the holy fire, bind two souls together. This ritual holds deep spiritual and emotional significance.",
    date: "May 12, 2025",
    readTime: "3 min read",
    image: "/blog/blog2.jpeg",
    link: "/blog/saat-phere-meaning",
  },
  {
    title: "Timeless Traditions: The Role of Music in Indian Wedding Ceremonies",
    description:
      "Music breathes life into Indian weddings. From classical instruments to modern beats, discover how melodies create memories that last a lifetime.",
    date: "April 30, 2025",
    readTime: "5 min read",
    image: "/blog/blog3.jpeg",
    link: "/blog/music-in-indian-weddings",
  },
  {
    title: "Decor Dreams: How Indian Weddings Create Enchanted Spaces",
    description:
      "Wedding decor in India is an art form—transforming spaces with flowers, fabrics, and lights into a world of wonder and tradition.",
    date: "April 15, 2025",
    readTime: "4 min read",
    image: "/blog/blog4.jpg",
    link: "/blog/indian-wedding-decor",
  },
  {
    title: "The Meaning Behind Mehendi: More Than Just Beautiful Designs",
    description:
      "Mehendi is not only about intricate patterns—it carries centuries of tradition, blessing the bride with love, luck, and happiness.",
    date: "April 5, 2025",
    readTime: "3 min read",
    image: "/blog/blog5.jpg",
    link: "/blog/mehendi-meaning",
  },
  {
    title: "Capturing Moments: Why Photography Matters in Indian Weddings",
    description:
      "Photography at Indian weddings is more than a service—it’s a storytelling art that preserves the vibrance and emotions of your special day.",
    date: "March 25, 2025",
    readTime: "4 min read",
    image: "/blog/blog6.webp",
    link: "/blog/indian-wedding-photography",
  },
];

export default function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(3); // show 3 initially

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // load 3 more blogs
  };

  const visibleBlogs = allBlogs.slice(0, visibleCount);

  return (
    <section className="py-16 px-4 bg-[#f9f9f9]">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#10325a] tracking-wide">
        Our Latest Wedding Stories
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visibleBlogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-[#10325a] mb-2 leading-snug">
                {blog.title}
              </h3>
              <hr className="border-t border-gray-300 my-2 w-10" />
              <p className="text-gray-600 text-sm flex-grow">{blog.description}</p>
              <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              <div className="mt-5">
                <Link href={blog.link}>
                  <button className="bg-[#10325a] text-white px-4 py-2 rounded-full hover:bg-[#0c2848] text-sm font-medium transition-colors duration-300">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < allBlogs.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-[#10325a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0c2848] transition-colors duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
