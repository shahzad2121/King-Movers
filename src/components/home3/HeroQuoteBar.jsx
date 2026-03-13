"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { submitFormSubmit } from "@/lib/formsubmit";

gsap.registerPlugin(ScrollTrigger);

export default function HeroQuoteBar() {
  const [service, setService] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const leftTextRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const card = cardRef.current;
      const left = leftTextRef.current;
      const form = formRef.current;
      if (!card) return;

      const formItems = form ? Array.from(form.querySelectorAll("input, select, button, p")) : [];

      gsap.set(card, { opacity: 0, y: 46, rotateX: 8, transformPerspective: 900, transformOrigin: "50% 0%" });
      gsap.set(left, { opacity: 0, y: 18 });
      gsap.set(formItems, { opacity: 0, y: 16 });

      if (reduceMotion) {
        gsap.set([card, left, formItems], { opacity: 1, y: 0, rotateX: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power4.out" },
      });

      tl.to(card, { opacity: 1, y: 0, rotateX: 0, duration: 1.35 })
        .to(left, { opacity: 1, y: 0, duration: 1.05 }, "-=0.95")
        .to(formItems, {  opacity: 1, y: 0, duration: 1.0, stagger: 0.06 }, "-=0.85");

      // Gentle breathing glow (very WordPress)
      gsap.to(card, {
        boxShadow: "0 26px 90px rgba(0,0,0,0.45)",
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.4,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full px-4 sm:px-6 md:px-12 -mt-10 z-30">
      <div className="max-w-[1440px] mx-auto">
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(86,26,140) 0%, rgba(86,26,140) 45%, rgba(15,15,20) 100%)",
          }}
        >
          {/* subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.09]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(254,195,77,0.35) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden
          />

          <div className="relative px-5 sm:px-7 md:px-8 py-6 md:py-7">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div ref={leftTextRef} className="min-w-0">
                <p className="text-white/80 text-xs tracking-[0.22em] uppercase font-semibold">
                  Quick Estimate
                </p>
                <h3 className="font-hero-heading text-white text-2xl md:text-3xl font-semibold leading-tight mt-2">
                  Get a fast quote for your next move
                </h3>
                <p className="font-hero-body text-white/70 text-sm mt-2 max-w-2xl">
                  Share a few details and we’ll follow up with pricing options.
                </p>
              </div>

              <form
              ref={formRef}
              action="#"
              method="POST"
              className="w-full lg:max-w-3xl"
              data-formsubmit-action="https://formsubmit.co/info@kingsmovingservices.com"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                if (submitting) return;
                setSubmitting(true);
                try {
                  const ok = await submitFormSubmit(form);
                  if (ok) setService("");
                } finally {
                  setSubmitting(false);
                }
              }}
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

                  <label className="sr-only" htmlFor="hq-name">Name</label>
                  <input
                    id="hq-name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    className="font-hero-body w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/55 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
                  />

                  <label className="sr-only" htmlFor="hq-email">Email</label>
                  <input
                    id="hq-email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="font-hero-body w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/55 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
                  />

                  <label className="sr-only" htmlFor="hq-pickup">Pickup Zip</label>
                  <input
                    id="hq-pickup"
                    name="pickup_zip"
                    type="text"
                    placeholder="Pickup Zip Code"
                    required
                    className="font-hero-body w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/55 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
                  />

                  <label className="sr-only" htmlFor="hq-destination">Destination Zip</label>
                  <input
                    id="hq-destination"
                    name="destination_zip"
                    type="text"
                    placeholder="Destination Zip"
                    required
                    className="font-hero-body w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/55 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition"
                  />

                  <label className="sr-only" htmlFor="hq-service">Service</label>
                  <select
                    id="hq-service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="font-hero-body w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition appearance-none cursor-pointer [&>option]:bg-foreground [&>option]:text-white"
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

                  <button
                    type="submit"
                    disabled={submitting}
                    className="font-hero-body rounded-xl bg-accent hover:bg-accent/90 text-foreground font-bold text-sm px-5 py-3 transition-colors shadow-[0_10px_24px_rgba(254,195,77,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "Get an estimate"}
                  </button>
                </div>

                <p className="font-hero-body text-white/60 text-xs mt-3">
                  We’ll contact you with your moving quote.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

