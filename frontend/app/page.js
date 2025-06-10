import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/herosection";
import Testinomials from "./components/Testinomials"
import MoreAboutSection from "./components/MoreAboutSection";
import JoinWeddingSection from "./components/JoinWeddingSection";
import HostInvitationSection from "./components/HostInvitationSection";
import CulturalImmersionSection from "./components/CulturalImmersionSection";
import AboutUsPage from "./components/AboutUsPage";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Testinomials/>
      
      <HostInvitationSection/>
      <CulturalImmersionSection/>
      
      
       <JoinWeddingSection/>
      <AboutUsPage/>
      <MoreAboutSection/>
     
   
    </div>
  );
}
