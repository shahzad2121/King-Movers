"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

const counters = [
  {
    start: 5,
    end: 8,
    suffix: "",
    title: "Years of Experience",
    sub: "Trusted moving experience",
    Icon: ClockIcon,
  },
  {
    start: 8,
    end: 10,
    suffix: "K+",
    title: "Moves Completed",
    sub: "Homes & businesses",
    Icon: TruckIcon,
  },
  {
    start: 3,
    end: 5,
    suffix: "K+",
    title: "Happy Clients",
    sub: "Trusted by families",
    Icon: PeopleIcon,
  },
  {
    start: 95,
    end: 98,
    suffix: "%",
    title: "Satisfaction Rate",
    sub: "We deliver on our promise",
    Icon: AwardIcon,
  },
];

function ClockIcon() {
  return (
    <svg className="w-10 h-10 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function TruckIcon() {
  return (
    <svg className="w-10 h-10 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}
function PeopleIcon() {
  return (
    <svg className="w-10 h-10 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function AwardIcon() {
  return (
    <svg className="w-10 h-10 text-accent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export default function CounterSection() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRefs = useRef([]);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const headline = headlineRef.current;
    const subtitle = subtitleRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!headline || !subtitle || cards.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      headline,
      { opacity: 0, y: 48 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
    )
      .fromTo(
        subtitle,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.4"
      );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === sectionRef.current) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[580px] md:min-h-[640px] flex flex-col justify-center overflow-hidden"
    >
      {/* Parallax background — unchanged */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero/moving-boxes.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-foreground/75" aria-hidden />

      {/* Content — centered, premium layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24">
        {/* Headline */}
        <div className="text-center mb-6 md:mb-8">
          <h2
            ref={headlineRef}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
          >
          Move With <span className="text-accent bg-primary px-3 py-1 rounded-md">Confidence</span>
            
          </h2>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-center text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-14 md:mb-16"
        >
          Our experienced team helps families and businesses move safely, efficiently, and with complete peace of mind.
        </p>

        {/* Counter cards — 4 columns, premium styling */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {counters.map((item, i) => (
            <div
              key={item.title}
              ref={(el) => (cardRefs.current[i] = el)}
              className="group relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6 md:p-8 flex flex-col items-center text-center overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-accent/50"
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute inset-0 bg-linear-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
              <div className="relative flex flex-col items-center">
                <div className="mb-4">
                  <item.Icon />
                </div>
                <p className="font-serif font-bold text-white text-3xl md:text-4xl leading-none mb-2">
                  {isInView ? (
                    <CountUp
                      start={item.start}
                      end={item.end}
                      suffix={item.suffix}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    <span className="opacity-60">{item.start}{item.suffix}</span>
                  )}
                </p>
                <p className="font-medium text-white text-sm md:text-base mb-1">{item.title}</p>
                <p className="text-accent/90 text-xs md:text-sm">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
