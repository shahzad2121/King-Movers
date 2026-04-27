import HeroQuoteBar from "@/components/home3/HeroQuoteBar";
import ServicesSection from "@/components/home3/ServicesSection";
import ServiceHero from "@/components/services/ServiceHero";
import ServicesPageContent from "@/components/services/ServicesPageContent";
import OurWork from "@/components/home/OurWork";
import CratingCareSection from "@/components/services/CratingCareSection";
import LoadingCareSection from "@/components/services/LoadingCareSection";
import WorkProcess from "@/components/home3/WorkProcess";
import TrustBadgesSection from "@/components/home/TrustBadgesSection";
import PageHeroSection from "@/components/ui/PageHeroSection";

export const metadata = {
  title: "Services | King Moving Services",
  description:
    "Residential, commercial, packing, long-distance, and storage moving services.",
};

export default function ServicesPage() {
  return (
    <>
    <PageHeroSection
     badge="What We Offer"
     title="Full-Service Moving"
     highlight="Done Right"
     description="Residential, commercial, packing, long-distance, and storage — one trusted team for every step of your move."
     bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85"
     ctaText="Get a Free Quote"
     ctaLink="/#quote"
     />
    <TrustBadgesSection/>
    <ServicesSection/>
    <OurWork/>
    <CratingCareSection />
    <LoadingCareSection />
    {/* <WorkProcess/> */}
    </>
  )
}
