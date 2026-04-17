"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CITIES = [
  "Phoenix",
  "Scottsdale",
  "Tempe",
  "Mesa",
  "Chandler",
  "Gilbert",
  "Glendale",
  "Peoria",
  "Surprise",
  "Goodyear",
  "Avondale",
  "Buckeye",
  "Queen Creek",
  "San Tan Valley",
  "Casa Grande",
  "Maricopa",
];

export default function ServiceAreaSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(headerRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7 })
      .fromTo(listRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.65 }, "-=0.4")
      .fromTo(mapRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-surface w-full py-14 px-6 md:px-16">
      {/* Header */}
      <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
          Service Area
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
          Arizona Moves, <span className="text-primary">Done Right</span>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Headquartered in Scottsdale, we support the full Greater Phoenix area and deliver dependable statewide moving services for both local and long-distance relocations.
        </p>
      </div>

      {/* Two-column: city list + map */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Cities */}
        <div ref={listRef}>
          <h3 className="font-semibold text-foreground text-lg mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            Cities We Serve — And More
          </h3>

          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            We proudly serve customers throughout Arizona and beyond. While our main service area includes the cities listed below, we also provide <span className="font-medium text-foreground">statewide delivery  to all 50 states and can arrange out-of-state pickups upon request.</span>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CITIES.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 bg-background border border-foreground/8 rounded-md px-4 py-3 text-sm text-foreground font-medium hover:border-primary/40 hover:text-primary transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {city}
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm font-medium text-foreground">
            Long-distance move pickups available in       
            Tucson, Flagstaff, and Prescott
           
          </p>

          <p className="mt-5 text-sm text-muted-foreground">
            Not on the list?{" "}
            <a href="/contact-us" className="text-primary font-medium hover:underline">
              Contact us
            </a>{" "}
            — we&apos;ll let you know if we can reach you.
          </p>
        </div>

        {/* Map */}
        <div
          ref={mapRef}
          className="rounded-md overflow-hidden border border-foreground/8 shadow-sm"
          style={{ height: "400px" }}
        >
          <iframe
            title="King Moving Services Service Area — Greater Phoenix & Scottsdale"
            src="https://www.google.com/maps?q=Scottsdale,+AZ&output=embed&z=10"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}