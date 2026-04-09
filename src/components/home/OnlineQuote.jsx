"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { submitFormSubmit } from "@/lib/formsubmit";
import { FORMSUBMIT_ACTION } from "@/components/contact-us/contactData";

gsap.registerPlugin(ScrollTrigger);

export default function OnlineQuote() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const headingRef = useRef(null);
  const formCardRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const left = leftRef.current;
      const heading = headingRef.current;
      const formCard = formCardRef.current;
      const right = rightImageRef.current;

      gsap.set([left, right], { opacity: 1 });
      gsap.set(heading, { opacity: 0, y: 26 });
      gsap.set(formCard, { opacity: 0, y: 50, scale: 0.94, rotateX: 8, transformPerspective: 900, filter: "blur(6px)" });
      if (right) {
        gsap.set(right, { opacity: 0, y: 30, scale: 1.04 });
      }

      if (reduceMotion) {
        gsap.set([heading, formCard, right], { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "none" });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power4.out" },
      });

      tl.to(heading, { opacity: 1, y: 0, duration: 1.0 }, 0)
        .to(
          formCard,
          { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)", duration: 1.2 },
          0.15
        );

      if (right) {
        tl.to(
          right,
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out" },
          0.25
        );

        // subtle parallax for right image
        gsap.to(right, {
          y: 25,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-[600px] md:min-h-[640px] flex scroll-mt-[88px]"
    >
      {/* LEFT: Dark navy with world map bg */}
      <div
        ref={leftRef}
        className="relative w-full md:w-1/2 bg-[#0d1b2a] flex flex-col justify-start pt-14 px-10 md:px-16 pb-14 md:pb-16"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "luminosity",
        }}
      >
        {/* Overlay to darken map */}
        <div className="absolute inset-0 bg-[#0d1b2a] opacity-20 pointer-events-none" />

        {/* Text */}
        <div ref={headingRef} className="relative z-10 mb-10">
          <p className="text-primary font-semibold text-sm mb-3 tracking-wide">Free Moving Quote</p>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-snug">
            Book Your Move <br /> in Minutes
          </h2>
        </div>

        {/* White form card — overlaps both halves */}
        <div
          ref={formCardRef}
          className="relative z-50 bg-background shadow-2xl p-8 w-full md:w-[130%] rounded-sm"
        >
          <form
            action="#"
            method="POST"
            className="space-y-4"
            data-formsubmit-action={FORMSUBMIT_ACTION}
            onSubmit={async (e) => {
              e.preventDefault();
              if (submitting) return;
              setSubmitting(true);
              setSubmitted(false);
              try {
                const ok = await submitFormSubmit(e.currentTarget, {
                  successMessage:
                    "Thanks! Your quote request was sent. We'll contact you shortly.",
                });
                if (ok) setSubmitted(true);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="King Moving — Free quote (homepage)" />
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="bg-surface text-foreground placeholder-muted-foreground text-sm px-4 py-4 outline-none focus:ring-2 focus:ring-primary transition"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone number"
                className="bg-surface text-foreground placeholder-muted-foreground text-sm px-4 py-4 outline-none focus:ring-2 focus:ring-primary transition"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="bg-surface text-foreground placeholder-muted-foreground text-sm px-4 py-4 outline-none focus:ring-2 focus:ring-primary transition sm:col-span-2"
              />
              <input
                type="text"
                name="moving_from"
                required
                placeholder="Moving from (city, state)"
                className="bg-surface text-foreground placeholder-muted-foreground text-sm px-4 py-4 outline-none focus:ring-2 focus:ring-primary transition"
              />
              <input
                type="text"
                name="moving_to"
                required
                placeholder="Moving to (city, state)"
                className="bg-surface text-foreground placeholder-muted-foreground text-sm px-4 py-4 outline-none focus:ring-2 focus:ring-primary transition"
              />
              <input
                type="date"
                name="move_date"
                required
                className="bg-surface text-foreground placeholder-muted-foreground text-sm px-4 py-4 outline-none focus:ring-2 focus:ring-primary transition"
              />
              <select
                name="home_size"
                required
                defaultValue=""
                className="bg-surface text-muted-foreground text-sm px-4 py-4 outline-none focus:ring-2 focus:ring-primary transition appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Home size
                </option>
                <option value="Studio / 1-Bedroom">Studio / 1-Bedroom</option>
                <option value="2-Bedroom">2-Bedroom</option>
                <option value="3-Bedroom">3-Bedroom</option>
                <option value="4+ Bedroom">4+ Bedroom</option>
                <option value="Office / Commercial">Office / Commercial</option>
              </select>
            </div>

            <select
              name="service_type"
              required
              defaultValue=""
              className="w-full bg-surface text-muted-foreground text-sm px-4 py-4 outline-none focus:ring-2 focus:ring-primary transition appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Select service type
              </option>
              <option value="Local Moving">Local Moving</option>
              <option value="Long-Distance Moving">Long-Distance Moving</option>
              <option value="Packing & Unpacking">Packing &amp; Unpacking</option>
              <option value="Commercial / Office Move">Commercial / Office Move</option>
              <option value="Storage Solutions">Storage Solutions</option>
            </select>

            {submitted && (
              <p className="text-sm text-foreground border border-primary/20 bg-primary/5 px-4 py-3">
                Thanks! Your quote request has been sent. We will contact you shortly.
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm px-10 py-4 transition-colors duration-200 tracking-wide"
            >
              {submitting ? "Sending..." : "Get My Free Quote"}
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT: Truck image */}
      <div
        ref={rightImageRef}
        className="hidden md:block relative w-1/2 min-h-[600px] md:min-h-[640px]"
      >
        <Image
          src="/images/Truck-4.jpg"
          alt="Moving truck"
          fill
          className="object-cover"
          sizes="50vw"
        />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-200"
          >
            <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
