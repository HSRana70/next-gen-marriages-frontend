import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#10325a] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/images/logo.jpeg" alt="NextGenMarriages" width={36} height={36} />
            <span className="text-xl font-bold">NextGenMarriages</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-200">
            Discover authentic wedding experiences around the world. Join, host or witness unforgettable ceremonies in beautiful destinations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/weddings" className="hover:underline">Weddings</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/become-a-host" className="hover:underline">Become a Host</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            {/* <li><Link href="#" className="hover:underline">Refund Policy</Link></li> */}
          </ul>
        </div>

        {/* Subscribe & Social */}
        <div>
          <h3 className="font-semibold mb-3">Stay Connected</h3>
          <form className="flex mb-4">
  <input
    type="email"
    placeholder="Your email"
    className="w-full px-4 py-2 rounded-l-md text-white text-sm border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
  />
  <button
    type="submit"
    className="bg-white text-[#10325a] px-4 py-2 rounded-r-md text-sm font-medium border border-white transition hover:bg-gray-100"
  >
    Subscribe
  </button>
</form>

          <div className="flex space-x-4 text-white text-lg">
  <a href="https://www.facebook.com/profile.php?id=61573763406606" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="hover:text-cyan-300 cursor-pointer" />
  </a>
  <a href="https://x.com/NextGenTrip" target="_blank" rel="noopener noreferrer">
    <FaXTwitter className="hover:text-cyan-300 cursor-pointer" />
  </a>
  <a href="https://www.youtube.com/@NextGenTrip-g5t" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="hover:text-cyan-300 cursor-pointer" />
  </a>
  <a href="https://www.instagram.com/nextgentrip/" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="hover:text-cyan-300 cursor-pointer" />
  </a>
</div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} NextGenMarriages. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
