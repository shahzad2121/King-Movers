"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Plan Your Move",
    description:
      "Start by outlining your moving needs. We help you organize details and prepare for a smooth moving experience from the beginning.",
    offset: "mt-0",
    image: "/images/pad-pencil.jpg",
    imageAlt: "Planning your move with pad and pencil",
  },
  {
    number: "02",
    title: "Professional Packing",
    description:
      "Our team carefully packs and professionally stacks your items using quality materials to ensure safety during transport.",
    offset: "mt-16",
    image: "/images/stacked-boxes.jpg",
    imageAlt: "Professionally stacked moving boxes",
  },
  {
    number: "03",
    title: "Secure Transport",
    description:
      "We move your items in our well-maintained trucks. Local or long-distance, we ensure your belongings arrive safely on time.",
    offset: "mt-0",
    image: "/images/Truck-4.jpg",
    imageAlt: "Moving truck",
  },
  {
    number: "04",
    title: "Delivery & Unloading",
    description:
      "We deliver to your new location and unload your belongings with care. We also help reassemble beds and tables. Your move, our priority from start to finish.",
    offset: "mt-16",
    image: "/images/moving.jpg",
    imageAlt: "Moving crew unloading items",
  },
];

export default function WorkingProcessHome2() {
  const sectionRef = useRef(null);
  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tag = tagRef.current;
    const heading = headingRef.current;
    const stepEls = stepsRef.current.filter(Boolean);
    if (!heading) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(tag, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(heading, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.35")
      .fromTo(
        stepEls,
        { opacity: 0, y: -60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 px-6 md:px-16 overflow-hidden bg-linear-to-b from-surface to-background">
      {/* World map background */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png')",
        }}
      />
      {/* Subtle primary tint */}
      <div className="absolute inset-0 bg-primary/2 pointer-events-none" aria-hidden />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <p ref={tagRef} className="text-primary font-bold text-sm tracking-widest uppercase mb-3">
          Working Process
        </p>
        <h2 ref={headingRef} className="font-serif text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
          How We Make <br /> Your Move Easy
        </h2>
      </div>

      {/* Steps */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => { stepsRef.current[i] = el; }}
            className={`flex flex-col items-center text-center ${step.offset}`}
          >
            {/* Circle with dashed border + number badge */}
            <div className="relative mb-6">
              {/* Dashed outer ring — stronger primary */}
              <div
                className="w-36 h-36 rounded-full flex items-center justify-center border-2 border-dashed border-primary bg-primary/10 shadow-[0_0_0_1px_rgba(86,26,140,0.1)]"
              >
                {/* Inner circle — white with primary ring, icons in primary */}
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-md ring-2 ring-primary/20 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.imageAlt ?? step.title}
                    className="w-32 h-32 rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Number badge — accent for pop */}
              <div className="absolute -top-1 -right-1 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg ring-2 ring-white">
                <span className="text-foreground text-sm font-extrabold tracking-wide">
                  {step.number}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-serif text-lg font-extrabold text-foreground mb-3">{step.title}</h3>

            {/* Description */}
            <p className="text-foreground/75 text-sm leading-relaxed max-w-[180px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
