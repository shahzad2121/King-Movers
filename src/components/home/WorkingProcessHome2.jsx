"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Get Free Quote",
    description:
      "Request a free moving quote online or by phone. We assess your needs and provide a transparent, no-obligation estimate.",
    offset: "mt-0",
  },
  {
    number: "02",
    title: "Professional Packing",
    description:
      "Our team packs your belongings safely using quality materials. We handle fragile items with care and label everything clearly.",
    offset: "mt-16",
  },
  {
    number: "03",
    title: "Secure Transport",
    description:
      "We move your items in our well-maintained trucks. Local or long-distance, we ensure your belongings arrive safely on time.",
    offset: "mt-0",
  },
  {
    number: "04",
    title: "Delivery & Unpacking",
    description:
      "We deliver to your new location and can help with unpacking and reassembling. Your move, our priority from start to finish.",
    offset: "mt-16",
  },
];

const iconClass = "w-10 h-10 text-primary shrink-0";

function QuoteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="1.5">
      <rect x="12" y="8" width="24" height="32" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 20h16M16 26h12M16 32h8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 8V6a1 1 0 011-1h4l4 3v0" />
    </svg>
  );
}

function PackingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l8-8h16l8 8v24H8V16z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h32M16 8v8M24 16v16M32 8v8" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 32h4l4-8h16l4 8h4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 32v4a2 2 0 002 2h2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M38 32v4a2 2 0 01-2 2h-2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 24V14a2 2 0 012-2h16a2 2 0 012 2v10" />
      <circle cx="16" cy="38" r="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="38" r="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M24 6L6 20v22h12V28h12v14h12V20L24 6z" />
    </svg>
  );
}

const STEP_ICONS = [QuoteIcon, PackingIcon, TruckIcon, DeliveryIcon];

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
                className="w-28 h-28 rounded-full flex items-center justify-center border-2 border-dashed border-primary bg-primary/10 shadow-[0_0_0_1px_rgba(86,26,140,0.1)]"
              >
                {/* Inner circle — white with primary ring, icons in primary */}
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md ring-2 ring-primary/20">
                  {(() => {
                    const Icon = STEP_ICONS[i];
                    return <Icon />;
                  })()}
                </div>
              </div>

              {/* Number badge — accent for pop */}
              <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-accent flex items-center justify-center shadow-lg ring-2 ring-white">
                <span className="text-foreground text-xs font-extrabold tracking-wide">
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
