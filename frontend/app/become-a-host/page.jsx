'use client'; // only if you use App Router

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BecomeHostPage() {
  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <Image
        src="/wedding/3.webp" // put your image in /public folder with this name or change this path
        alt="Wedding Celebration"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex flex-col justify-center items-start px-8 md:px-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-bold mb-4 max-w-2xl"
        >
          Open your wedding to travelers and create new connections
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-lg md:text-2xl mb-6 max-w-xl"
        >
          Let global travelers join your big day, celebrate with your family, and experience your traditions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Link href="/wedding-register">
            <button className="bg-[#45a183] hover:bg-[#3b9175] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
              Register your wedding
            </button>
          </Link>

          <Link href="/join-marriages-register">
            <button className="bg-[#45a183] hover:bg-[#3b9175] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 flex flex-col mt-2">
              join wedding
            </button>
          </Link>
        </motion.div>
      </div>
      
    </div>
  );
}
