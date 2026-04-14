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
      className="relative w-full overflow-hidden bg-linear-to-b from-[#1b102b] via-[#140b22] to-[#0b0715] py-16 px-6 md:px-16"
      aria-label="About King Moving Services professional movers and relocation company"
    >
      {/* Decorative bottom-right figure */}
      <div className="absolute bottom-0 right-2 pointer-events-none select-none hidden md:block" aria-hidden>
        <div className="relative w-[140px] h-[233px] md:w-[160px] md:h-[266px] lg:w-[180px] lg:h-[300px]">
          <Image
            src="/images/professional_pack.webp"
            alt=""
            fill
            className="object-contain object-bottom"
            sizes="180px"
            priority={false}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT: Stacked Images */}
        <div ref={imagesRef} className="relative w-full md:w-[45%] h-[480px] shrink-0">
          {/* Corner bracket top-left - primary */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-primary z-10" />

          {/* Top image */}
          <div className="absolute top-0 left-0 w-[82%] h-[55%] rounded-2xl overflow-hidden shadow-lg z-10">
            <div className="relative w-full h-full">
              <Image
                src="/images/0.jpg"
                alt="International and long-distance moving services with King Moving Services"
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
                src="/images/hero/home-3-people-highfigh.jpeg"
                alt="King Moving Services fleet and moving trucks for residential and commercial moves"
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
            className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold tracking-wide text-accent mb-4 uppercase"
          >
            Licensed Professional Movers
          </p>

          {/* Heading */}
          <h2 ref={headingRef} className="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Trusted Arizona Movers
          </h2>

          {/* Description — SEO-friendly about copy */}
          <div ref={descRef} className="text-white/80 text-base leading-relaxed max-w-xl space-y-5 mb-8">
            <p>
              As an experienced <strong className="font-semibold text-white/95">moving company</strong>, King Moving
              Services helps families and businesses with{" "}
              <strong className="font-semibold text-white/95">local moving</strong>,{" "}
              <strong className="font-semibold text-white/95">long-distance relocation</strong>, and{" "}
              <strong className="font-semibold text-white/95">office and commercial moving</strong> throughout Scottsdale
              and across Arizona. Our crews are trained and insured, with careful packing, loading, and delivery from
              the first box to the final walkthrough.
            </p>
            <p>
              Choose full-service packing and unpacking, dedicated moving crews, or a customized plan that fits your
              budget. We focus on transparent pricing, on-time delivery, and customer satisfaction for every interstate
              move and in-state relocation. Contact us for a <strong className="font-semibold text-white/95">free moving quote</strong> and see why customers trust King Moving Services for stress-free relocation.
            </p>
          </div>

          {/* Bottom Row: CTA + Team */}
          <div ref={ctaRef} className="flex items-center gap-8 flex-wrap">
            <a
              href="/about"
              className="inline-flex items-center bg-accent text-foreground font-bold px-10 py-4 text-base transition-colors duration-200 hover:bg-accent/90 rounded-lg"
              aria-label="Learn more about King Moving Services movers and moving company"
            >
              About Our Moving Company
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
                <p className="text-muted-foreground text-sm">Trusted Local Movers</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
