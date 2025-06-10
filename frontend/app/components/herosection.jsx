// components/HeroSection.jsx
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/images/for.jpeg" // Ensure this image exists in /public
        alt="NextGenMarriages Indian Wedding"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          <span className="text-pink-400">EXPLORE INDIAN CULTURE</span> <br/>
          EXPERIENCE INDIA THROUGH <br className="hidden md:block" />
          A CELEBRATION LIKE NO OTHER <br className="hidden md:block" />
          
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl">
          Dive into the heart of Indian culture. With JoinMarriages, <br/> become more than a tourist — be a part of vibrant traditions, sacred rituals, and unforgettable joy.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
