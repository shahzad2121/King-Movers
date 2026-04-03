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
import { Libre_Baskerville, Playfair_Display } from "next/font/google";

// Single source of truth for the Home page heading font.
const homeHeadingFont = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-home-heading",
});

// Single source of truth for Home page supporting text.
const homeBodyFont = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-home-body",
});

export default function Home() {
  return (
    <main className={`${homeHeadingFont.variable} ${homeBodyFont.variable} home-heading-font overflow-hidden`}>
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

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .home-heading-font h1,
            .home-heading-font h2,
            .home-heading-font h3,
            .home-heading-font h4,
            .home-heading-font h5,
            .home-heading-font h6 {
              font-family: var(--font-home-heading), serif;
            }

            .home-heading-font p,
            .home-heading-font span,
            .home-heading-font small,
            .home-heading-font li,
            .home-heading-font label {
              font-family: var(--font-home-body), serif;
            }
          `,
        }}
      />
    </main>
  );
}