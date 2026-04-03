import AboutSection from "@/components/home/AboutSection";
import TestimonialsSectionHome2 from "@/components/home/TestimonialsSectionHome2";
import WorkingProcessHome2 from "@/components/home/WorkingProcessHome2";
import OnlineQuote from "@/components/home/OnlineQuote";
import MovingServices from "@/components/home/ServicesSectionHome2";
import CounterSection from "@/components/home/CounterSection";
import TrustBadgesSection from "@/components/home/TrustBadgesSection";
import HeroSection from "@/components/home/HeroSection";
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
export const metadata = {
  title: "Home | King Moving Services",
  description: "King Moving Services — alternate homepage",
};

export default function Home2Page() {
  return (
    <main
      className={`${homeHeadingFont.variable} ${homeBodyFont.variable} home-heading-font overflow-hidden`}
    >
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

      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Playfair: semantic headings + Hero headline class + section titles using font-serif */
            .home-heading-font h1,
            .home-heading-font h2,
            .home-heading-font h3,
            .home-heading-font h4,
            .home-heading-font h5,
            .home-heading-font h6,
            .home-heading-font .font-hero-heading,
            .home-heading-font .font-serif {
              font-family: var(--font-home-heading), ui-serif, Georgia, serif;
            }

            /* Libre: body copy — overrides globals .font-hero-body (Work Sans) */
            .home-heading-font .font-hero-body,
            .home-heading-font p,
            .home-heading-font li,
            .home-heading-font label,
            .home-heading-font input,
            .home-heading-font textarea,
            .home-heading-font select,
            .home-heading-font option,
            .home-heading-font button,
            .home-heading-font a {
              font-family: var(--font-home-body), ui-serif, Georgia, serif;
            }
          `,
        }}
      />
    </main>
  );
}
