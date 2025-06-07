import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/herosection";
import Testinomials from "./components/Testinomials"
import MoreAboutSection from "./components/MoreAboutSection";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Testinomials/>
      <MoreAboutSection/>
    </div>
  );
}
