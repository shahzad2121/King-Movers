"use client";

import { useState, useEffect, useRef } from "react";

// Real client reviews (same source as home page 1)
const reviews = [
  {
    id: 1,
    text:
      "Kings moving services was one of the best decisions ever! I received 6 quotes to help with my interstate move. Kings was BY FAR the cheapest and David was extremely communicative and helpful throughout the entire process.",
    rating: 5,
    name: "Alex H.",
    role: "Out-of-State Moving Service",
  },
  {
    id: 2,
    text:
      "Kings took great care to ensure our family and our things were well taken care of during a difficult time. They were easy to work with, communicated well, and were on or ahead of schedule.",
    rating: 5,
    name: "Jeffrey K.",
    role: "Out-of-State Moving Service",
  },
  {
    id: 3,
    text:
      "Kings made sure that I understood every part of the moving process. On moving day the crew worked quickly and carefully to make sure everything was wrapped and loaded on the truck in no time.",
    rating: 5,
    name: "Eve M.",
    role: "Out-of-State Moving Service",
  },
  {
    id: 4,
    text:
      "Always returned calls with answers if they needed to. Very professional and not a broker. I would definitely hire them again!",
    rating: 5,
    name: "Deborah C.",
    role: "Out-of-State Moving Service",
  },
  {
    id: 5,
    text:
      "Great moving company! They came on time and did a fantastic job. Packing was done very well and nothing got broken. I appreciate their job well done.",
    rating: 5,
    name: "Mirjam D.",
    role: "Local Move",
  },
];

const extendedReviews = [...reviews, ...reviews, ...reviews];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <svg key={star} className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
            <defs>
              <linearGradient id={`half-${star}-${rating}`}>
                <stop offset="50%" stopColor="var(--accent)" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill={filled ? "var(--accent)" : half ? `url(#half-${star}-${rating})` : "none"}
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
          </svg>
        );
      })}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-2xl p-7 flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <span className="font-serif text-6xl leading-none text-gray-200 select-none" aria-hidden>
        &ldquo;
      </span>
      <p className="text-black text-sm leading-relaxed mb-4 flex-1 -mt-2">{review.text}</p>
      <StarRating rating={review.rating} />
      <div className="mt-3 pt-3 border-t border-gray-100">
        <p className="text-black font-semibold text-base">{review.name}</p>
        <p className="text-gray-600 text-sm">{review.role}</p>
      </div>
    </div>
  );
}

const DESKTOP_CARD_WIDTH = 420;
const DESKTOP_GAP = 16;
const MOBILE_GAP = 12;
const START_INDEX = reviews.length;

export default function TestimonialsSectionHome2() {
  const [index, setIndex] = useState(START_INDEX);
  const [animated, setAnimated] = useState(true);
  const [layout, setLayout] = useState({ cardWidth: DESKTOP_CARD_WIDTH, gap: DESKTOP_GAP });
  const indexRef = useRef(START_INDEX);
  const timerRef = useRef(null);

  useEffect(() => {
    const computeLayout = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1024;
      if (w < 640) {
        const cardWidth = Math.max(260, Math.min(340, Math.floor(w * 0.86)));
        setLayout({ cardWidth, gap: MOBILE_GAP });
        return;
      }
      setLayout({ cardWidth: DESKTOP_CARD_WIDTH, gap: DESKTOP_GAP });
    };

    computeLayout();
    window.addEventListener("resize", computeLayout, { passive: true });
    return () => window.removeEventListener("resize", computeLayout);
  }, []);

  const goTo = (newIndex, animate = true) => {
    setAnimated(animate);
    setIndex(newIndex);
    indexRef.current = newIndex;
  };

  const slideNext = () => {
    const next = indexRef.current + 1;
    goTo(next);
    if (next >= reviews.length * 2) {
      setTimeout(() => goTo(START_INDEX, false), 600);
    }
  };

  const slidePrev = () => {
    const prev = indexRef.current - 1;
    goTo(prev);
    if (prev < reviews.length) {
      setTimeout(() => goTo(reviews.length * 2 - 1, false), 600);
    }
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(slideNext, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handlePrev = () => {
    slidePrev();
    startTimer();
  };
  const handleNext = () => {
    slideNext();
    startTimer();
  };

  const step = layout.cardWidth + layout.gap;
  const translateX = `calc(-${index * step}px + 50vw - ${layout.cardWidth / 2}px)`;

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden" style={{ backgroundColor: "rgba(15, 15, 20, 0.85)"  }}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="text-center sm:text-left">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">
              Testimonials
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
              Customers Feedback
            </h2>
            <p className="text-white/70 text-base max-w-lg">
              Real feedback from our clients that reflects our quality, reliability, and commitment to excellence.
            </p>
          </div>
          <div className="flex gap-3 justify-center sm:justify-end shrink-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel track */}
      <div className="relative z-10 w-full">
        <div
          className="flex"
          style={{
            gap: `${layout.gap}px`,
            transform: `translateX(${translateX})`,
            transition: animated
              ? "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "none",
            willChange: "transform",
          }}
        >
          {extendedReviews.map((review, i) => (
            <div
              key={i}
              style={{ width: `${layout.cardWidth}px`, flexShrink: 0, minHeight: "280px" }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
