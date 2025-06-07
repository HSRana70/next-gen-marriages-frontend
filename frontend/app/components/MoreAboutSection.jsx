'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
const guestFaqs = [
  {
    question: 'Why should I attend a stranger’s wedding?',
    answer:
      'Attending a local wedding offers a rare opportunity to experience authentic traditions, cultural rituals, and community celebrations that you would never access as a regular tourist.',
  },
  {
    question: 'Why should I use NextGenMarriages?',
    answer:
      'NextGenMarriages connects travelers with trusted hosts, ensuring a safe, respectful, and well-organized cultural experience during weddings worldwide.',
  },
  {
    question: 'Why am I paying to be a guest?',
    answer:
      'Your fee supports the host family for arrangements such as meals, seating, attire guidance, and helps facilitate a smooth guest experience while respecting their traditions.',
  },
];

const hostFaqs = [
  {
    question: 'Why invite foreigners to my wedding?',
    answer:
      'Sharing your wedding with global guests fosters cultural exchange, brings a sense of pride in your traditions, and often results in lifelong friendships.',
  },
  {
    question: 'Why use NextGenMarriages?',
    answer:
      'NextGenMarriages helps hosts connect with respectful and verified international guests, manage invitations, and ensure an organized experience for everyone involved.',
  },
  {
    question: 'How do I know that the guests will respect my wedding?',
    answer:
      'All our guests are carefully guided about local etiquette and expectations before attending. We foster mutual respect and cultural understanding throughout the process.',
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#10325a]">MORE ABOUT NextGenMarriages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Guests Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">FOR GUESTS</h3>
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
            <h3 className="text-xl font-semibold mb-6 text-gray-800">FOR HOSTS</h3>
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
    <button className="bg-[#10325a] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#10325a] transition">
      FIND OUT MORE
    </button>
  </Link>
</div>
      </div>
    </section>
  );
}
