"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    label: "Packing",
    image: "/images/crate-Kingsmovingservices.jpg",
    imageAlt: "Professional packing",
  },
  {
    number: "02",
    label: "Moving",
    image: "/images/Truck-4.jpg",
    imageAlt: "Moving truck",
  },
  {
    number: "03",
    label: "Storage",
    image: "/images/bike-crates1.png",
    imageAlt: "Secure storage",
  },
  {
    number: "04",
    label: "Reassembling",
    image: "/images/moving.jpg",
    imageAlt: "Reassembling at new home",
  },
];

const workerCards = [
  {
    title: "On-Site Crew",
    image: "/images/0.jpg",
    alt: "Workers carefully loading items into the truck",
    description: "Real King Movers crew on-site, protecting your furniture and belongings before every move.",
  },
  {
    title: "Packing Professionals",
    image: "/images/David-CJ-3.jpg",
    alt: "Team member wrapping and securing boxes",
    description: "From fragile items to full households, our trained packers label and wrap everything with care.",
  },
  {
    title: "Handled With Care",
    image: "/images/moving.jpg",
    alt: "Team moving packed boxes through a home",
    description: "Your boxes, furniture, and special items are treated as if they were our own—start to finish.",
  },
];

export default function WorkProcess() {
  const sectionRef = useRef(null);
  const stepsWrapRef = useRef(null);
  const pathRef = useRef(null);
  const stepRefs = useRef([]);
  const workersRef = useRef(null);
  const workersTitleRef = useRef(null);
  const workersSubRef = useRef(null);
  const workerCardRefs = useRef([]);

  const buildPath = () => {
    const wrap = stepsWrapRef.current;
    const path = pathRef.current;
    const stepEls = stepRefs.current.filter(Boolean);
    if (!wrap || !path || stepEls.length < 2) return 0;

    const wrapRect = wrap.getBoundingClientRect();
    const points = [];

    stepEls.forEach((step) => {
      const circle = step.querySelector("[data-step-circle]");
      if (!circle) return;
      const r = circle.getBoundingClientRect();
      const cx = r.left - wrapRect.left + r.width / 2;
      const cy = r.top - wrapRect.top + r.height / 2;
      points.push({ x: cx, y: cy });
    });

    if (points.length < 2) return 0;

    const d = points.reduce((acc, pt, i) => {
      if (i === 0) return `M ${pt.x} ${pt.y}`;
      const prev = points[i - 1];
      const cpx = (prev.x + pt.x) / 2;
      return acc + ` C ${cpx} ${prev.y}, ${cpx} ${pt.y}, ${pt.x} ${pt.y}`;
    }, "");

    path.setAttribute("d", d);
    const len = path.getTotalLength();
    path.style.strokeDasharray = "10 8";
    path.style.strokeDashoffset = `${len}`;
    return len;
  };

  useEffect(() => {
    const section = sectionRef.current;
    const wrap = stepsWrapRef.current;
    if (!section || !wrap) return;

    const runAnimations = () => {
      buildPath();
      const path = pathRef.current;
      const stepEls = stepRefs.current.filter(Boolean);

      gsap.to(".work-process__pill", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.to(".work-process__title", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
      });
      gsap.to(".work-process__sub", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      // Four-step jerk / bounce effect from top → bottom
      gsap.fromTo(
        stepEls,
        { opacity: 0, y: -60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.2,
          delay: 0.55,
          ease: "back.out(1.7)",
        }
      );
      if (path) {
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2.2,
          delay: 0.7,
          ease: "power2.inOut",
        });
      }
    };

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top 72%",
      once: true,
      onEnter: () => {
        requestAnimationFrame(() => {
          setTimeout(runAnimations, 50);
        });
      },
    });

    const ro = new ResizeObserver(() => {
      buildPath();
    });
    ro.observe(wrap);

    return () => {
      st.kill();
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const workers = workersRef.current;
    if (!section || !workers) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const titleEl = workersTitleRef.current;
      const subEl = workersSubRef.current;
      const cards = workerCardRefs.current.filter(Boolean);
      const imageWraps = cards
        .map((card) => card.querySelector("[data-worker-img-wrap]"))
        .filter(Boolean);

      gsap.set(titleEl, { opacity: 0, y: 24 });
      gsap.set(subEl, { opacity: 0, y: 24 });
      gsap.set(cards, { opacity: 0, y: 40, scale: 0.94, rotateX: 6, transformPerspective: 900, filter: "blur(6px)" });
      gsap.set(imageWraps, { y: -14 });

      if (reduceMotion) {
        gsap.set([titleEl, subEl, cards, imageWraps], { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "none" });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: workers,
          start: "top 82%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power4.out" },
      });

      tl.to(titleEl, { opacity: 1, y: 0, duration: 1.0 }, 0)
        .to(subEl, { opacity: 1, y: 0, duration: 1.05 }, 0.15)
        .to(
          cards,
          { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.16 },
          0.35
        );

      imageWraps.forEach((wrap, idx) => {
        gsap.fromTo(
          wrap,
          { y: -16 - idx * 3 },
          {
            y: 18 + idx * 3,
            ease: "none",
            scrollTrigger: {
              trigger: workers,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-background py-20 md:py-28 overflow-hidden">
      {/* World map background – same asset as Home 2, slightly lighter */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png')",
        }}
        aria-hidden
      />
      {/* Subtle primary tint */}
      <div className="absolute inset-0 bg-primary/2 pointer-events-none" aria-hidden />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 text-center">
      {/* Eyebrow pill — theme primary */}
      <div
        className="work-process__pill inline-block bg-primary text-white text-sm font-bold tracking-wide py-2 px-6 rounded-full mb-5"
        style={{ opacity: 0, transform: "translateY(16px)" }}
      >
        Our Work Process
      </div>

      <h2
        className="work-process__title font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-2xl mx-auto mb-4"
        style={{ opacity: 0, transform: "translateY(16px)" }}
      >
        Our Moving and Storage Services In Process
      </h2>

      <p
        className="work-process__sub text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-16"
        style={{ opacity: 0, transform: "translateY(16px)" }}
      >
        King Moving Services takes place in 4 simple steps: packing, moving, storage, and reassembling your items at your new home.
      </p>

      {/* Steps with connecting path */}
      <div ref={stepsWrapRef} className="relative">
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible hidden md:block"
          aria-hidden
        >
          <path
            ref={pathRef}
            className="connect-path"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2.5"
            strokeDasharray="10 8"
            strokeLinecap="round"
          />
        </svg>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 items-end">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepRefs.current[i] = el)}
              className={`group flex flex-col items-center gap-5 cursor-default ${
                i % 2 === 0 ? "pb-14 md:pb-16" : "pt-14 md:pt-16"
              }`}
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div
                data-step-circle
                className="relative w-36 h-36 md:w-44 md:h-44 shrink-0 rounded-full overflow-visible"
              >
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute -bottom-1 -right-1 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center text-white text-base md:text-lg font-extrabold border-[3px] border-white shadow-[0_4px_14px_rgba(86,26,140,0.35)] transition-transform duration-300 group-hover:scale-110 z-10">
                  {step.number}
                </div>
              </div>
              <span className="font-bold text-foreground text-base md:text-lg">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Workers in action – 3 cards */}
      <div ref={workersRef} className="mt-20 md:mt-24">
        <div className="text-center mb-10">
          <h3
            ref={workersTitleRef}
            className="font-serif text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight"
          >
            Our Crew In Action
          </h3>
          <p
            ref={workersSubRef}
            className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto mt-3"
          >
            Real photos from King Moving jobs in the field—packing, loading, and moving your belongings safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {workerCards.map((card, i) => (
            <div
              key={card.title}
              ref={(el) => {
                workerCardRefs.current[i] = el;
              }}
              className="group relative rounded-3xl overflow-hidden bg-foreground/95 border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:-translate-y-2"
            >
              {/* Full-bleed portrait with overlayed content */}
              <div className="relative h-[360px] md:h-[420px] overflow-hidden">
                <div data-worker-img-wrap className="absolute inset-0 will-change-transform">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                {/* layered gradients so text is readable but photo still visible */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-br from-primary/35 via-transparent to-black/30 mix-blend-soft-light pointer-events-none" />

                {/* Content over image */}
                <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-16 text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-accent mb-1">
                    On the job
                  </p>
                  <h4 className="font-serif text-xl md:text-[1.4rem] font-bold text-white mb-1.5">
                    {card.title}
                  </h4>
                  <p className="font-hero-body text-[13px] leading-relaxed text-white/80 max-w-xs">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
