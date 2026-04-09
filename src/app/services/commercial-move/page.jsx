"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialsSectionHome2 from "@/components/home/TestimonialsSectionHome2";
import HeroQuoteBar from "@/components/home3/HeroQuoteBar";

gsap.registerPlugin(ScrollTrigger);

/** Placeholder — replace with your image path */
const HERO_BG_IMAGE = "/images/hero/Kingsmovinging-service.jpg";

const faqs = [
  {
    q: "How far in advance should I book a commercial move?",
    a: "We recommend booking 2–4 weeks ahead so we can coordinate after-hours or weekend slots, arrange the right crew size, and work with your IT or facilities team. Need to move sooner? Call us — we accommodate rush commercial moves when our schedule allows.",
  },
  {
    q: "Do you offer after-hours or weekend office moves?",
    a: "Yes, and most of our commercial clients prefer it. We routinely schedule office moves outside business hours and on weekends to keep your operations running and minimize disruption to your team. Tell us your constraints — we'll build around them.",
  },
  {
    q: "How do you handle IT equipment and sensitive documents?",
    a: "We work directly with your IT team for disconnection and reconnection. Equipment is packed carefully using appropriate materials and labeled clearly for easy reassembly. Sensitive files and documents are handled confidentially — all our crews are trained and background-checked.",
  },
  {
    q: "Can you do a phased move for a large office?",
    a: "Absolutely. For larger offices we can move by department, floor, or timeline — so your business never has to go dark entirely. We'll create a detailed phased move plan that works with your schedule and minimizes disruption to daily operations.",
  },
  {
    q: "What's included in a commercial moving quote?",
    a: "Labor, trucks, standard packing materials, disassembly and reassembly of office furniture, and insurance are all included. Any extras — specialty crating, IT coordination, storage — are outlined clearly upfront. The quote we give you is binding. No surprise charges on delivery day.",
  },
  {
    q: "Are you insured for commercial moves?",
    a: "Yes. We carry comprehensive liability and cargo insurance on all commercial moves. We can provide a certificate of insurance for your building management, landlord, or procurement team upon request — no delays.",
  },
  {
    q: "Do you move specialty equipment like medical or lab gear?",
    a: "We handle office furniture, workstations, filing systems, and standard commercial equipment. For highly regulated or specialized equipment (medical devices, lab machinery), we can coordinate with certified specialists as part of your overall move plan.",
  },
  {
    q: "Who is our point of contact during the move?",
    a: "You get a dedicated move coordinator from your first call through final setup — one person, one number. They manage scheduling, crew assignment, and any changes. No call centers, no getting passed around. Just a reliable, responsive point of contact who knows your move inside out.",
  },
];

/* Icons for Why Choose Us (replacing emojis) */
const IconTrophy = () => (
  <svg className="w-10 h-10 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M8 21h8M12 17v4M7 4h10M7 4v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V4M7 4V2h10v2" />
    <path d="M12 7v4M8 11h8" />
    <path d="M6 4v2a6 6 0 0 0 12 0V4M4 11v1a4 4 0 0 0 8 0v-1M16 11v1a4 4 0 0 1-8 0v-1" />
  </svg>
);
const IconBox = () => (
  <svg className="w-10 h-10 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const IconTruck = () => (
  <svg className="w-10 h-10 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const IconMapPin = () => (
  <svg className="w-10 h-10 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconDollar = () => (
  <svg className="w-10 h-10 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const IconStar = () => (
  <svg className="w-10 h-10 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const whyUs = [
  { Icon: IconTrophy, title: "Licensed, Insured & Accountable", desc: "We're fully licensed and carry comprehensive liability and cargo insurance on every commercial job. Certificates of insurance available upon request for your building management or procurement team. You're covered — completely." },
  { Icon: IconBox, title: "Trained Crews Who Handle Offices Right", desc: "Our movers are trained — not random day-laborers. They know how to move desks, workstations, filing systems, and fragile equipment carefully and efficiently. Proper packing, proper labeling, and a clean setup at your new location." },
  { Icon: IconTruck, title: "Minimal Downtime, Maximum Reliability", desc: "We schedule after-hours and weekend moves to keep your business running. Our crews are punctual, efficient, and experienced — so your office is back up and operational as fast as possible." },
  { Icon: IconMapPin, title: "One Dedicated Coordinator Throughout", desc: "From first call to final setup, you have one point of contact who manages your entire commercial relocation. No call centers, no being passed around. Just a responsive, reliable coordinator who knows your move and makes it happen." },
  { Icon: IconDollar, title: "Transparent Pricing — No Surprises on Invoice", desc: "Commercial budgets don't have room for surprise charges. We provide a clear, binding quote before we start — labor, trucks, materials, everything. The number we quote is the number on your invoice. Period." },
  { Icon: IconStar, title: "Trusted by Businesses Across Arizona", desc: "We've successfully relocated corporate offices, medical practices, retail spaces, law firms, restaurants, and more. Our clients trust us because we deliver — on time, under budget, and with zero drama." },
];

const steps = [
  {
    num: "01",
    title: "Free Site Survey & Binding Quote",
    desc: "We survey your office — in person or by video — to assess inventory, access requirements, and any special equipment. You get a detailed, binding quote. No vague estimates, no hidden charges.",
  },
  {
    num: "02",
    title: "A Custom Move Plan Around Your Business Hours",
    desc: "We build a plan that minimizes your downtime: after-hours or weekend slots, phased moves for larger offices, and full coordination with your IT and facilities teams.",
  },
  {
    num: "03",
    title: "Professional Packing, Labeling & Load-Out",
    desc: "Our trained crew packs everything carefully, labels by department or room, and disassembles furniture as needed. We load efficiently and leave your old space clean and ready for handover.",
  },
  {
    num: "04",
    title: "Reliable Transport to Your New Location",
    desc: "Your office contents travel safely on our insured trucks to the new site. Your coordinator keeps you updated at every stage — you'll always know exactly when to expect delivery.",
  },
  {
    num: "05",
    title: "Delivery, Reassembly & Ready to Open",
    desc: "We unload, reassemble all furniture, and set everything up exactly according to your floor plan. We stay until every desk is in place, every cable is run, and you're ready to open for business.",
  },
];

// Placeholder gallery images for commercial move detail page.
// Replace src paths with your own images.
const COMMERCIAL_GALLERY = [
  { src: "/images/Padded_ Blanketed-and-shrink-wrapped-professionally.jpg", alt: "Commercial move photo 1" },
  { src: "/images/Ready-to-load.jpg", alt: "Commercial move photo 2" },
  { src: "/images/international-move2.jpg", alt: "Commercial move photo 3" },
];

export default function CommercialMovePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const pageRef = useRef(null);
  const heroSectionRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const section = heroSectionRef.current;
    if (!section) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      gsap.set(heroContentRef.current?.children || [], { opacity: 0, y: 24 });
      gsap.set(heroBgRef.current, { scale: 1.12, transformOrigin: "center center" });

      if (!reduceMotion) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.to(heroBgRef.current, { scale: 1, duration: 1.8 }, 0).to(
          heroContentRef.current?.children || [],
          { opacity: 1, y: 0, duration: 1, stagger: 0.12 },
          0.4
        );
        gsap.to(heroBgRef.current, {
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
        gsap.set(heroBgRef.current, { scale: 1, y: 0 });
        gsap.set(heroContentRef.current?.children || [], { opacity: 1, y: 0 });
      }
    }, section);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray("[data-anim-section]");
      const images = gsap.utils.toArray("[data-anim-image]");

      // Initial states (dramatic, but readable — no blur)
      gsap.set(sections, {
        opacity: 0,
        y: 42,
        scale: 0.992,
      });

      sections.forEach((sectionEl) => {
        const items = sectionEl.querySelectorAll("[data-anim-item]");

        gsap.set(items, {
          opacity: 0,
          y: 18,
          scale: 0.985,
        });

        if (reduceMotion) {
          gsap.set(sectionEl, { opacity: 1, y: 0, scale: 1 });
          gsap.set(items, { opacity: 1, y: 0, scale: 1 });
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 78%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power4.out" },
        });

        tl.to(sectionEl, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, 0).to(
          items,
          { opacity: 1, y: 0, scale: 1, duration: 0.85, stagger: 0.06 },
          0.25
        );
      });

      // Subtle parallax on sticky images for extra “alive” feel
      images.forEach((imgWrap) => {
        if (reduceMotion) return;
        gsap.fromTo(
          imgWrap,
          { y: -10 },
          {
            y: 18,
            ease: "none",
            scrollTrigger: {
              trigger: imgWrap,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-background text-foreground font-sans min-h-screen overflow-hidden" style={{ transformStyle: "flat" }}>

      {/* ── HERO: background image + overlay + scroll zoom ───────────────── */}
      <section
        ref={heroSectionRef}
        className="relative min-h-[420px] md:min-h-[500px] flex items-center justify-center overflow-hidden"
      >
        {/* Background image (placeholder path — replace HERO_BG_IMAGE) */}
        <div
          ref={heroBgRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url('${HERO_BG_IMAGE}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Brand overlay (primary tint) */}
        <div className="absolute inset-0 bg-primary/75" aria-hidden />
        <div className="absolute inset-0 bg-black/40" aria-hidden />

        <div
          ref={heroContentRef}
          className="relative z-10 mx-auto px-6 py-20 flex flex-col items-center text-center max-w-4xl"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/80 text-sm mb-6 font-sans" aria-label="Breadcrumb">
            <Link href="/" className="text-white/90 hover:text-white no-underline">Home</Link>
            <span aria-hidden>›</span>
            <Link href="/services" className="text-white/90 hover:text-white no-underline">Services</Link>
            <span aria-hidden>›</span>
            <span className="text-white font-semibold">Commercial Move</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Commercial &amp; Office Moving Services in Arizona
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Reliable, insured commercial movers that keep your business running. We plan every relocation around your schedule — after-hours, weekends, or phased — with careful handling, transparent pricing, and a dedicated coordinator so your team is back to work fast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#quote"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors font-sans"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+14804471200"
              className="inline-block px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors font-sans"
            >
              📞 480-447-1200
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────────── */}
     <HeroQuoteBar/>

      {/* ── MAIN CONTENT ────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 py-14">

        {/* SECTION 1: Intro — Image Left (sticky) + Text Right */}
        <div data-anim-section className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          {/* Left image — sticky while text scrolls */}
          <div className="w-full lg:w-5/12 shrink-0 lg:sticky lg:top-24 lg:self-start">
            <div data-anim-image className="w-full rounded-lg overflow-hidden aspect-4/3 bg-surface">
              <img
                src="/images/service.jpg"
                alt="Commercial office movers at work"
                className="w-full h-full object-cover"
              />
            </div>
            <p data-anim-item className="text-sm text-muted-foreground mt-2 italic text-center font-sans">
              Our teams handle office and commercial moves with minimal downtime.
            </p>
          </div>

          {/* Right text */}
          <div className="w-full lg:w-7/12">
            <span data-anim-item className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 font-sans bg-primary/10 text-primary border-l-4 border-primary rounded-r">
              Commercial Moving
            </span>
            <h2 data-anim-item className="font-serif text-4xl font-bold leading-tight mb-5 text-foreground">
              Your Business Can't Afford a Botched Move — So We Don't Do Botched Moves
            </h2>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              Every hour your office is down costs money. A disorganized move — missing furniture, damaged equipment, cables nowhere near the right desks — can set your business back days. We've built our commercial moving service around one non-negotiable goal: <strong>get your office moved and back up and running as fast as possible, with zero surprises.</strong>
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              We plan every detail before we ever show up. We work after hours and on weekends to avoid disrupting your team during business hours. We coordinate with your IT department for careful equipment handling, and we provide a dedicated move coordinator who's reachable throughout the entire process — not a call center agent who doesn't know your job.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              We're fully licensed and insured, and we can provide certificates of insurance for your building management or procurement team on request. Our crews are trained professionals — not temp workers — who understand how to handle office environments carefully, confidentially, and efficiently.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed">
              Whether you're expanding, downsizing, or moving to a better location, our team makes the transition smooth, reliable, and predictable. <strong>You run your business. We handle everything else.</strong>
            </p>
          </div>
        </div>

        {/* ── WHAT'S INCLUDED ─────────────────────────────────────── */}
        <div data-anim-section className="rounded-2xl p-10 mb-20 bg-surface border-2 border-foreground/10">
          <h2 data-anim-item className="font-serif text-3xl font-bold mb-2 text-foreground">
            Everything Included — Transparent Pricing, No Invoice Surprises
          </h2>
          <p data-anim-item className="text-muted-foreground mb-8 text-lg font-sans">
            Here's exactly what's included in every commercial move we do — all itemized upfront so your finance or procurement team knows precisely what to expect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Free Binding Quote & Site Survey", "We survey your office and provide a written, binding quote. The price we give you is the price on your invoice — no last-minute labor charges or fuel surcharges added on the day."],
              ["After-Hours & Weekend Scheduling", "We build your move schedule around your business hours — evenings, weekends, or split across multiple nights if needed. Minimal disruption to your team and your clients."],
              ["Professional Packing & Careful Labeling", "Every item is packed properly and labeled by department or room. Nothing gets tossed into an unlabeled box. Setup at your new location is fast and organized because everything arrives where it's supposed to."],
              ["Furniture Disassembly & Full Reassembly", "Desks, workstations, conference tables, and shelving are disassembled safely before loading and fully reassembled at your new space — according to your floor plan."],
              ["IT & Equipment Coordination", "We coordinate directly with your IT team for safe disconnection and reconnection of workstations, monitors, and equipment. Careful packing, clear labeling, and zero damage."],
              ["Dedicated Move Coordinator — One Number", "One person manages your entire relocation from survey to final setup. Reachable, responsive, and fully briefed on your move. No call centers, no being bounced around."],
              ["Phased Moves for Large Offices", "Too large to move in one go? We can move by floor, department, or timeline. Keep your business partially operational throughout and move at a pace that works for you."],
              ["Insured, Licensed & Fully Accountable", "We carry comprehensive liability and cargo insurance on every commercial job. Certificates of insurance are available on request. If something goes wrong, you're covered — fully."],
            ].map(([title, desc]) => (
              <div data-anim-item key={title} className="flex gap-4 items-start">
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold font-sans bg-primary mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-1 text-foreground">{title}</h4>
                  <p className="text-muted-foreground leading-relaxed font-sans text-base">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── HOW IT WORKS ────────────────────────────────────────── */}
        <div data-anim-section className="mb-20">
          <div className="text-center mb-10">
            <h2 data-anim-item className="font-serif text-4xl font-bold text-foreground">How a King Movers Commercial Move Works</h2>
            <p data-anim-item className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              Structured, predictable, and built around your business schedule — here's exactly what to expect from start to finish.
            </p>
          </div>
          <div className="flex flex-col gap-0">
            {steps.map((step) => (
              <div
                key={step.num}
                data-anim-item
                className="flex flex-col md:flex-row gap-6 items-start md:items-center border-l-4 border-primary pl-6 pb-8"
              >
                <div className="shrink-0 w-16 h-16 rounded flex items-center justify-center font-extrabold text-xl font-sans bg-primary text-white min-w-[64px]">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-1 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-sans">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── GALLERY CAROUSEL ─────────────────────────────────────── */}
        <section
          data-anim-section
          className="mb-20"
          aria-label="Commercial moving gallery"
        >
          <div className="text-center mb-8">
            <h2 data-anim-item className="font-serif text-3xl font-bold text-foreground">
              Commercial Moving Gallery
            </h2>
            <p
              data-anim-item
              className="text-muted-foreground mt-3 text-base md:text-lg font-sans max-w-2xl mx-auto"
            >
              Our team handling office and commercial relocations — professional packing, careful loading, and a clean setup at your new location.
            </p>
          </div>
          <div data-anim-item className="relative overflow-hidden">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={16}
              slidesPerView={1.1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-10!"
            >
              {COMMERCIAL_GALLERY.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden bg-surface border border-foreground/10">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* ── IMAGE + TEXT BLOCK 2 — Image Right (sticky) + Text Left ── */}
        <div data-anim-section className="flex flex-col lg:flex-row-reverse gap-12 items-start mb-20">
          {/* Right image — sticky while text scrolls */}
          <div className="w-full lg:w-5/12 shrink-0 lg:sticky lg:top-24 lg:self-start">
            <div data-anim-image className="w-full rounded-lg overflow-hidden aspect-4/3 bg-surface">
              <img
                src="/images/truck-stack-kings.png"
                alt="Commercial movers handling office equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <p data-anim-item className="text-sm text-muted-foreground mt-2 italic text-center font-sans">
              Our packing team treats every item as if it were their own.
            </p>
          </div>
          <div className="w-full lg:w-7/12">
            <h2 data-anim-item className="font-serif text-4xl font-bold leading-tight mb-5 text-foreground">
              The Fastest Way to Get Your Business Back Up and Running
            </h2>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              A disorganized commercial move doesn't just cause chaos on move day — it costs your business real money in lost productivity the days that follow. Unlabeled boxes. Missing equipment. Furniture in the wrong rooms. A team that can't work because nobody knows where anything went. We've seen it. We prevent it.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              Every commercial move we do starts with a detailed inventory and a floor plan for your new space. Every box is labeled by department and destination. Every piece of furniture is disassembled, wrapped, and loaded carefully. When we arrive at your new location, we work directly from your layout — so your team walks in and starts working, not searching.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              We coordinate with your IT team, respect your confidentiality requirements, and keep the entire process quiet and professional. Our crews are background-checked, trained, and experienced in commercial environments — they work efficiently and take care of your equipment and your space.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed">
              The goal isn't just to move your office. <strong>It's to move it so well that your team shows up Monday morning, sits down, and gets straight back to work — like the move happened overnight.</strong> That's what we deliver.
            </p>
          </div>
        </div>

        {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
        <div data-anim-section className="mb-20">
          <div className="text-center mb-10">
            <h2 data-anim-item className="font-serif text-4xl font-bold text-foreground">Why Arizona Businesses Choose King Movers</h2>
            <p data-anim-item className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              We're not the cheapest option — we're the most reliable one. Here's what separates us from other commercial movers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ Icon, title, desc }) => (
              <div
                key={title}
                data-anim-item
                className="p-7 rounded-2xl border-2 border-foreground/10 bg-background flex flex-col"
              >
                <div className="mb-4">
                  <Icon />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 text-foreground">{title}</h3>
                <p className="text-muted-foreground leading-relaxed font-sans">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TYPES WE COVER ───────────────────────────────────────── */}
        <div data-anim-section className="rounded-2xl p-10 mb-20 bg-primary text-white">
          <h2 data-anim-item className="font-serif text-3xl font-bold mb-3">We Relocate Businesses of Every Type &amp; Size</h2>
          <p data-anim-item className="text-white/80 mb-8 text-lg font-sans">
            From a two-person startup to a multi-floor corporate office — our commercial moving team has the experience, the crew, and the systems to handle it. Here's the range of businesses we work with regularly:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-sans">
            {[
              "Corporate offices",
              "Medical & dental",
              "Retail stores",
              "Law firms",
              "Banks & financial",
              "Startups & coworking",
              "Schools & nonprofits",
              "Restaurants & cafes",
              "Salons & spas",
              "Warehouses",
              "Studios & agencies",
              "Government & municipal",
            ].map((item) => (
              <div
                key={item}
                data-anim-item
                className="px-4 py-3 rounded-lg text-sm font-semibold bg-white/10 border border-white/20"
              >
                ✓ {item}
              </div>
            ))}
          </div>
          <p data-anim-item className="text-white/70 mt-6 font-sans text-sm">
            Don't see your business type? We work with all commercial clients — call 480-447-1200 for a custom quote tailored to your move.
          </p>
        </div>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <div data-anim-section className="mb-20">
          <div className="text-center mb-10">
            <h2 data-anim-item className="font-serif text-4xl font-bold text-foreground">
              Commercial Moving FAQs — Straight Answers for Busy Businesses
            </h2>
            <p data-anim-item className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              We know business owners and office managers have specific concerns. Here are the most common questions we get — answered directly.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                data-anim-item
                className="rounded-xl overflow-hidden border-2 border-foreground/10"
              >
                <button
                  className={`w-full flex justify-between items-center px-7 py-5 text-left font-sans transition-colors ${openFaq === i ? "bg-primary text-white" : "bg-surface text-foreground hover:bg-foreground/5"}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-lg font-bold pr-4">
                    {faq.q}
                  </span>
                  <span className="text-2xl shrink-0 font-bold">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-7 py-5 bg-background border-t-2 border-foreground/10">
                    <p className="text-muted-foreground text-lg leading-relaxed font-sans">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── TESTIMONIALS: full width ───────────────────────────────── */}
      <section data-anim-section className="w-full" aria-label="Customer testimonials">
        <TestimonialsSectionHome2 />
      </section>

      {/* ── QUOTE CTA: full width, inner content centered ───────────── */}
      <section
        id="quote"
        data-anim-section
        className="w-full bg-primary py-16 md:py-20"
        aria-label="Get a quote"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 data-anim-item className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Get Your Business Moved — the Right Way
          </h2>
          <p data-anim-item className="text-white/90 text-lg md:text-xl mb-8 font-sans leading-relaxed">
            Reliable, insured, and transparent — we take commercial moves seriously because your business depends on it. Get your free, binding estimate today. We'll survey your office, answer every question, and build a move plan around your schedule with zero pressure.
          </p>
          <div data-anim-item className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block px-10 py-4 text-lg font-bold rounded-lg font-sans bg-accent text-foreground hover:opacity-90 transition-opacity"
            >
              Request a Free Estimate
            </Link>
            <a
              href="tel:+14804471200"
              className="inline-block px-10 py-4 text-lg font-bold border-2 border-white text-white rounded-lg font-sans hover:bg-white/10 transition-colors"
            >
              📞 Call 480-447-1200
            </a>
          </div>
          <p data-anim-item className="text-white/70 mt-6 text-sm font-sans">
            Available Mon–Sun, 8AM–8PM · No pressure, no obligation
          </p>
        </div>
      </section>
    </div>
  );
}
