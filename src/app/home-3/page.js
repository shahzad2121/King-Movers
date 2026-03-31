import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ScrollingTextMarquee from "@/components/home/ScrollingTextMarquee";
import TestimonialsSectionNew from "@/components/home/TestimonialsSectionNew";
import ThreeStepsSection from "@/components/home/ThreeStepsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import OurWork from "@/components/home/OurWork";


export const metadata = {
  title: "Home 3 | King Moving Services",
  description: "King Moving Services — alternate homepage",
};

export default function Home3Page() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <AboutSection /> 
      <ScrollingTextMarquee />
      <TestimonialsSectionNew />
      <ThreeStepsSection />
      <OurWork /> 
       <FaqSection /> 
      <CtaSection />
    </main>
  );
}
