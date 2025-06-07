// app/contact/page.jsx or pages/contact.js

'use client'; // if using app directory

import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate your backend / API call
    toast.success('Thank you! Your message has been submitted. We will get back to you shortly.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Toaster position="top-right" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#10325a] py-12 text-center text-white"
      >
        <h1 className="text-4xl font-bold mb-2">CONTACT US</h1>
        <p className="text-lg">We are here to help you, globally</p>
      </motion.div>

      <div className="max-w-6xl mx-auto mt-12 px-6">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 rounded shadow-md mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">GET IN TOUCH</h2>
          <p className="text-gray-700 mb-4">
            Whether you're a wedding host, a traveler looking to join weddings globally, a partner, or just someone with a question — we would love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-2">
                📧 <strong>Email (Support):</strong>{' '}
                <a href="mailto:support@nextgenmarriages.com" className="text-[#10325a] font-semibold hover:underline">
                  support@nextgenmarriages.com
                </a>
              </p>
              {/* <p className="text-gray-700 mb-2">
                📧 <strong>Email (Partnerships):</strong>{' '}
                <a href="mailto:partners@nextgenmarriages.com" className="text-[#10325a] font-semibold hover:underline">
                  partners@nextgenmarriages.com
                </a>
              </p> */}
              <p className="text-gray-700 mb-2">
                🌐 <strong>Global Support Hours:</strong> Mon - Fri: 08:00 - 20:00 UTC
              </p>
            </div>

            <div>
              <p className="text-gray-700 mb-2">
                🌎 <strong>Global Offices:</strong> Operating in India, Europe, US, and expanding worldwide.
              </p>
              <p className="text-gray-700 mb-2">
                🕑 <strong>Response Time:</strong> We typically reply within 24-48 business hours.
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Follow us:</h3>
            <div className="flex space-x-4 text-[#10325a] text-xl">
              <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-8 rounded shadow-md mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">SEND US A MESSAGE</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#10325a]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#10325a]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of your message"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#10325a]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#10325a]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#10325a] text-white font-semibold py-3 px-6 rounded hover:bg-[#0d294c] transition duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Google Map Placeholder */}
        {/* Optional — you can uncomment if you want to show HQ location */}
        {/* <div className="mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!..." // Replace with your actual map link
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded shadow-md"
          ></iframe>
        </div> */}
      </div>
    </div>
  );
}
