'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="relative bg-[#fafafa] min-h-screen py-12 px-4">
      {/* Decorative background pattern (optional) */}
      <div className="absolute inset-0 opacity-5 bg-[url('/wedding-pattern.png')] bg-repeat pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto bg-white border border-gray-200 shadow-lg rounded-xl p-6 md:p-8 text-[#10325a] text-sm md:text-base leading-relaxed"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#10325a]"
        >
          Terms & Conditions
        </motion.h1>

        <section className="space-y-5 md:space-y-6">
          {termsSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-l-2 border-[#10325a] pl-4"
            >
              <h2 className="text-lg md:text-xl font-semibold mb-1">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside space-y-1">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </motion.div>
          ))}
        </section>
      </motion.div>
    </div>
  );
}

const termsSections = [
  {
    title: 'Agreement between the Clients & NextGenTrip / NextGenMarriages',
    content:
      'By accessing, using, browsing, or making a booking through NextGenTrip and/or NextGenMarriages (hereafter collectively referred to as “NextGen Group”), you agree to the Terms and Conditions stated below, including any supplementary guidelines and future modifications.',
  },
  {
    title: 'Scope of Services',
    content:
      'NextGenTrip provides an online platform for booking flights, hotels, buses, cabs, cruises, charters, helicopters, travel insurance, eSIM, visas, forex services, and related travel products. NextGenMarriages offers experiences related to participating in authentic weddings globally, allowing users to book wedding experiences, cultural stays, and associated services.',
  },
  {
    title: 'Prices on the Websites',
    content:
      'The prices listed on both websites include the applicable base charges, taxes (unless otherwise specified), and in some cases, meals or inclusions stated at the time of booking. Prices do not include personal expenses or additional charges unless specified.',
  },
  {
    title: 'Payment Modes & Policies',
    content: [
      'Credit/Debit Cards (Visa, MasterCard, Amex, Maestro, RuPay)',
      'Net Banking (All Major Banks Supported)',
      'Wallets (MobKwik, PhonePe, AmazonPay & Others)',
      'UPI (GooglePay, Paytm, etc.)',
      'EMI Options (HSBC, RBL, ICICI, and other banks)',
      'PayPal',
      'ePayLater - Travel Now, Pay Later',
    ],
  },
  {
    title: 'Booking & Service Rules',
    content:
      'Each product and service offered on NextGenTrip and NextGenMarriages is governed by the specific rules, policies, and terms of the respective service providers or hosts.',
  },
  {
    title: 'Cancellation & Refund Policy',
    content:
      'Cancellation and refund policies vary depending on the service/product booked. Certain services may be non-refundable or subject to cancellation fees.',
  },
  {
    title: 'Visa & Documentation',
    content:
      'For travel services, it is the user’s responsibility to obtain a valid visa, passport, and required documentation. NextGen Group does not guarantee visa approvals.',
  },
  {
    title: 'Experiences through NextGenMarriages',
    content:
      'Guests participating in wedding experiences must respect local customs and host rules. NextGenMarriages acts solely as an intermediary between hosts and guests.',
  },
  {
    title: 'User Conduct & Responsibility',
    content:
      'Users agree to provide accurate information and to refrain from engaging in unlawful, offensive, or fraudulent behavior while using NextGen Group services.',
  },
  {
    title: 'Transmitted Material & Security',
    content:
      'NextGen Group employs standard security measures. However, internet communications are not entirely secure.',
  },
  {
    title: 'Intellectual Property',
    content:
      'All content, trademarks, branding, and materials on NextGenTrip and NextGenMarriages are the property of NextGen Group.',
  },
  {
    title: 'Modification of Terms',
    content:
      'NextGen Group reserves the right to amend these Terms & Conditions at any time without prior notice.',
  },
  {
    title: 'Governing Law & Jurisdiction',
    content:
      'These Terms & Conditions are governed by the laws of India. All disputes are subject to the exclusive jurisdiction of courts in Chandigarh, India.',
  },
];
