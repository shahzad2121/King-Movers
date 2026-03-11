"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HERO_BADGES = [
  { src: "/images/angi-kings-moving.png", alt: "Angi Certified" },
  { src: "/images/boha-2021-solid-border.png", alt: "Boha 2021" },
  { src: "/images/toprated-solid-border.png", alt: "Top Rated" },
];

export default function HeroSection() {
  const sectionRef = useRef(null);
  const leftBgRef = useRef(null);
  const leftOverlayRef = useRef(null);
  const rightPanelRef = useRef(null);
  const rightOverlayRef = useRef(null);
  const contentWrapRef = useRef(null);
  const serviceTypesRef = useRef(null);
  const headingBlockRef = useRef(null);
  const headingLine1Ref = useRef(null);
  const headingLine2Ref = useRef(null);
  const ctaRef = useRef(null);
  const badgesWrapRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([serviceTypesRef.current, ctaRef.current], { opacity: 0, y: 18 });
      gsap.set([headingLine1Ref.current, headingLine2Ref.current], { opacity: 0, y: 26 });
      gsap.set(headingBlockRef.current, { opacity: 1, clipPath: "inset(0 100% 0 0)", willChange: "clip-path" });
      gsap.set(badgesWrapRef.current?.children || [], { opacity: 0, y: 20, rotate: -2 });
      gsap.set(contentWrapRef.current, { opacity: 1 });
      gsap.set(leftBgRef.current, { scale: 1.14, transformOrigin: "center" });
      gsap.set(rightPanelRef.current, { opacity: 0, filter: "blur(6px)" });
      gsap.set(leftOverlayRef.current, { opacity: 0.9 });
      gsap.set(rightOverlayRef.current, { opacity: 0.65 });

      if (!reduceMotion) {
        // Cinematic entrance
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.to(leftBgRef.current, { scale: 1, duration: 2.1, ease: "power3.out" }, 0)
          .to(leftOverlayRef.current, { opacity: 0.72, duration: 1.6 }, 0.05)
          .to(rightPanelRef.current, { opacity: 1, filter: "blur(0px)", duration: 1.7 }, 0.2)
          .to(rightOverlayRef.current, { opacity: 0.5, duration: 1.6 }, 0.25)
          .to(headingBlockRef.current, { clipPath: "inset(0 0% 0 0)", duration: 1.35 }, 0.35)
          .to(serviceTypesRef.current, { opacity: 1, y: 0, duration: 1.05 }, 0.55)
          .to(headingLine1Ref.current, { opacity: 1, y: 0, duration: 1.25 }, 0.65)
          .to(headingLine2Ref.current, { opacity: 1, y: 0, duration: 1.25 }, 0.78)
          .to(ctaRef.current, { opacity: 1, y: 0, duration: 1.05 }, 1.05)
          .to(badgesWrapRef.current?.children || [], { opacity: 1, y: 0, rotate: 0, duration: 1.0, stagger: 0.14 }, 1.15);

        // Subtle scroll parallax (WordPress-like smoothness)
        gsap.to(leftBgRef.current, {
          y: 28,
          scale: 1.03,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(rightPanelRef.current, {
          y: 18,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        // Slight drift for the right background image (keeps your final values)
        gsap.fromTo(
          rightPanelRef.current,
          { backgroundPosition: "780px -250px" },
          {
            backgroundPosition: "730px -300px",
            ease: "power2.out",
            duration: 2.0,
            delay: 0.25,
          }
        );
      } else {
        // Reduced motion: show content immediately (no dramatic animation)
        gsap.set(
          [
            serviceTypesRef.current,
            headingLine1Ref.current,
            headingLine2Ref.current,
            ctaRef.current,
            badgesWrapRef.current?.children || [],
            rightPanelRef.current,
          ],
          { opacity: 1, y: 0, rotate: 0, filter: "none" }
        );
        gsap.set(headingBlockRef.current, { clipPath: "inset(0 0% 0 0)" });
        gsap.set(leftBgRef.current, { scale: 1, y: 0 });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[520px] overflow-hidden flex">

      {/* LEFT: Full background — dark moving imagery (larger area) */}
      <div
        ref={leftBgRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url('/images/hero/home-3-people-highfigh.jpeg')",
          backgroundSize: "80%", // zoom in
backgroundPosition: "0% 20%"
        }}
      />
      <div ref={leftOverlayRef} className="absolute inset-0 bg-black/70" />

      {/* RIGHT: Image — background gives full control over zoom & position */}
      <div
        // ref={rightPanelRef}
        className="absolute top-0 right-0 h-full pointer-events-none"
        style={{
          width: "100%",
          clipPath: "polygon(65% 0%, 100% 0%, 100% 100%, 70% 100%)",
          backgroundImage: "url('/images/hero/hero-moving-truck.jpg')",
          // backgroundImage: "url('/images/hero/moving-truck.jpg')",
          backgroundSize: "52%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "134% 2%",
          // backgroundPosition: "110% 2%",
        }}
      >
        <div ref={rightOverlayRef} className="absolute inset-0 bg-[#000000]/50" aria-hidden />
      </div>

     

      {/* LEFT CONTENT — larger area */}
      <div ref={contentWrapRef} className="relative z-10 flex flex-col justify-between px-10 md:px-20 h-full py-12 md:py-16">
        {/* Top: service types + heading + CTA */}
        <div className="max-w-2xl">
          <p ref={serviceTypesRef} className="font-hero-body text-white/80 text-xs md:text-sm uppercase tracking-[0.2em] mb-6 font-medium">
            Local &nbsp;|&nbsp; Long Distance &nbsp;|&nbsp; Commercial
          </p>

          <div ref={headingBlockRef} className="border-l-4 border-primary bg-primary/10 pl-6 py-5 pr-8 mb-8 w-fit">
            <h1
              ref={headingLine1Ref}
              className="font-hero-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Your Move,
            </h1>
            <h1
              ref={headingLine2Ref}
              className="font-hero-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="inline-block bg-accent text-primary px-3 md:px-3.5 py-0.5 md:py-1.5 rounded-sm">
                Our Priority.
              </span>
            </h1>
          </div>

          <button ref={ctaRef} className="font-hero-body bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-8 py-3.5 transition-colors duration-200 w-fit rounded-sm">
            Get a Free Quote
          </button>
        </div>

        {/* Bottom-left: badges — below button, at left edge near divider */}
        <div ref={badgesWrapRef} className="flex flex-wrap gap-3 items-center mt-8">
          {HERO_BADGES.map((badge) => (
            <div key={badge.alt} className="relative w-28 h-20 md:w-32 md:h-22 shrink-0">
              <Image
                src={badge.src}
                alt={badge.alt}
                fill
                className="object-contain object-left"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
