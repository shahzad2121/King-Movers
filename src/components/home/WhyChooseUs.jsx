"use client";

import { useEffect, useRef } from "react";
import { Truck, ShieldCheck, Clock, PackageCheck, Users, DollarSign } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises. You get a clear quote upfront and pay exactly what we agree on.",
    accent: "primary",
  },
  {
    icon: Truck,
    title: "On-Time Guarantee",
    description: "We show up when we say we will. Your time matters — we've built our reputation on punctuality.",
    accent: "accent",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Fully Insured",
    description: "Your belongings are protected every step of the way. We're fully licensed, bonded, and insured.",
    accent: "primary",
  },
  {
    icon: PackageCheck,
    title: "Damage-Free Moves",
    description: "Floor, doorway, and furniture protection on every job. We treat your home like it's our own.",
    accent: "accent",
  },
  {
    icon: Users,
    title: "Trained Professional Crew",
    description: "Our movers are background-checked, trained, and genuinely friendly — not day laborers.",
    accent: "primary",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Evening, weekend, and last-minute moves available. We work around your life, not the other way around.",
    accent: "accent",
  },
];

export default function WhyChooseUs() {
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

    tl.fromTo(headerRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7 }).fromTo(
      cardRefs.current.filter(Boolean),
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-surface w-full py-14 px-6 md:px-16">
      {/* Header */}
      <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
          What Makes Us <span className="text-primary">Different</span>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          We make moving simple, stress-free, and reliable — with a team that treats every move like it&apos;s their own.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reasons.map((item, i) => {
          const Icon = item.icon;
          const isPrimary = item.accent === "primary";
          return (
            <div
              key={item.title}
              ref={(el) => (cardRefs.current[i] = el)}
              className="bg-background border border-foreground/8 rounded-md p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-11 h-11 rounded-md flex items-center justify-center shrink-0 ${
                  isPrimary ? "bg-primary/10 text-primary" : "bg-accent/15 text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
