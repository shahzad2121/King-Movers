"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { submitFormSubmit } from "@/lib/formsubmit";

gsap.registerPlugin(ScrollTrigger);

export default function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const headingRef = useRef(null);

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

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.6 }
    ).fromTo(
      formRef.current,
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.3"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="quote"
      className="relative w-full py-24 px-4 sm:px-6 md:px-12 overflow-hidden scroll-mt-[88px]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero/moving-boxes.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/85" aria-hidden />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto">
          
          {/* Heading */}
          <div ref={headingRef} className="text-center mb-12">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Free Estimate
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Get Your Moving Quote
            </h2>

            <p className="text-white/70 text-sm mt-3 max-w-md mx-auto">
              Fill in the details below and we'll get back to you with a custom quote.
            </p>
          </div>

          {/* Form card */}
          <div
            ref={formRef}
            className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10"
          >
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-primary"
              aria-hidden
            />

            <form
            action="#"
            method="POST"
            className="space-y-5"
            data-formsubmit-action="https://formsubmit.co/info@kingsmovingservices.com"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              if (submitting) return;
              setSubmitting(true);
              try {
                await submitFormSubmit(form);
              } finally {
                setSubmitting(false);
              }
            }}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: "none" }} />
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quote-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/50 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                  />
                </div>

                <div>
                  <label htmlFor="quote-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/50 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                  />
                </div>
              </div>

              {/* Zip Codes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="pickup-zip" className="sr-only">
                    Pickup Zip Code
                  </label>
                  <input
                    id="pickup-zip"
                    name="pickup_zip"
                    type="text"
                    placeholder="Pickup Zip Code"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/50 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                  />
                </div>

                <div>
                  <label htmlFor="destination-zip" className="sr-only">
                    Destination Zip Code
                  </label>
                  <input
                    id="destination-zip"
                    name="destination_zip"
                    type="text"
                    placeholder="Destination Zip Code"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/50 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div>
                <label htmlFor="quote-service" className="sr-only">
                  Select Service
                </label>

                <select
                  id="quote-service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition appearance-none cursor-pointer [&>option]:bg-foreground [&>option]:text-white"
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option value="local">Local</option>
                  <option value="long_distance">Long Distance</option>
                  <option value="corporate">Corporate</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-sm py-4 rounded-lg transition-colors duration-200 tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Get Free Quote"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}