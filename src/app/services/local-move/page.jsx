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
import { CONTACT_INFO } from "@/components/contact-us/contactData";

gsap.registerPlugin(ScrollTrigger);

/** Placeholder — replace with your image path */
const HERO_BG_IMAGE = "/images/hero/Kingsmovinging-service.jpg";

const faqs = [
  {
    q: "How far in advance should I book a local move?",
    a: "We recommend booking at least 1–2 weeks ahead, especially during weekends and peak summer months. That said, we often accommodate same-day and next-day moves — call us and we'll do everything we can to make it work.",
  },
  {
    q: "How is the cost of a local move calculated?",
    a: "We give you a clear, binding quote based on home size, distance, crew needed, and any add-ons like packing. No hourly guessing games — you know the price before we ever show up.",
  },
  {
    q: "Do you offer same-day or last-minute local moves?",
    a: "Yes. We keep flexible slots for short-notice moves. Call us as early as possible and we'll confirm availability the same day. We've helped plenty of families get moved on 24 hours' notice.",
  },
  {
    q: "How do you protect my furniture and belongings?",
    a: "Every piece of furniture is wrapped in heavy moving blankets and secured with shrink wrap. Fragile items get extra padding and careful box placement. Our crews are trained to treat your belongings the way they'd treat their own — with care.",
  },
  {
    q: "Do you provide packing materials and packing services?",
    a: "Yes — we offer full-service packing, partial packing for specific rooms, or just supplies if you want to pack yourself. All options are available when you book. Just tell us how much help you want.",
  },
  {
    q: "What areas do you serve for local moves?",
    a: "We serve Scottsdale, Phoenix, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Paradise Valley, Fountain Hills, and all surrounding Greater Phoenix communities. Not sure if we cover your route? Give us a call — we'll confirm in seconds.",
  },
  {
    q: "Can you help with moves into or out of apartments?",
    a: "Absolutely. Elevators, narrow stairwells, tight parking — we've handled it all. We assess access at both addresses during your quote so we bring the right crew and equipment. No surprises on move day.",
  },
  {
    q: "What if I only need help loading or unloading?",
    a: "We offer labor-only services too. If you have a truck and just need strong, reliable help for a few hours, we can do that. Tell us what you need and we'll tailor the service exactly.",
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
  { Icon: IconTrophy, title: "Licensed & Fully Insured", desc: "We're fully licensed and carry comprehensive liability and cargo insurance on every move. Your belongings, your furniture, and your property are protected — period. You're in safe hands from the first box to the last." },
  { Icon: IconBox, title: "Careful, Professional Packing", desc: "Our trained crews use quality moving blankets, shrink wrap, and packing materials to protect everything — from everyday furniture to fragile keepsakes. Full-service packing is available so you don't have to lift a finger." },
  { Icon: IconTruck, title: "On-Time, Every Time", desc: "We show up when we say we will. Our crews are reliable, punctual, and work efficiently so your move day runs on schedule. No waiting around — we respect your time." },
  { Icon: IconMapPin, title: "Local Arizona Experts", desc: "We know Scottsdale and Greater Phoenix inside out — traffic patterns, building access, parking restrictions, and the fastest routes. Local knowledge means your move runs smoothly start to finish." },
  { Icon: IconDollar, title: "Transparent Pricing — No Hidden Fees", desc: "The price we quote is the price you pay. No surprise charges on move day, no hourly games, no fuel surcharges buried in the fine print. Just a clear, honest quote you can trust." },
  { Icon: IconStar, title: "Thousands of Happy Families", desc: "We've helped thousands of Arizona families and individuals move safely and stress-free. Our 5-star reputation is built on real results — reliable service, careful handling, and a crew that goes the extra mile." },
];

const steps = [
  {
    num: "01",
    title: "Get Your Free Binding Quote",
    desc: "Call us or fill out the quick form and we'll assess your home and move details — in person or by phone. You'll get a clear, honest price with no hidden fees and no pressure to book.",
  },
  {
    num: "02",
    title: "Pick Your Date — We'll Be There",
    desc: "Choose the date and time that works for your schedule. We confirm your slot and show up on time — same-day and next-day options are often available for local moves.",
  },
  {
    num: "03",
    title: "Our Crew Arrives Ready to Work",
    desc: "Our professional, background-checked movers arrive on time with all the materials needed — blankets, wrap, boxes, and tools. Everything is carefully packed, wrapped, and loaded with care.",
  },
  {
    num: "04",
    title: "Safe, Reliable Transport",
    desc: "Your belongings travel safely to your new address on one of our well-maintained trucks. For most local moves in the Greater Phoenix area, we complete pickup and delivery the same day.",
  },
  {
    num: "05",
    title: "Delivery, Reassembly & You're Done",
    desc: "We unload, reassemble furniture, and place everything exactly where you want it. You don't lift a finger — we leave your new home set up and ready so you can start living in it.",
  },
];

// Placeholder gallery images for local move detail page.
// Replace src paths with your own images.
const LOCAL_GALLERY = [
  { src: "/images/Bed-2.jpg", alt: "Local move photo 1" },
  { src: "/images/Padded-and-blanketed.jpg", alt: "Local move photo 2" },
  { src: "/images/Blanketed.jpg", alt: "Local move photo 3" },
];

export default function LocalMovePage() {
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
    <div ref={pageRef} className="bg-background text-foreground font-sans min-h-screen overflow-x-hidden" style={{ transformStyle: "flat" }}>

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
            <span className="text-white font-semibold">Local Move</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Local Moving Services in Scottsdale &amp; Phoenix, AZ
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Reliable, insured local movers you can actually trust. We move homes and apartments across the Greater Phoenix area with careful handling, transparent pricing, and crews that show up on time — every single time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <a
              href="#quote"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors font-sans"
            >
              Get a Free Quote
            </a>
            <a
              href={CONTACT_INFO.officePhoneHref}
              className="inline-block px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors font-sans"
            >
              📞 Office: {CONTACT_INFO.officePhone}
            </a>
            <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white font-sans hover:bg-white/10 transition-colors">
              <span className="text-white/85 text-base font-medium">Direct:</span>
              <a href={CONTACT_INFO.directPhoneHref} className="hover:underline">
                {CONTACT_INFO.directPhone}
              </a>
              <span className="text-white/70 font-normal">or</span>
              <a href={CONTACT_INFO.directPhone2Href} className="hover:underline whitespace-nowrap">
                {CONTACT_INFO.directPhone2DisplaySpaced}
              </a>
            </div>
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
                src="/images/service-1.jpg"
                alt="Local movers loading a truck"
                className="w-full h-full object-cover"
              />
            </div>
            <p data-anim-item className="text-sm text-muted-foreground mt-2 italic text-center font-sans">
              Our local crews get you moved efficiently and with care.
            </p>
          </div>

          {/* Right text */}
          <div className="w-full lg:w-7/12">
            <span data-anim-item className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 font-sans bg-primary/10 text-primary border-l-4 border-primary rounded-r">
              Local Moving
            </span>
            <h2 data-anim-item className="font-serif text-4xl font-bold leading-tight mb-5 text-foreground">
              Safe, Stress-Free Local Moves Across the Greater Phoenix Area
            </h2>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              A local move sounds simple — until you're surrounded by boxes, a truck that's too small, and a crew that doesn't show up. We built King Movers to be different. <strong>Our promise is simple: reliable service, careful handling, and a price that doesn't change on move day.</strong> No hidden fees. No excuses. Just a smooth, stress-free move.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              We're fully licensed and insured, serving Scottsdale, Phoenix, Tempe, Mesa, Chandler, Gilbert, and all surrounding communities. Our professional crews arrive on time, equipped with everything needed — moving blankets, shrink wrap, dollies, and the right-sized truck for your home. Apartments, condos, single-family homes — we handle them all.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              Every move is backed by a transparent, binding quote so you know exactly what you're paying before we show up. We walk you through the process, answer every question, and treat your belongings with the same care we'd want for our own families.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed">
              Whether you're upgrading to a bigger space, downsizing, or just moving down the street, our team is here to make move day feel easy. <strong>You focus on your fresh start — we'll handle every box, every piece of furniture, every detail.</strong>
            </p>
          </div>
        </div>

        {/* ── WHAT'S INCLUDED ─────────────────────────────────────── */}
        <div data-anim-section className="rounded-2xl p-10 mb-20 bg-surface border-2 border-foreground/10">
          <h2 data-anim-item className="font-serif text-3xl font-bold mb-2 text-foreground">
            Everything Included — No Surprise Charges
          </h2>
          <p data-anim-item className="text-muted-foreground mb-8 text-lg font-sans">
            Every local move comes with a full suite of services as standard. Here's exactly what you're getting — all spelled out upfront so there are zero surprises on move day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Free Binding Quote — Upfront & Honest", "We assess your home and give you a clear, binding price. The number we quote is the number you pay — no last-minute add-ons, no surprise fees."],
              ["Careful Packing by Trained Professionals", "Our crews pack your home using quality boxes, heavy blankets, bubble wrap, and shrink wrap. Every item is handled carefully — from dishes to flat-screen TVs."],
              ["Furniture Disassembly & Reassembly", "Beds, desks, shelving units, and large furniture are taken apart safely for transport and fully reassembled at your new home. You don't need to lift a tool."],
              ["Damage Protection on Every Move", "We wrap and pad all furniture to prevent scratches and damage. We're fully insured, and we take full responsibility for the safe delivery of your belongings."],
              ["Right-Sized Truck & Trained Crew", "We match the right truck and crew size to your move — no overcrowding, no under-staffing. Efficient work means your move stays on schedule and your quote stays fair."],
              ["Same-Day & Scheduled Moves Available", "Need to move this weekend? We offer same-day and next-day local moves when our schedule allows, plus fully scheduled moves for maximum flexibility."],
              ["Apartments, Condos & Houses", "Elevators, walk-ups, narrow hallways, gated communities — we've handled every type of access. We assess both addresses at quote time so move day is smooth."],
              ["Friendly, Responsive Customer Support", "Questions before, during, or after your move? Our team is easy to reach, quick to respond, and genuinely happy to help. We don't pass you around or leave you on hold."],
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
            <h2 data-anim-item className="font-serif text-4xl font-bold text-foreground">How a King Movers Local Move Works</h2>
            <p data-anim-item className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              Five simple steps — and we handle all the hard parts. You'll always know what's happening and what's next.
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
          aria-label="Local moving gallery"
        >
          <div className="text-center mb-8">
            <h2 data-anim-item className="font-serif text-3xl font-bold text-foreground">
              Local Moving Gallery
            </h2>
            <p
              data-anim-item
              className="text-muted-foreground mt-3 text-base md:text-lg font-sans max-w-2xl mx-auto"
            >
              A look at our crew in action — careful packing, professional loading, and safe delivery to your new home.
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
              {LOCAL_GALLERY.map((img, index) => (
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
                src="/images/David-CJ-3.jpg"
                alt="Local movers packing and moving boxes"
                className="w-full h-full object-cover"
              />
            </div>
            <p data-anim-item className="text-sm text-muted-foreground mt-2 italic text-center font-sans">
              Our packing team treats every item as if it were their own.
            </p>
          </div>
          <div className="w-full lg:w-7/12">
            <h2 data-anim-item className="font-serif text-4xl font-bold leading-tight mb-5 text-foreground">
              Why "Careful" Isn't Just a Word We Use — It's How We Work
            </h2>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              Most bad moves come down to one thing: a crew that rushed, cut corners, and didn't treat your belongings like they mattered. Broken furniture. Missing boxes. A sofa left in the rain. We've heard the horror stories — and we've built our entire operation to make sure none of that happens to you.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our crews are trained professionals — not day laborers hired off a list. They follow a consistent loading and packing process: furniture is wrapped before it's moved, boxes are labeled by room, heavy items are loaded first, and fragile things get extra care. Every step is deliberate. Nothing is rushed.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              We're fully licensed and insured, which means if anything does go wrong, you're covered. But more importantly — our track record speaks for itself. Thousands of safe, successful moves across Scottsdale and Phoenix, and a team that takes pride in doing the job right.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed">
              We understand this is your home, your memories, and your stuff. We don't take that lightly. <strong>Every move we do gets the same level of care and attention — whether it's a studio apartment or a 5-bedroom house.</strong>
            </p>
          </div>
        </div>

        {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
        <div data-anim-section className="mb-20">
          <div className="text-center mb-10">
            <h2 data-anim-item className="font-serif text-4xl font-bold text-foreground">Why Arizona Families Trust King Movers</h2>
            <p data-anim-item className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              There are plenty of moving companies. Here's why thousands of families in Scottsdale and Phoenix choose us — and come back every time they move.
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

        {/* ── AREAS WE SERVE ───────────────────────────────────────── */}
        <div data-anim-section className="rounded-2xl p-10 mb-20 bg-primary text-white">
          <h2 data-anim-item className="font-serif text-3xl font-bold mb-3">Proudly Serving Scottsdale, Phoenix &amp; All of Greater Arizona</h2>
          <p data-anim-item className="text-white/80 mb-8 text-lg font-sans">
            Based in Scottsdale, we serve the entire Greater Phoenix metro area. Whether you're moving down the street or across the valley, we've got the crew, the truck, and the experience to do it right.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-sans">
            {[
              "Scottsdale",
              "Phoenix",
              "Tempe",
              "Mesa",
              "Chandler",
              "Gilbert",
              "Glendale",
              "Peoria",
              "Paradise Valley",
              "Fountain Hills",
              "Cave Creek",
              "Goodyear",
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
            Not sure if we cover your area? Call {CONTACT_INFO.officePhone} (office) or{" "}
            {CONTACT_INFO.directPhone} / {CONTACT_INFO.directPhone2DisplaySpaced} (direct) — we'll
            confirm in seconds and get you a free quote on the spot.
          </p>
        </div>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <div data-anim-section className="mb-20">
          <div className="text-center mb-10">
            <h2 data-anim-item className="font-serif text-4xl font-bold text-foreground">
              Your Local Moving Questions, Answered
            </h2>
            <p data-anim-item className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              We know choosing a mover is a big decision. Here are the questions we hear most often — answered honestly and simply.
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
            Get Your Free Local Moving Quote Today
          </h2>
          <p data-anim-item className="text-white/90 text-lg md:text-xl mb-8 font-sans leading-relaxed">
            Reliable movers, transparent pricing, and a crew that actually cares. Get your free, no-obligation quote in minutes — we'll walk you through everything and give you a firm price with zero pressure.
          </p>
          <div data-anim-item className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              href="/contact-us"
              className="inline-block px-10 py-4 text-lg font-bold rounded-lg font-sans bg-accent text-foreground hover:opacity-90 transition-opacity"
            >
              Request a Free Estimate
            </Link>
            <a
              href={CONTACT_INFO.officePhoneHref}
              className="inline-block px-10 py-4 text-lg font-bold border-2 border-white text-white rounded-lg font-sans hover:bg-white/10 transition-colors"
            >
              📞 Office: {CONTACT_INFO.officePhone}
            </a>
            <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-10 py-4 text-lg font-bold rounded-lg border-2 border-white text-white font-sans hover:bg-white/10 transition-colors">
              <span className="text-white/85 text-base font-semibold">Direct:</span>
              <a href={CONTACT_INFO.directPhoneHref} className="hover:underline">
                {CONTACT_INFO.directPhone}
              </a>
              <span className="text-white/70 font-normal">or</span>
              <a href={CONTACT_INFO.directPhone2Href} className="hover:underline whitespace-nowrap">
                {CONTACT_INFO.directPhone2DisplaySpaced}
              </a>
            </div>
          </div>
          <p data-anim-item className="text-white/70 mt-6 text-sm font-sans">
            Available Mon–Sun, 8AM–8PM · No pressure, no obligation
          </p>
        </div>
      </section>
    </div>
  );
}