"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COUNTER_ACCENT = "var(--accent)";

const counters = [
  {
    start: 5,
    end: 8,
    suffix: "",
    title: "Years of Experience",
    sub: "Trusted moving experience",
  },
  {
    start: 50,
    end: 100,
    suffix: "'s",
    title: "Moves Completed",
    sub: "Homes & businesses",
  },
  {
    start: 85,
    end: 90,
    suffix: "%+",
    title: "Happy Clients",
    sub: "We deliver on our promise",
  },
];

function TruckPatternSvg() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden>
      <defs>
        {/* Simple truck outline */}
        <pattern id="truck-pattern" x="0" y="0" width="80" height="55" patternUnits="userSpaceOnUse">
          <path
            d="M5 40 L5 25 L30 25 L30 18 L50 18 L50 25 L65 25 L65 40 Z M15 40 m-4 0 a4 4 0 1 1 8 0 a4 4 0 1 1 -8 0 M55 40 m-4 0 a4 4 0 1 1 8 0 a4 4 0 1 1 -8 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
        {/* Boxes */}
        <pattern id="box-pattern" x="40" y="27" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect x="2" y="2" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <rect x="18" y="6" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <rect x="6" y="18" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="0.7" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#truck-pattern)" />
      <rect width="100%" height="100%" fill="url(#box-pattern)" />
    </svg>
  );
}

export default function CounterSection() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);
  const patternRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.25, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    const cards = cardRefs.current.filter(Boolean);
    const pattern = patternRef.current;
    if (!section || !grid || cards.length === 0) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      gsap.set(cards, { opacity: 0, y: 44, scale: 0.92, filter: "blur(6px)" });
      gsap.set(grid, { opacity: 1 });
      gsap.set(pattern, { opacity: 0, scale: 1.06, transformOrigin: "center" });

      if (reduceMotion) {
        gsap.set(cards, { opacity: 1, y: 0, scale: 1, filter: "none" });
        gsap.set(pattern, { opacity: 0.065, scale: 1 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power4.out" },
      });

      tl.to(pattern, { opacity: 0.065, scale: 1, duration: 1.6, ease: "power2.out" }, 0)
        .to(cards, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.25, stagger: 0.14 }, 0.15);

      // Soft floating motion for the glow/pattern
      gsap.to(grid, {
        y: -10,
        duration: 3.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.2,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(86,26,140,0.42) 0%, rgba(15,15,20,0.0) 68%), radial-gradient(ellipse 55% 55% at 80% 70%, rgba(86,26,140,0.18) 0%, rgba(15,15,20,0.0) 65%), linear-gradient(180deg, rgb(29,18,44) 0%, rgb(18,12,28) 55%, rgb(12,12,18) 100%)",
      }}
    >
      {/* SVG pattern background — trucks & boxes */}
      <div className="absolute inset-0 text-primary">
        <TruckPatternSvg />
      </div>

      {/* Accent dot pattern (very subtle) */}
      <div
        ref={patternRef}
        className="absolute inset-0 opacity-[0.065] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(254,195,77,0.50) 1px, transparent 0), radial-gradient(circle at 1px 1px, rgba(255,255,255,0.10) 1px, transparent 0)",
          backgroundSize: "26px 26px, 44px 44px",
        }}
        aria-hidden
      />

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 60%, rgba(86,26,140,0.18) 0%, transparent 70%), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "auto, 56px 56px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-0">
          {counters.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="flex flex-col items-center text-center"
            >
              {/* Big number — orange accent, very large */}
              <p
                className="font-serif font-extrabold leading-none mb-2"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  color: COUNTER_ACCENT,
                  textShadow: "0 0 30px rgba(254,195,77,0.22)",
                }}
              >
                {isInView ? (
                  <CountUp
                    start={item.start}
                    end={item.end}
                    suffix={item.suffix}
                    duration={4.8}
                    separator=","
                  />
                ) : (
                  <span style={{ opacity: 0.6 }}>{item.start}{item.suffix}</span>
                )}
              </p>
              <h3 className="font-serif font-bold text-white text-lg md:text-xl mb-1">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
