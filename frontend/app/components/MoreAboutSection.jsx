'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const guestFaqs = [
  {
    question: 'What makes attending a wedding abroad special?',
    answer:
      'Weddings are one of the most authentic cultural experiences. Through NextGenMarriages, you’ll witness local customs, taste traditional food, and participate in heartfelt celebrations — something no guidebook can offer.',
  },
  {
    question: 'How does NextGenMarriages enhance my travel?',
    answer:
      'NextGenMarriages offers curated cultural experiences through weddings, giving you access to trusted hosts, personalized guidance, and memories that last far beyond your trip.',
  },
  {
    question: 'Why is there a guest fee?',
    answer:
      'The fee supports the host family in creating a warm and welcoming environment — including meals, cultural attire recommendations, and logistical coordination to ensure a respectful, seamless experience.',
  },
];

const hostFaqs = [
  {
    question: 'Why should I welcome global guests to my wedding?',
    answer:
      'Hosting international guests allows you to share your rich traditions with the world. It fosters cultural harmony, creates meaningful connections, and brings a global spotlight to your celebration.',
  },
  {
    question: 'How does NextGenMarriages support me as a host?',
    answer:
      'We help you connect with respectful, pre-screened international guests and assist with communication, expectations, and coordination so you can focus on enjoying your big day.',
  },
  {
    question: 'Will guests respect our culture and customs?',
    answer:
      'Absolutely. Each guest is educated about cultural etiquette, dress codes, and event protocols before the wedding, ensuring that all interactions are grounded in mutual respect.',
  },
];

export default function MoreAboutSection() {
  const [openGuestIndex, setOpenGuestIndex] = useState(null);
  const [openHostIndex, setOpenHostIndex] = useState(null);

  const toggleGuest = (index) => {
    setOpenGuestIndex(openGuestIndex === index ? null : index);
  };

  const toggleHost = (index) => {
    setOpenHostIndex(openHostIndex === index ? null : index);
  };

  return (
    <section
      className="relative bg-cover bg-center py-20 px-4"
      style={{
        backgroundImage: "url('/testimonials/newm.jpg')", // Replace with your background image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-10 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#10325a]">DISCOVER JOINMARRIAGES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Guests Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">FOR GLOBAL GUESTS</h3>
            {guestFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                <button
                  className="flex justify-between items-center w-full text-left text-[#45a183] font-semibold text-lg"
                  onClick={() => toggleGuest(index)}
                >
                  {faq.question}
                  {openGuestIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {openGuestIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-2 text-gray-700 text-base">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Hosts Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">FOR WEDDING HOSTS</h3>
            {hostFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                <button
                  className="flex justify-between items-center w-full text-left text-[#45a183] font-semibold text-lg"
                  onClick={() => toggleHost(index)}
                >
                  {faq.question}
                  {openHostIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {openHostIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-2 text-gray-700 text-base">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Link href="/faq">
            <button className="bg-[#10325a] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#0b284a] transition">
              LEARN MORE ABOUT US
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
