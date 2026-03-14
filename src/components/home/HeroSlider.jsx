"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SLIDES = [
  { img: "/images/Truck-4.jpg", alt: "Moving truck" },
  { img: "/images/service.jpg", alt: "Moving and logistics" },
  { img: "/images/hero/Kingsmovinging-service.jpg", alt: "King Moving Services" },
  { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80", alt: "Moving boxes" },
];

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export default function HeroSlider() {
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full min-h-[calc(100vh-88px)]">
      <Swiper
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={600}
        allowTouchMove
        className="!absolute inset-0 w-full h-full z-0"
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i} className="!h-full">
            <div
              className="w-full h-full bg-foreground/20"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" aria-hidden />

      {/* Fixed content overlay */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none">
        <div className="max-w-4xl mx-auto px-6 text-center pointer-events-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
            Trusted Seattle Moving for Families &amp; Businesses
          </h1>
          <p className="text-white/90 text-lg sm:text-xl mb-8">
            We carry the weight so you can focus on what matters.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-accent text-foreground font-semibold px-6 py-3.5 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Learn More
              <ChevronRight />
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-foreground hover:bg-accent/90 transition-colors"
              aria-label="Play video"
            >
              <PlayIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <div className="absolute inset-y-0 left-0 z-[2] flex items-center pl-4 md:pl-6 pointer-events-none">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-12 h-12 rounded-lg bg-accent text-foreground flex items-center justify-center hover:bg-accent/90 transition-colors pointer-events-auto shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 z-[2] flex items-center pr-4 md:pr-6 pointer-events-none">
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="w-12 h-12 rounded-lg bg-accent text-foreground flex items-center justify-center hover:bg-accent/90 transition-colors pointer-events-auto shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
