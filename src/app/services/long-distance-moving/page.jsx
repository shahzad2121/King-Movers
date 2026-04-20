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
    q: "How far in advance should I book a long-distance move?",
    a: "We recommend booking 4–6 weeks in advance, especially for summer moves (May–September) when demand peaks. Booking early gets you the best date, the most accurate quote, and gives us time to plan your move properly. That said, we do accommodate shorter timelines when availability allows — call us and we'll be honest about what we can do.",
  },
  {
    q: "How is the cost of a long-distance move calculated?",
    a: "Long-distance moves are typically priced based on the weight of your shipment and the distance traveled. We also factor in crew size, packing services, specialty items (pianos, antiques, large safes), and any storage needs. You get a free, binding quote upfront — no hourly surprises, no vague estimates.",
  },
  {
    q: "Will my belongings be on a shared or dedicated truck?",
    a: "We offer both. A dedicated truck means your belongings travel alone — no mixing with other customers' items, no extra stops. Consolidated (shared) service is a cost-effective option for smaller shipments. We'll recommend the right fit for your move size and budget during your free consultation.",
  },
  {
    q: "How do you protect my furniture and fragile items during a long-distance move?",
    a: "Everything gets wrapped in heavy-duty moving blankets and shrink wrap. Fragile items are double-boxed with foam inserts. Our trucks are well-maintained and fully equipped. We take the safe delivery of your belongings seriously — and we're fully insured so you have full peace of mind throughout transit.",
  },
  {
    q: "Can I stay updated on my shipment while it's in transit?",
    a: "Absolutely. You'll have a dedicated move coordinator as your single point of contact from booking to delivery. They'll keep you updated throughout the journey and are easy to reach by phone or message — no call centers, no being passed around.",
  },
  {
    q: "What items can't be transported across state lines?",
    a: "Hazardous materials (propane, paint, cleaning solvents, ammunition) and perishable items can't be transported. Pets and plants require separate arrangements. We'll walk you through the full list during your consultation and help you plan what to do with restricted items before move day.",
  },
  {
    q: "Do you offer packing and unpacking for long-distance moves?",
    a: "Yes — full-service packing, partial packing for specific rooms, and unpacking at your destination are all available. Our team handles everything carefully using quality materials. All packing supplies are included when you choose our packing service. You don't have to lift a finger.",
  },
  {
    q: "What if my delivery window needs to change?",
    a: "Plans change — we get it. Contact us as soon as you know about the change and we'll do our best to accommodate. For dedicated truck moves, reschedules are usually straightforward. We also offer secure, climate-controlled storage-in-transit if there's a gap between your move-out and move-in dates.",
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
  { Icon: IconTrophy, title: "Licensed, Insured & Accountable", desc: "We're fully licensed and carry comprehensive cargo and liability insurance on every long-distance move. Your belongings are protected throughout the entire journey — from the first box to final delivery at your new home." },
  { Icon: IconBox, title: "Careful, Professional Packing", desc: "Our trained crew uses industry-grade blankets, shrink wrap, double-boxing, and foam inserts to protect everything — everyday furniture, fragile items, and irreplaceable pieces alike. We treat your belongings like they're our own." },
  { Icon: IconTruck, title: "On-Time Delivery, Guaranteed", desc: "We plan every long-distance route carefully and communicate your delivery window clearly. Reliable transit, punctual delivery, and a crew that respects your timeline — because your life can't wait on a late truck." },
  { Icon: IconMapPin, title: "One Coordinator, Start to Finish", desc: "You get a dedicated move coordinator from the first call to final delivery. One person, one number — no call centers, no getting passed around, no confusion. Just a reliable point of contact who knows your move inside out." },
  { Icon: IconDollar, title: "Transparent Pricing — No Hidden Fees", desc: "The price we quote is the price you pay. No weight adjustments on delivery day, no surprise fuel charges, no add-ons buried in fine print. Just a clear, honest estimate before we ever touch a single box." },
  { Icon: IconStar, title: "Trusted by Thousands of Families", desc: "We've helped thousands of families make successful long-distance moves from Arizona to destinations across the country. Our 5-star reviews reflect a consistent track record of safe, reliable, and stress-free relocations." },
];

const steps = [
  {
    num: "01",
    title: "Free Binding Quote — In Person or by Phone",
    desc: "We survey your home and inventory everything — in person or by phone. You'll receive a clear, honest, binding quote. No vague estimates, no pressure to commit.",
  },
  {
    num: "02",
    title: "A Custom Move Plan Built Around You",
    desc: "We map out your entire move: packing schedule, crew assignment, route, and a realistic delivery window. You'll know exactly what's happening and when — no guesswork.",
  },
  {
    num: "03",
    title: "Professional Packing Day",
    desc: "Our trained crew arrives with all materials and carefully packs, wraps, labels, and loads every item. Fragile pieces get extra attention. Nothing gets tossed in a box without care.",
  },
  {
    num: "04",
    title: "Safe, Reliable Transit to Your New Home",
    desc: "Your belongings travel on a well-maintained, fully insured truck. Your dedicated coordinator stays in contact throughout the journey so you always know where your move stands.",
  },
  {
    num: "05",
    title: "Delivery, Reassembly & You're Done",
    desc: "We unload, reassemble every piece of furniture, and place items exactly where you want them. We don't leave until you're happy. Nothing is left in a driveway or dumped in a hallway.",
  },
];

// Placeholder gallery images for long distance detail page.
// Replace src paths with your own images.
const LONG_DISTANCE_GALLERY = [
  { src: "/images/international-move6.jpg", alt: "Long distance move photo 1" },
  { src: "/images/international-move7.jpg", alt: "Long distance move photo 2" },
  { src: "/images/international-move.jpg", alt: "Long distance move photo 3" },
];

export default function LongDistanceMovingPage() {
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
          gsap.set(sectionEl, {
            opacity: 1,
            y: 0,
            scale: 1,
          });
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

        tl.to(
          sectionEl,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
          },
          0
        ).to(
          items,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.06,
          },
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
            <span className="text-white font-semibold">Long Distance Moving</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Long-Distance Moving Services from Arizona
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Reliable, insured long-distance movers trusted by Arizona families. Whether you're moving 300 miles or across the country, we plan every detail, protect every item, and deliver on time — with a firm price you can count on from day one.
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
                src="/images/service-4.jpg"
                alt="Long distance moving truck on highway"
                className="w-full h-full object-cover"
              />
            </div>
            <p data-anim-item className="text-sm text-muted-foreground mt-2 italic text-center font-sans">
              Our modern fleet travels coast-to-coast safely and on schedule.
            </p>
          </div>

          {/* Right text */}
          <div className="w-full lg:w-7/12">
            <span data-anim-item className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 font-sans bg-primary/10 text-primary border-l-4 border-primary rounded-r">
              Long Distance Moving
            </span>
            <h2 data-anim-item className="font-serif text-4xl font-bold leading-tight mb-5 text-foreground">
              Your Long-Distance Move Deserves More Than a Wish and a Prayer
            </h2>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              Moving across state lines is one of the biggest transitions you'll make. The distance alone makes it intimidating — and too many moving companies make it worse by being vague about pricing, unreliable on timing, and careless with your belongings. <strong>We built King Movers to be the opposite of that.</strong>
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              We're a fully licensed, fully insured long-distance moving company based in Arizona. Our crew is professional and trained — not contractors hired for the day. We give you a binding quote before we ever start, so there are no price surprises when your truck pulls up at the destination. And you get a dedicated coordinator who knows your move and is actually reachable throughout the whole process.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              Long-distance moves require careful planning, secure loading, and a reliable delivery on the other end. We've refined every part of this process over hundreds of successful cross-country relocations — and we put that experience to work on every move we take, big or small.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed">
              Whether you're moving for a new job, downsizing, reuniting with family, or starting fresh somewhere new — we're here to make the journey safe, reliable, and as stress-free as possible. <strong>You focus on your next chapter. We'll handle everything from the first box to the final placement.</strong>
            </p>
          </div>
        </div>

        {/* ── WHAT'S INCLUDED ─────────────────────────────────────── */}
        <div data-anim-section className="rounded-2xl p-10 mb-20 bg-surface border-2 border-foreground/10">
          <h2 data-anim-item className="font-serif text-3xl font-bold mb-2 text-foreground">
            Everything Included — Spelled Out Before You Book
          </h2>
          <p data-anim-item className="text-muted-foreground mb-8 text-lg font-sans">
            No fine print, no surprise add-ons at the destination. Here's exactly what's included in every long-distance move we do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Free Binding Quote — No Price Surprises", "We assess your home and give you a written, binding price. What we quote is what you pay — guaranteed. No weight adjustments at delivery, no mystery fees."],
              ["Careful Packing by Trained Professionals", "Our crew packs your entire home — or specific rooms — using heavy-duty blankets, double-boxing for fragiles, and proper labeling by room. Full-service packing means you don't touch a single box."],
              ["Furniture Disassembly & Reassembly", "All beds, shelving, and large furniture are safely disassembled before loading and fully reassembled at your new home. We bring the tools — you don't need to worry about a thing."],
              ["Protective Wrapping on Every Piece", "Every item of furniture is wrapped in heavy moving blankets and secured with shrink wrap before going on the truck. Fragile and high-value items get extra padding and custom care."],
              ["Dedicated Move Coordinator", "One real person manages your move from booking to delivery. They know your inventory, your timeline, and your concerns — and they're reachable throughout the entire process."],
              ["Reliable, On-Time Delivery", "We plan your route and delivery window carefully and communicate it clearly. If anything changes, we'll tell you immediately. We don't leave you wondering where your belongings are."],
              ["Storage-in-Transit Available", "Gap between your move-out and move-in dates? We offer secure, clean storage at our facilities — short or long term — so your belongings stay safe until you're ready."],
              ["Specialty Item Handling", "Pianos, large artwork, antiques, safes, and high-value items get individual attention, custom crating where needed, and careful handling by movers who know how to do it right."],
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
            <h2 data-anim-item className="font-serif text-4xl font-bold text-foreground">How a King Movers Long-Distance Move Works</h2>
            <p data-anim-item className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              A clear, simple process from start to finish — so you're never left guessing, and nothing falls through the cracks.
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
          aria-label="Long distance moving gallery"
        >
          <div className="text-center mb-8">
            <h2 data-anim-item className="font-serif text-3xl font-bold text-foreground">
              Long Distance Moving Gallery
            </h2>
            <p
              data-anim-item
              className="text-muted-foreground mt-3 text-base md:text-lg font-sans max-w-2xl mx-auto"
            >
              Our fleet and crew ready for the road — safely moving your belongings from Arizona to any destination across the country.
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
              {LONG_DISTANCE_GALLERY.map((img, index) => (
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
                src="/images/0.jpg"
                alt="Movers carefully packing items"
                className="w-full h-full object-cover"
              />
            </div>
            <p data-anim-item className="text-sm text-muted-foreground mt-2 italic text-center font-sans">
              Our packing team treats every item as if it were their own.
            </p>
          </div>
          <div className="w-full lg:w-7/12">
            <h2 data-anim-item className="font-serif text-4xl font-bold leading-tight mb-5 text-foreground">
              Safe Delivery Hundreds of Miles Away Starts With How We Pack Here
            </h2>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              Long-distance moves fail at the packing stage. A box that isn't reinforced won't survive 600 miles. Furniture that isn't wrapped tight arrives scratched or broken. A missing inventory means you don't know what you're missing until it's too late. These aren't freak accidents — they're the result of a crew that cut corners, and it's completely avoidable.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our teams follow a strict packing and loading protocol on every long-distance job. Every item is inventoried and labeled. Every box is properly reinforced and marked by room. Every piece of furniture is wrapped in heavy blankets and secured with straps. Nothing gets thrown on the truck carelessly — because it has hundreds of miles to travel.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              We maintain our trucks and equipment to a high standard. Clean, well-maintained vehicles mean fewer breakdowns and more reliable delivery windows. Our crews inspect their equipment before every job — straps, pads, dollies, all of it.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed">
              The result is a move that arrives exactly as it left — safe, intact, and on time. <strong>That's not luck. That's a process built and refined on hundreds of successful long-distance relocations.</strong>
            </p>
          </div>
        </div>

        {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
        <div data-anim-section className="mb-20">
          <div className="text-center mb-10">
            <h2 data-anim-item className="font-serif text-4xl font-bold text-foreground">Why Arizona Families Choose King Movers for Long-Distance Moves</h2>
            <p data-anim-item className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              Long-distance moving is a big decision. Here's why thousands of families trust us with it — and why so many refer us to friends and family afterwards.
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

        {/* ── SERVICES WE COVER ────────────────────────────────────── */}
        <div data-anim-section className="rounded-2xl p-10 mb-20 bg-primary text-white">
          <h2 data-anim-item className="font-serif text-3xl font-bold mb-3">Moving from Arizona to <span className="bg-white/10 px-2 py-1 rounded-md">Anywhere</span> in the Country</h2>
          <p data-anim-item className="text-white/80 mb-6 text-lg font-sans">
            Our long-distance moving service covers all 50 states. Whether you're heading to California, Texas, Colorado, Florida, or the Pacific Northwest — we plan the route, pack everything carefully, and deliver on time. You'll have one dedicated coordinator throughout, transparent pricing locked in upfront, and full insurance coverage for the entire journey.
          </p>
          <p data-anim-item className="text-white/70 text-sm font-sans">
            Ready to get started? Call {CONTACT_INFO.officePhone} (office) or{" "}
            {CONTACT_INFO.directPhone} / {CONTACT_INFO.directPhone2DisplaySpaced} (direct), or request
            a free quote below — we'll build your move plan and give you a binding price with zero
            pressure.
          </p>
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-sans">
            {[
              "New York → Florida",
              "California → Texas",
              "Illinois → Arizona",
              "New York → California",
              "Texas → Colorado",
              "Florida → New York",
              "Ohio → Georgia",
              "Washington → Nevada",
              "Pennsylvania → North Carolina",
              "Virginia → Tennessee",
              "Massachusetts → South Carolina",
              "Michigan → Florida",
            ].map((route) => (
              <div
                key={route}
                data-anim-item
                className="px-4 py-3 rounded-lg text-sm font-semibold bg-white/10 border border-white/20"
              >
                📍 {route}
              </div>
            ))}
          </div>
          <p data-anim-item className="text-white/70 mt-6 font-sans text-sm">
            Don't see your route? We move to and from all cities and states. Contact us for a custom quote.
          </p> */}
        </div>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <div data-anim-section className="mb-20">
          <div className="text-center mb-10">
            <h2 data-anim-item className="font-serif text-4xl font-bold text-foreground">
              Long-Distance Moving FAQs — Answered Honestly
            </h2>
            <p data-anim-item className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              We know a long-distance move raises a lot of questions. Here are the most common ones we hear — answered straight, no fluff.
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
            Ready to Make Your Long-Distance Move? Get a Free Quote Today.
          </h2>
          <p data-anim-item className="text-white/90 text-lg md:text-xl mb-8 font-sans leading-relaxed">
            Reliable, insured, and transparent — we make long-distance moves simple. Get your free binding estimate today. We'll walk you through everything, lock in a firm price, and build a plan around your timeline. No pressure, no hidden costs.
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
