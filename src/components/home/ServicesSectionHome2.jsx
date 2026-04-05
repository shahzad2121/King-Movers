"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "Local Moving",
    image: "/images/service-1.jpg",
    imageAlt: "Local moving services",
    description:
      "Stress-free local moves in your community and surrounding area. Same-day and scheduled moves for homes and apartments — no hidden fees, ever.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 5 7 5 13a7 7 0 0 0 14 0c0-6-7-11-7-11z" />
        <path d="M12 8v5" />
        <path d="M9 11l3 3 3-3" />
      </svg>
    ),
    title: "Long-Distance Moving",
    image: "/images/service-4.jpg",
    imageAlt: "Long distance moving",
    description:
      "Reliable interstate and cross-country relocations handled with care. Transparent pricing from quote to delivery — we keep you informed every mile.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Commercial Moves",
    image: "/images/service.jpg",
    imageAlt: "Commercial and office moving",
    description:
      "Office and corporate relocations with minimal downtime. We work around your schedule to ensure a smooth transition with zero disruption to your business.",
  },
];

export default function MovingServices() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 0.7 }
    ).fromTo(
      cardRefs.current.filter(Boolean),
      { opacity: 0, scale: 1.2 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.65,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-background w-full py-14 px-6 md:px-16">
      {/* Header */}
      <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
          Everything You Need <span className="text-primary">for a Smooth Move</span>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          From local apartment moves to cross-country relocations — we handle every detail so you don&apos;t have to.
        </p>
      </div>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} ref={(el) => (cardRefs.current[i] = el)} className="flex flex-col">
            {/* Title row with icon */}
            <div className="flex items-center gap-3 mb-4">
              <span>{service.icon}</span>
              <h3 className="font-serif text-2xl font-bold text-foreground">{service.title}</h3>
            </div>

            {/* Image */}
            <div className="w-full hover:scale-105 transition-transform duration-300 rounded-md overflow-hidden mb-5" style={{ height: "220px" }}>
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
              {service.description}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-5">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold text-sm px-6 py-3 rounded transition-colors duration-200">
                View Service
              </button>
              <a
                href="#"
                className="text-primary font-semibold text-sm hover:underline flex items-center gap-1"
              >
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}