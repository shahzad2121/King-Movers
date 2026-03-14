import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ScrollingTextMarquee from "@/components/home/ScrollingTextMarquee";
import TestimonialsSectionNew from "@/components/home/TestimonialsSectionNew";
import ThreeStepsSection from "@/components/home/ThreeStepsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import OurWork from "@/components/home/OurWork";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      {/* <ScrollingTextMarquee /> */}
      <TestimonialsSectionNew />
      <ThreeStepsSection />
      <OurWork />
      {/* <FaqSection /> */}
      <CtaSection />
    </main>
  );
}
