import HeroSlider from "@/components/home/HeroSlider";
import ServicesCardsOverlay from "@/components/home/ServicesCardsOverlay";
import ServicesSectionHome2 from "@/components/home/ServicesSectionHome2";
import AboutSection from "@/components/home/AboutSection";
import ScrollingTextMarquee from "@/components/home/ScrollingTextMarquee";
import TestimonialsSectionHome2 from "@/components/home/TestimonialsSectionHome2";
import WorkingProcessHome2 from "@/components/home/WorkingProcessHome2";
import OnlineQuote from "@/components/home/OnlineQuote";
import ThreeStepsSection from "@/components/home/ThreeStepsSection";
import OurWork from "@/components/home/OurWork";
import CtaSection from "@/components/home/CtaSection";
import MovingServices from "@/components/home/ServicesSectionHome2";
import CounterSection from "@/components/home/CounterSection";
import TrustBadgesSection from "@/components/home/TrustBadgesSection";
import HeroSection from "@/components/home/HeroSection";

export const metadata = {
  title: "Home 2 | King Moving Services",
  description: "King Moving Services — alternate homepage",
};

export default function Home2Page() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      {/* <ServicesCardsOverlay /> */}
      <AboutSection />
      <MovingServices />
      <CounterSection />
      <TrustBadgesSection />
      {/* <ScrollingTextMarquee /> */}
      <TestimonialsSectionHome2 />
      <WorkingProcessHome2 />
      <OnlineQuote />
      
    </main>
  );
}
