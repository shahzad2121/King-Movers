"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PageHeroSection({
  badge = "What We Offer",
  title,
  highlight,
  description,
  bgImage,
  ctaText = "Get Started",
  ctaLink = "#",
}) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      gsap.set(contentRef.current?.children || [], { opacity: 0, y: 24 });
      gsap.set(bgRef.current, { scale: 1.12, transformOrigin: "center center" });

      if (!reduceMotion) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(bgRef.current, { scale: 1, duration: 1.8 }, 0).to(
          contentRef.current?.children || [],
          { opacity: 1, y: 0, duration: 1, stagger: 0.12 },
          0.4
        );

        gsap.to(bgRef.current, {
          y: 24,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      } else {
        gsap.set(bgRef.current, { scale: 1, y: 0 });
        gsap.set(contentRef.current?.children || [], { opacity: 1, y: 0 });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center text-white px-6 max-w-3xl"
      >
        {badge && (
          <p className="font-hero-body text-sm md:text-base uppercase tracking-[0.2em] text-white/80 mb-4 font-medium">
            {badge}
          </p>
        )}

        <h1 className="font-hero-heading text-4xl md:text-6xl font-semibold leading-tight mb-6 tracking-[-0.03em]">
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-primary bg-amber-300 p-2 border rounded-2xl">
                {highlight}
              </span>
            </>
          )}
        </h1>

        {description && (
          <p className="font-hero-body text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {ctaText && (
          <a
            href={ctaLink}
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}