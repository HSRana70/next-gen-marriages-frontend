// components/HeroSection.jsx
import Image from "next/image";


const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/images/for.jpeg" // make sure this image is in /public
        alt="NextGenMarriages Indian Wedding"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0  bg-black/20 bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          YOU HAVEN’T BEEN TO INDIA <br className="hidden md:block" />
          UNTIL YOU’VE BEEN TO A <br className="hidden md:block" />
          <span className="text-pink-400">NEXTGEN MARRIAGE</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl">
          NextGenMarriages gives travelers the chance to be on the guest list of a genuine cultural celebration.
        </p>

      </div>
    </div>
  );
};

export default HeroSection;
