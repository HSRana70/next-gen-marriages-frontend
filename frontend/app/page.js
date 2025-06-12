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
       <AboutUsPage/>
      
      
      <HostInvitationSection/>
      <CulturalImmersionSection/>
      
      
       <JoinWeddingSection/>
     <Testinomials/>
      <MoreAboutSection/>
     
   
    </div>
  );
}
