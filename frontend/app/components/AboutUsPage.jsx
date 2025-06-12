"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <section className="bg-white py-16 px-4 sm:px-10 md:px-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-14"
      >
        <h1 className="text-2xl md:text-4xl font-extrabold text-[#10325a] mb-4">
          About JoinMarriages
        </h1>
        <p className="text-gray-600 text-lg">
          Celebrating culture, connection and unforgettable Indian weddings.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20"
      >
        <div>
          <h2 className="text-3xl font-bold text-[#10325a] mb-4">Our Mission</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            JoinMarriages bridges cultures through authentic Indian wedding experiences.
            We open doors for global travelers to become a part of real family celebrations—
            not just as guests, but as cherished participants in rituals, joy, and tradition.
          </p>
        </div>
        <Image
          src="/wedding/2.jpg"
          alt="Wedding Mission"
          width={500}
          height={350}
          className="rounded-xl shadow-md object-cover"
        />
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20"
      >
        <Image
          src="/wedding/6.jpg"
          alt="Global Guests"
          width={500}
          height={350}
          className="rounded-xl shadow-md object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold text-[#10325a] mb-4">What We Believe</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            We believe weddings are the heart of culture. Through genuine hospitality,
            traditional ceremonies, and vibrant celebrations, we enable guests to feel
            the soul of India. Respect, inclusivity, and shared joy drive every experience.
          </p>
        </div>
      </motion.div>

      {/* Stats Section */}
     
    </section>
  );
}
