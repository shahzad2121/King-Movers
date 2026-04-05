import AboutSection from "@/components/home/AboutSection";
import TestimonialsSectionHome2 from "@/components/home/TestimonialsSectionHome2";
import WorkingProcessHome2 from "@/components/home/WorkingProcessHome2";
import OnlineQuote from "@/components/home/OnlineQuote";
import MovingServices from "@/components/home/ServicesSectionHome2";
import CounterSection from "@/components/home/CounterSection";
import TrustBadgesSection from "@/components/home/TrustBadgesSection";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
export const metadata = {
  title: "Home | King Moving Services",
  description: "King Moving Services — alternate homepage",
};

export default function Home2Page() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      {/* <ServicesCardsOverlay /> */}
      <AboutSection />
      <MovingServices />
      <WhyChooseUs />
      <CounterSection />
      <TrustBadgesSection />
      {/* <ScrollingTextMarquee /> */}
      <TestimonialsSectionHome2 />
      <WorkingProcessHome2 />
      <OnlineQuote />
    </main>
  );
}
