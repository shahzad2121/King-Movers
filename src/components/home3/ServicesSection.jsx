"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Long Distance",
    slug: "long-distance-moving",
    image: "/images/service-4.jpg",
    imageAlt: "Long distance moving",
    description:
      "Reliable long-distance moves across the country and beyond. We handle interstate and cross-country relocations with care and professionalism.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 5 7 5 13a7 7 0 0 0 14 0c0-6-7-11-7-11z" />
        <path d="M12 8v5" />
        <path d="M9 11l3 3 3-3" />
      </svg>
    ),
  },
  {
    title: "Local Moving",
    slug: "local-move",
    image: "/images/service-1.jpg",
    imageAlt: "Local moving services",
    description:
      "Stress-free local moves in your community and the surrounding area. Same-day and scheduled moves for homes and apartments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Commercial Moves",
    slug: "commercial-move",
    image: "/images/service.jpg",
    imageAlt: "Commercial and office moving",
    description:
      "Office and corporate relocations with minimal downtime. We coordinate with your team for a smooth transition.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const rightStripesRef = useRef(null);
  const leftStripesRef = useRef(null);
  const dotPatternRef = useRef(null);
  const headerIconRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!section || cards.length === 0) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const rightStripes = rightStripesRef.current;
      const leftStripes = leftStripesRef.current;
      const dots = dotPatternRef.current;

      gsap.set([headerIconRef.current, titleRef.current], { opacity: 0, y: 22 });
      gsap.set(cards, { opacity: 0, y: 48, scale: 0.92, rotateX: 8, transformPerspective: 900, filter: "blur(8px)" });
      gsap.set([rightStripes, leftStripes], { opacity: 0, x: 0 });
      gsap.set(dots, { opacity: 0 });
      const imageWraps = cards
        .map((c) => c.querySelector("[data-service-image-wrap]"))
        .filter(Boolean);
      gsap.set(imageWraps, { y: 0 });

      if (reduceMotion) {
        gsap.set([headerIconRef.current, titleRef.current, cards, rightStripes, leftStripes, dots], {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          rotateX: 0,
          filter: "none",
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power4.out" },
      });

      // Background accents slide in first
      tl.to(dots, { opacity: 0.055, duration: 1.4, ease: "power2.out" }, 0)
        .to(rightStripes, { opacity: 1, x: -30, duration: 1.6, ease: "power2.out" }, 0.05)
        .to(leftStripes, { opacity: 1, x: 30, duration: 1.6, ease: "power2.out" }, 0.05)
        .to(headerIconRef.current, { opacity: 1, y: 0, duration: 0.95 }, 0.25)
        .to(titleRef.current, { opacity: 1, y: 0, duration: 1.15 }, 0.35)
        .to(cards, { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)", duration: 1.25, stagger: 0.16 }, 0.55);

      // Scroll parallax for each service image (hero-like drift on scroll up/down)
      imageWraps.forEach((wrap, idx) => {
        gsap.fromTo(
          wrap,
          { y: -12 - idx * 2 },
          {
            y: 14 + idx * 2,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      });

      // Long, smooth “alive” motion
      gsap.to([rightStripes, leftStripes], {
        x: (i) => (i === 0 ? -16 : 16),
        duration: 3.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.6,
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 px-4 sm:px-6 md:px-12 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(86,26,140,0.38) 0%, rgba(15,15,20,0) 68%), radial-gradient(ellipse 55% 55% at 15% 75%, rgba(86,26,140,0.22) 0%, rgba(15,15,20,0) 65%), linear-gradient(180deg, rgb(29,18,44) 0%, rgb(18,12,28) 55%, rgb(12,12,18) 100%)",
      }}
    >
      {/* Subtle dot pattern to match theme (keeps section dark but not flat) */}
      <div
        ref={dotPatternRef}
        className="absolute inset-0 opacity-[0.055] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(254,195,77,0.42) 1px, transparent 0), radial-gradient(circle at 1px 1px, rgba(255,255,255,0.10) 1px, transparent 0)",
          backgroundSize: "30px 30px, 46px 46px",
        }}
        aria-hidden
      />

      {/* Diagonal accent stripes — theme primary */}
      <div
        ref={rightStripesRef}
        className="absolute top-0 right-0 w-[220px] h-full pointer-events-none z-0"
        style={{
          background: `repeating-linear-gradient(-55deg, transparent, transparent 10px, rgba(86,26,140,0.18) 10px, rgba(86,26,140,0.18) 12px)`,
        }}
        aria-hidden
      />
      <div
        ref={leftStripesRef}
        className="absolute top-0 left-0 w-[220px] h-full pointer-events-none z-0"
        style={{
          background: `repeating-linear-gradient(55deg, transparent, transparent 10px, rgba(86,26,140,0.14) 10px, rgba(86,26,140,0.14) 12px)`,
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <svg ref={headerIconRef} className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          {/* <span className="text-primary font-semibold text-sm tracking-[0.12em] uppercase">
            How We Can Help
          </span> */}
        </div>

        <h2 ref={titleRef} className="font-serif text-4xl md:text-5xl font-extrabold text-white text-center leading-tight mb-14 tracking-tight">
          King Movers <span className="text-primary bg-amber-300 p-2 rounded-sm">Moving Services</span>
        </h2>

        {/* Cards grid — each card links to service detail page */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <Link
              key={i}
              href={`/services/${service.slug}`}
              className="block no-underline"
            >
              <div
                ref={(el) => (cardRefs.current[i] = el)}
                className="group relative bg-[#151022] border border-white/8 rounded-[18px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] hover:shadow-primary/25"
              >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                {/* wrapper is animated on scroll so hover-scale on img still works */}
                <div data-service-image-wrap className="absolute inset-0 will-change-transform">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                  />
                </div>
                {/* Gradient overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, transparent, #151022)",
                  }}
                />
              </div>

              {/* Body */}
              <div className="relative px-6 pb-7">
                {/* Icon badge */}
                <div className="flex items-center justify-center w-14 h-14 -mt-7 mb-4 rounded-[14px] border border-primary/40 bg-[#151022]/85 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary/18 group-hover:border-primary/70 text-primary [&_svg]:w-[26px] [&_svg]:h-[26px]">
                  {service.icon}
                </div>

                <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wide mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/65">
                  {service.description}
                </p>
              </div>

              {/* Accent bar on hover */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary rounded-b-[18px] transition-all duration-400 ease-out group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
