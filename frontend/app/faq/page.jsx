'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is NextGenMarriages about?",
    answer:
      "NextGenMarriages is a global platform that connects wedding hosts with travelers and culture enthusiasts who want to experience the magic of authentic weddings.",
  },
  {
    question: "What inspired the idea of inviting people to join weddings?",
    answer:
      "Our idea was born from the belief that weddings are one of the most beautiful ways to experience local culture, traditions, and hospitality.",
  },
  {
    question: "What role can weddings play in connecting people across cultures?",
    answer:
      "Weddings provide a unique opportunity for guests to engage deeply with cultural rituals, music, food, and social interactions— fostering understanding and friendship.",
  },
  {
    question: "Where is NextGenMarriages located?",
    answer:
      "NextGenMarriages operates globally through its online platform, with active listings currently focused in India and expanding internationally.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0); // First question open by default

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-12">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-[#10325a] to-[#10325a] text-white text-center py-8">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <p className="text-lg mt-2">Frequently asked questions</p>
      </div>

      {/* FAQ Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - FAQ */}
        <div className="md:col-span-2 bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#10325a] mb-6">ABOUT NEXTGENMARRIAGES</h3>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex justify-between items-center py-4">
                <p className="text-[#10325a] font-medium">{faq.question}</p>
                {activeIndex === index ? (
                  <ChevronUp className="text-[#10325a]" />
                ) : (
                  <ChevronDown className="text-[#10325a]" />
                )}
              </div>

              {/* Animated Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right column - Image */}
        <div className="hidden md:block">
          <img
            src="/testimonials/fbsds.jpg" // you can replace with your own FAQ image
            alt="Wedding FAQ"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
