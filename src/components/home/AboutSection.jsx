"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const imagesRef = useRef(null);
  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const images = imagesRef.current;
    const tag = tagRef.current;
    const heading = headingRef.current;
    const desc = descRef.current;
    const cta = ctaRef.current;
    if (!images || !heading) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(images, { opacity: 0, x: -32 }, { opacity: 1, x: 0, duration: 0.7 });
    if (tag) tl.fromTo(tag, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.4");
    tl.fromTo(heading, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.35");
    if (desc) tl.fromTo(desc, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
    if (cta) tl.fromTo(cta, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35");

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-linear-to-b from-[#1b102b] via-[#140b22] to-[#0b0715] py-16 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT: Stacked Images */}
        <div ref={imagesRef} className="relative w-full md:w-[45%] h-[480px] shrink-0">
          {/* Corner bracket top-left - primary */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-primary z-10" />

          {/* Top image */}
          <div className="absolute top-0 left-0 w-[82%] h-[55%] rounded-2xl overflow-hidden shadow-lg z-10">
            <div className="relative w-full h-full">
              <Image
                src="/images/service-6.jpg"
                alt="International moving and logistics"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* Bottom image */}
          <div className="absolute bottom-0 right-0 w-[75%] h-[58%] rounded-2xl overflow-hidden shadow-lg z-20">
            <div className="relative w-full h-full">
              <Image
                src="/images/service-5.jpg"
                alt="Moving truck and fleet"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* Corner bracket bottom-right - primary */}
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-primary z-30" />
        </div>

        {/* RIGHT: Content */}
        <div className="w-full md:w-[55%]">
          {/* Tag */}
          <p
            ref={tagRef}
            className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold tracking-wide text-accent mb-4"
          >
            About King Moving
          </p>

          {/* Heading */}
          <h2 ref={headingRef} className="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Trusted Moving &amp; <br />
            Logistics for{" "}
            <span className="inline-block rounded-sm bg-accent px-2.5 py-0.5 text-primary">
              Your Move
            </span>
          </h2>

          {/* Description — traditional about copy */}
          <div ref={descRef} className="text-white/80 text-base leading-relaxed max-w-xl space-y-5 mb-8">
            <p>
              King Moving Services has been helping families and businesses move with confidence for years. We handle everything from local apartment moves to full-house relocations, office moves, and long-distance and international moves. Our team is trained, insured, and focused on treating your belongings with care from the first box to the final walkthrough.
            </p>
            <p>
              Whether you need packing help, a dedicated crew, or a full-service move, we work with you to plan every detail and stick to transparent pricing. We are proud to be a trusted name for residential and commercial moving. Get in touch for a free estimate and see why so many choose King Moving.
            </p>
          </div>

          {/* Bottom Row: CTA + Team */}
          <div ref={ctaRef} className="flex items-center gap-8 flex-wrap">
            <a
              href="/about"
              className="inline-flex items-center bg-accent text-foreground font-bold px-10 py-4 text-base transition-colors duration-200 hover:bg-accent/90 rounded-lg"
            >
              About Us
            </a>

            {/* Team / Leadership */}
            {/* <div className="flex items-center gap-4">
              <Image
                src="/images/Danny-4-497x1024.jpg"
                alt="King Moving team"
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-foreground text-base">Our Team</p>
                <p className="text-muted-foreground text-sm">Trusted Seattle Movers</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
