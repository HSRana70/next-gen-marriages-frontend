import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white text-[#10325a] py-4 px-6 shadow-md flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3 cursor-pointer">
        <Image src="/logo.png" alt="JoinMyMarriage" width={36} height={36} />
        <h1 className="text-xl font-semibold">NextGenMarriages</h1>
      </Link>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-8 font-medium text-sm">
        <li>
          <Link href="/weddings">WEDDINGS</Link>
        </li>
        <li>
          <Link href="/blog">BLOG</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT US</Link>
        </li>
        <li>
          <Link href="/become-a-host">BECOME A HOST</Link>
        </li>
      </ul>

      {/* Profile Button */}
      <Link href="/profile">
        <div className="hidden md:flex items-center space-x-2 border border-[#10325a] rounded-full px-4 py-1 hover:bg-[#f0f8ff] transition cursor-pointer">
          <span className="text-[#10325a] font-semibold text-sm">MY PROFILE</span>
          <Image src="/profile-icon.png" alt="Profile" width={28} height={28} className="rounded-full" />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
