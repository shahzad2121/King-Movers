"use client";

const BADGES = [
  { src: "/images/angi-kings-moving.png", alt: "Angi Kings Moving" },
  { src: "/images/boha-2021-solid-border.png", alt: "Boha 2021" },
  { src: "/images/toprated-solid-border.png", alt: "Top Rated" },
  { src: "/images/logo.png", alt: "King Moving Services" },
  // Parentheses in filename encoded for URL compatibility
  { src: "/images/mcseal245-70%281%29.gif", alt: "MC Seal" },
];

function BadgeCard({ src, alt }) {
  return (
    <div className="shrink-0 w-28 sm:w-40 md:w-56 h-20 sm:h-24 md:h-36 flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default function TrustBadgesSection() {
  return (
    <section className="relative w-full bg-background border-y border-foreground/8 overflow-hidden">
      <div className="flex">
        {/* Fixed left strip */}
        <div className="shrink-0 w-28 sm:w-40 md:w-56 bg-primary/10 border-r-2 border-primary flex items-center justify-center py-6 sm:py-9 md:py-14 z-10">
          <p className="font-serif font-bold text-center leading-snug uppercase tracking-wider text-xs sm:text-sm md:text-lg">
            <span className="text-foreground">Best</span>
            <br />
            <span className="text-foreground">Customer</span>
            <br />
            <span className="text-primary">Service</span>
          </p>
        </div>

        {/* Scrolling badges */}
        <div className="flex-1 overflow-hidden py-5 sm:py-7 md:py-12">
          <div
            className="flex gap-6 sm:gap-8 md:gap-12 w-max"
            style={{ animation: "trustBadgesScroll 30s linear infinite" }}
          >
            {[...BADGES, ...BADGES].map((badge, i) => (
              <BadgeCard key={i} src={badge.src} alt={badge.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
