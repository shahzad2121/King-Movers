"use client";

import { services } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";

const CARD_WIDTH = 380;

export default function ShiftingServicesSlider() {
  const doubled = [...services, ...services];

  return (
    <section className="bg-surface pt-20 pb-0 overflow-hidden">
      {/* Header */}
      <div className="text-center px-6 pb-14 relative">
        <svg
          className="absolute top-0 left-20 w-16 h-16 text-primary/15"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M50 0 C50 0 52 46 100 50 C52 50 50 100 50 100 C50 100 48 54 0 50 C48 50 50 0 50 0Z"
            fill="currentColor"
          />
        </svg>

        <h2 className="text-5xl lg:text-6xl font-black font-serif text-foreground tracking-tight mb-5">
          Explore Our <span className="text-primary">Shifting Service</span>
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Our local moving services are quick, efficient, and hassle-free. We
          handle everything from packing to unpacking, ensuring a stress-free
          transition.
        </p>
      </div>

      {/* Slider */}
      <div
        className="w-full overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-5 w-max"
          style={{ animation: "slide 38s linear infinite" }}
        >
          {doubled.map((service, i) => (
            <div key={`${service.id}-${i}`} className="shrink-0" style={{ width: `${CARD_WIDTH}px` }}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
