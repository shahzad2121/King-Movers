"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const HERO_SLIDES = [
  {
    img: "/images/Truck-1-for-social-media.jpg",
    alt: "King Moving Services professional movers and moving truck for local and long-distance relocation",
  },
  {
    img: "/images/hero/Kingsmovinging-service.jpg",
    alt: "King Moving Services licensed residential and commercial moving company crew",
  },
  {
    img: "/images/service.jpg",
    alt: "Full-service packing loading and moving logistics for homes and businesses",
  },
];
const CTA_LABEL = "Get a Free Quote";
const PHONE = "480-447-1200";

const HERO_BADGES = [
  { src: "/images/angi-kings-moving.png", alt: "Angi Certified" },
  { src: "/images/boha-2021-solid-border.png", alt: "Boha 2021" },
  { src: "/images/toprated-solid-border.png", alt: "Top Rated" },
];

const HERO_TESTIMONIALS = [
  {
    text: "Best professional movers we have hired—on time, careful with furniture, and clear communication from quote to delivery.",
    name: "Sarah M.",
    rating: 5,
  },
  {
    text: "Our local move was stress-free. This moving company handled packing and loading with care—highly recommend King Moving Services.",
    name: "James K.",
    rating: 5,
  },
  {
    text: "Reliable long-distance relocation at a fair price. We will book them again for our next residential move.",
    name: "Lisa T.",
    rating: 5,
  },
];

function FloatingTestimonialCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setTextOpacity(0);
      setTimeout(() => {
        setActiveIndex((i) => (i + 1) % HERO_TESTIMONIALS.length);
        setTextOpacity(1);
      }, 600);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const review = HERO_TESTIMONIALS[activeIndex];

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 bottom-8 z-20 w-[min(94%,480px)] pointer-events-none"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-foreground/5 flex items-center gap-4">
        <div className="shrink-0 flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 fill-accent text-accent" strokeWidth={1.5} />
          ))}
        </div>
        <div className="flex-1 min-w-0">
          <p
            className="font-hero-body text-foreground text-sm leading-relaxed transition-opacity duration-700 ease-in-out"
            style={{ opacity: textOpacity }}
          >
            &ldquo;{review.text}&rdquo; — {review.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgesRef = useRef(null);
  const ctaRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const subtitle = subtitleRef.current;
    const badges = badgesRef.current;
    const cta = ctaRef.current;
    const slider = sliderRef.current;

    if (!section || !headline) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Initial dramatic states
      gsap.set(headline, { opacity: 0, y: 40 });
      gsap.set(subtitle, { opacity: 0, y: 32 });
      gsap.set(badges, { opacity: 0, y: 28 });
      gsap.set(cta, { opacity: 0, y: 26, scale: 0.96 });
      if (slider) {
        gsap.set(slider, { opacity: 0, y: 30, scale: 1.08, filter: "blur(6px)" });
      }

      if (reduceMotion) {
        gsap.set(
          [headline, subtitle, badges, cta, slider],
          { opacity: 1, y: 0, scale: 1, filter: "none" }
        );
        return;
      }

      // Cinematic entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(headline, { opacity: 1, y: 0, duration: 1.3 }, 0)
        .to(subtitle, { opacity: 1, y: 0, duration: 1.1 }, 0.25)
        .to(badges, { opacity: 1, y: 0, duration: 1.0 }, 0.45)
        .to(cta, { opacity: 1, y: 0, scale: 1, duration: 1.0 }, 0.7);

      if (slider) {
        tl.to(
          slider,
          { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.6, ease: "power3.out" },
          0.2
        );

        // Smooth parallax on scroll for the slider column
        gsap.to(slider, {
          y: 30,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-88px)] overflow-hidden"
    >
      {/* Left content */}
      <div className="bg-background flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 lg:py-10">
        <h1
          ref={headlineRef}
          className="font-hero-heading text-foreground font-semibold leading-[1.12] mb-7"
          style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            letterSpacing: "-0.03em",
          }}
        >
          Stress-Free Moving
          <br />
          Services You Can
          <br />
          Trust
        </h1>

        <p ref={subtitleRef} className="font-hero-body text-muted-foreground text-base leading-relaxed max-w-[460px] mb-8">
          Local &amp; long-distance moves with{" "}
          <strong className="font-semibold text-foreground/90">transparent pricing</strong> and{" "}
          <strong className="font-semibold text-foreground/90">professional crews</strong>. Licensed, insured, and
          trusted by thousands of families and businesses across Arizona.
        </p>

        {/* Trust badges - no card, larger for credibility */}
        <div ref={badgesRef} className="flex flex-wrap gap-4 mb-10">
          {HERO_BADGES.map((badge) => (
            <div key={badge.alt} className="relative w-36 h-24 shrink-0">
              <Image
                src={badge.src}
                alt={badge.alt}
                fill
                className="object-contain"
                sizes="144px"
              />
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#quote"
            className="font-hero-body inline-flex items-center bg-primary text-white text-base font-medium px-8 py-4 rounded-full w-fit hover:bg-primary/90 transition-all hover:-translate-y-0.5"
            style={{ letterSpacing: "-0.01em" }}
          >
            {CTA_LABEL}
          </a>
          <a
            href={`tel:${PHONE}`}
            className="font-hero-body inline-flex items-center gap-2 text-foreground font-semibold text-base hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            {PHONE}
          </a>
        </div>
      </div>

      {/* Right image slider */}
      <div
        ref={sliderRef}
        className="relative min-h-[50vw] lg:min-h-0 overflow-hidden hero-slider-wrapper"
      >
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          speed={1200}
          pagination={{ clickable: true }}
          className="!absolute inset-0 w-full h-full"
        >
          {HERO_SLIDES.map((slide, i) => (
            <SwiperSlide key={i} className="!h-full">
              <img
                src={slide.img}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-[1]" aria-hidden />
      </div>

      {/* Floating testimonial card - between columns */}
      <div className="hidden lg:block">
        <FloatingTestimonialCard />
      </div>

      {/* Animated truck - moves left to right at bottom edge */}
      {/* <div
        className="absolute bottom-0 left-0 right-0 h-24 overflow-visible pointer-events-none z-10"
        aria-hidden
      >
        <img
          src="/images/truck.png"
          alt=""
          className="absolute left-0 bottom-0 w-24 h-16 object-contain object-left-bottom"
          style={{
            animation: "heroTruckMove 18s linear infinite",
          }}
        />
      </div> */}
    </section>
  );
}
