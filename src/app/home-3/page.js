import HeroSection from "@/components/home3/HeroSection";
import HeroQuoteBar from "@/components/home3/HeroQuoteBar";
import FeaturesSection from "@/components/home3/FeaturesSection";
import AboutUs from "@/components/home3/AboutUs";
import ServicesSection from "@/components/home3/ServicesSection";
import CounterSection from "@/components/home3/CounterSection";
import WorkProcess from "@/components/home3/WorkProcess";
import QuoteForm from "@/components/home3/QuoteForm";
import TestimonialsSectionHome2 from "@/components/home/TestimonialsSectionHome2";
import TrustBadgesSection from "@/components/home/TrustBadgesSection";

export const metadata = {
  title: "Home 3 | King Moving Services",
  description: "King Moving Services — alternate homepage",
};

export default function Home3Page() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <HeroQuoteBar />
      <FeaturesSection />
      <CounterSection />
      <AboutUs />
      <ServicesSection />
      <TrustBadgesSection />
      <WorkProcess />
      <TestimonialsSectionHome2 />
      <QuoteForm />
    </main>
  );
}
