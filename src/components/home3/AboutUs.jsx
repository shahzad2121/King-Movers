"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const checkItems = [
  { text: "Safety and security is our priority." },
  { text: "Our team is professional and fully trained." },
  { text: "⭐ Rated 5.0/5 based on 1,404 reviews" },
];

export default function AboutUs() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const portraitRef = useRef(null);
  const badgeRef = useRef(null);
  const landscapeRef = useRef(null);
  const pillRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const listRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const portrait = portraitRef.current;
      const badge = badgeRef.current;
      const landscape = landscapeRef.current;
      const pill = pillRef.current;
      const heading = headingRef.current;
      const desc = descRef.current;
      const listItems = listRef.current ? Array.from(listRef.current.children) : [];
      const cta = ctaRef.current;

      gsap.set(left, { opacity: 1 });
      gsap.set(right, { opacity: 1 });

      gsap.set(portrait, { opacity: 0, x: -40, y: 18, rotate: -1.5, scale: 0.98, filter: "blur(6px)" });
      gsap.set(landscape, { opacity: 0, x: 44, y: 30, rotate: 1.5, scale: 0.98, filter: "blur(6px)" });
      gsap.set(badge, { opacity: 0, scale: 0.7, rotate: -18, y: -12, transformOrigin: "50% 50%" });

      gsap.set(pill, { opacity: 0, y: 20 });
      gsap.set(heading, { opacity: 0, y: 28 });
      gsap.set(desc, { opacity: 0, y: 20 });
      gsap.set(listItems, { opacity: 0, x: -18 });
      gsap.set(cta, { opacity: 0, y: 18, scale: 0.98 });

      if (reduceMotion) {
        gsap.set(
          [portrait, landscape, badge, pill, heading, desc, listItems, cta],
          { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: "none" }
        );
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

      // Dramatic collage build + content reveal
      tl.to(portrait, { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: "blur(0px)", duration: 1.55 }, 0)
        .to(badge, { opacity: 1, scale: 1, rotate: 0, y: 0, duration: 1.2, ease: "back.out(1.4)" }, 0.35)
        .to(landscape, { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: "blur(0px)", duration: 1.55 }, 0.45)
        .to(pill, { opacity: 1, y: 0, duration: 0.95 }, 0.4)
        .to(heading, { opacity: 1, y: 0, duration: 1.25 }, 0.55)
        .to(desc, { opacity: 1, y: 0, duration: 1.05 }, 0.8)
        .to(listItems, { opacity: 1, x: 0, duration: 0.95, stagger: 0.12 }, 1.05)
        .to(cta, { opacity: 1, y: 0, scale: 1, duration: 1.05 }, 1.25);

      // Soft parallax on the collage while scrolling
      gsap.to(portrait, {
        y: 16,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1.1 },
      });
      gsap.to(landscape, {
        y: -12,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1.1 },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes aboutSpinSlow { to { transform: rotate(360deg); } }
        .about-spin-slow { animation: aboutSpinSlow 14s linear infinite; }
      `}</style>

      <section ref={sectionRef} className="w-full bg-background py-20 px-4 sm:px-6 md:px-12">
        {/* wider, more \"WordPress-like\" (less tight max width) */}
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT: Image Collage */}
          <div ref={leftRef} className="relative h-[560px]">
            {/* Main portrait */}
            <div
              ref={portraitRef}
              className="absolute top-0 left-0 rounded-2xl overflow-hidden z-10"
              style={{ width: "58%", height: "90%", background: "var(--primary)" }}
            >
              <Image
                src="/images/crate-Kingsmovingservices.jpg"
                alt="King Moving Services team"
                fill
                className="object-cover object-top opacity-95"
                sizes="(max-width: 1024px) 70vw, 520px"
              />
              <div className="absolute inset-0 bg-primary/15" aria-hidden />
            </div>

            {/* Rotating badge */}
            <div
              ref={badgeRef}
              className="absolute z-40"
              style={{ top: "-10px", left: "50%", transform: "translateX(-50%)", width: 132, height: 132 }}
            >
              <div className="w-[132px] h-[132px] rounded-full border-2 border-dashed border-foreground/25 bg-white flex items-center justify-center relative shadow-lg">
                {/* Inner accent circle with truck icon */}
                <div className="w-[78px] h-[78px] rounded-full bg-accent flex items-center justify-center z-10 relative">
                  <svg viewBox="0 0 48 36" fill="none" className="w-10 h-10">
                    <rect x="1" y="8" width="30" height="20" rx="2" fill="var(--primary)"/>
                    <path d="M31 14h8l5 7v7H31V14z" fill="var(--primary)"/>
                    <circle cx="10" cy="30" r="4" fill="#fff" stroke="var(--primary)" strokeWidth="2"/>
                    <circle cx="37" cy="30" r="4" fill="#fff" stroke="var(--primary)" strokeWidth="2"/>
                    <rect x="5" y="12" width="20" height="10" rx="1" fill="#fff" opacity="0.25"/>
                  </svg>
                </div>

                {/* Spinning text ring */}
                <svg viewBox="0 0 132 132" className="absolute top-0 left-0 w-[132px] h-[132px] about-spin-slow">
                  <defs>
                    <path id="aboutCirclePath" d="M66,66 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"/>
                  </defs>
                  <text
                    fill="rgba(17,17,17,0.75)"
                    fontSize="11"
                    fontFamily="var(--font-body), system-ui, sans-serif"
                    fontWeight="700"
                    letterSpacing="2.8"
                  >
                    <textPath href="#aboutCirclePath">
                      7 Years Experience · 2019–2026 · 7 Years Experience ·
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* Secondary landscape photo */}
            <div
              ref={landscapeRef}
              className="absolute bottom-0 right-0 z-20 rounded-2xl overflow-hidden border-[5px] border-white shadow-2xl"
              style={{ width: "66%", height: "70%" }}
            >
              <Image
                src="/images/1-2.png"
                alt="Moving and packing services"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                sizes="(max-width: 1024px) 90vw, 720px"
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div ref={rightRef} className="flex flex-col">
            {/* Accent pill */}
            <span ref={pillRef} className="inline-block self-start bg-accent text-foreground text-[13px] font-bold tracking-wide px-5 py-[7px] rounded-full mb-5">
              About Us
            </span>

            {/* Heading (bigger + more stretched) */}
            <h2 ref={headingRef} className="font-hero-heading text-[clamp(30px,3.9vw,52px)] font-semibold leading-[1.12] text-foreground mb-5">
              A trusted moving team for
              <span className="text-primary"> homes</span> and
              <span className="text-primary"> businesses</span>
            </h2>

            {/* Description */}
            <p ref={descRef} className="font-hero-body text-[15px] leading-[1.85] text-foreground/75 mb-7 max-w-2xl">
              Since 2019, King Moving Services has helped people move with confidence. From local relocations to long-distance moves, our crew handles packing, loading, transport, and setup with care—so your move feels organized, safe, and stress-free.
            </p>

            {/* Checklist */}
            <ul ref={listRef} className="flex flex-col gap-[14px] mb-9">
              {checkItems.map((item, i) => (
                <li key={i} className="font-hero-body flex items-center gap-3 text-[15px] font-semibold text-foreground">
                  <span className="w-[26px] h-[26px] rounded-full bg-accent flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill="none" stroke="#111" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>

            {/* Read More button */}
            <div>
              <Link
                ref={ctaRef}
                href="/about"
                className="group inline-flex items-center border-2 border-foreground rounded-full pl-7 pr-[14px] py-3 text-[15px] font-bold text-foreground transition-colors duration-200 hover:bg-foreground hover:text-white"
              >
                Read More
                <span className="ml-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:-rotate-45">
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="#111" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
