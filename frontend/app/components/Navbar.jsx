'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white text-[#10325a] py-4 px-6 shadow-md flex justify-between items-center relative z-50 sticky top-0 z-50 ">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3 cursor-pointer">
        <Image src="/images/logo.jpeg" alt="JoinMyMarriage" width={36} height={36} />
        <h1 className="text-xl font-semibold">JoinMarriages</h1>
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8 font-medium text-sm">
        <li><Link href="/weddings">WEDDINGS</Link></li>
         <li><Link href="/become-a-host">BECOME A HOST</Link></li>
        <li><Link href="/blog">BLOG</Link></li>
        <li><Link href="/faq">FAQ</Link></li>
        <li><Link href="/contact">CONTACT US</Link></li>
       
      </ul>

      {/* Profile Button (Desktop) */}
      {/* <Link href="/profile" className="hidden md:flex items-center space-x-2 border border-[#10325a] rounded-full px-4 py-1 hover:bg-[#f0f8ff] transition cursor-pointer">
        <span className="text-[#10325a] font-semibold text-sm">MY PROFILE</span>
        <Image src="/profile-icon.png" alt="Profile" width={28} height={28} className="rounded-full" />
      </Link> */}

      {/* Hamburger Menu Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-[#10325a]">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-6 px-6 flex flex-col space-y-4 md:hidden">
          <Link href="/weddings" onClick={() => setIsOpen(false)}>WEDDINGS</Link>
          <Link href="/become-a-host" onClick={() => setIsOpen(false)}>BECOME A HOST</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>BLOG</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
          
          {/* <Link href="/profile" onClick={() => setIsOpen(false)} className="flex items-center space-x-2 border border-[#10325a] rounded-full px-4 py-2 hover:bg-[#f0f8ff] transition">
            <span className="text-[#10325a] font-semibold text-sm">MY PROFILE</span>
            <Image src="/profile-icon.png" alt="Profile" width={24} height={24} className="rounded-full" />
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
