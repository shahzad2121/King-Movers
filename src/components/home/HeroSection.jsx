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
  { img: "/images/Truck-1-for-social-media.jpg", alt: "Moving truck" },
  { img: "/images/hero/Kingsmovinging-service.jpg", alt: "King Moving Services" },
  { img: "/images/service.jpg", alt: "Moving and logistics" },
];
const CTA_LABEL = "Get Your Free Estimate Today";

const HERO_BADGES = [
  { src: "/images/angi-kings-moving.png", alt: "Angi Certified" },
  { src: "/images/boha-2021-solid-border.png", alt: "Boha 2021" },
  { src: "/images/toprated-solid-border.png", alt: "Top Rated" },
];

const HERO_TESTIMONIALS = [
  {
    text: "Best moving experience ever. Professional, on time, and took great care of our belongings.",
    name: "Sarah M.",
    rating: 5,
  },
  {
    text: "They made our cross-town move stress-free. Highly recommend King Moving!",
    name: "James K.",
    rating: 5,
  },
  {
    text: "Fast, reliable, and affordable. Will definitely use them again for our next move.",
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
          className="font-hero-heading text-foreground font-semibold leading-[1.15] mb-7"
          style={{
            fontSize: "clamp(32px, 3.2vw, 50px)",
            letterSpacing: "-0.02em",
          }}
        >
          Trusted Seattle
          <br />
          Moving for Families
          <br />
          &amp; Businesses
        </h1>

        <p ref={subtitleRef} className="font-hero-body text-muted-foreground text-base leading-relaxed max-w-[380px] mb-8">
          Stress-free, affordable moves across Seattle and beyond.
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

        <a
          ref={ctaRef}
          href="#"
          className="font-hero-body inline-flex items-center bg-primary text-white text-base font-medium px-8 py-4 rounded-full w-fit hover:bg-primary/90 transition-all hover:-translate-y-0.5"
          style={{ letterSpacing: "-0.01em" }}
        >
          {CTA_LABEL}
        </a>
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
