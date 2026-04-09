"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { submitFormSubmit } from "@/lib/formsubmit";
import { FORMSUBMIT_ACTION } from "@/components/contact-us/contactData";

gsap.registerPlugin(ScrollTrigger);

export default function HeroQuoteBar() {
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

      const formItems = form
        ? Array.from(form.querySelectorAll("input, select, button, p"))
        : [];

      gsap.set(card, {
        opacity: 0,
        y: 46,
        rotateX: 8,
        transformPerspective: 900,
        transformOrigin: "50% 0%",
      });
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
        .to(formItems, { opacity: 1, y: 0, duration: 1.0, stagger: 0.06 }, "-=0.85");

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

  const inputCls =
    "w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/55 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition";
  const selectCls =
    "w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition appearance-none cursor-pointer [&>option]:bg-foreground [&>option]:text-white";

  return (
    <section ref={sectionRef} className="relative w-full py-10 px-4 sm:px-6 md:px-12 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(86,26,140,1) 0%, rgba(86,26,140,1) 45%, rgba(15,15,20,1) 100%)",
          }}
        >
          {/* subtle dot pattern */}
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
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

              {/* Left text */}
              <div ref={leftTextRef} className="shrink-0 xl:max-w-[240px]">
                <p className="text-white/80 text-xs tracking-[0.22em] uppercase font-semibold">
                  Free Estimate
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight mt-2">
                  Get a fast quote for your move
                </h3>
                <p className="text-white/70 text-sm mt-2">
                  Takes less than a minute.
                </p>
              </div>

              {/* Form */}
              <form
                ref={formRef}
                action="#"
                method="POST"
                className="w-full xl:flex-1"
                data-formsubmit-action={FORMSUBMIT_ACTION}
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (submitting) return;
                  setSubmitting(true);
                  try {
                    await submitFormSubmit(e.currentTarget, {
                      successMessage:
                        "Thanks! We'll follow up with your moving quote shortly.",
                    });
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="King Moving — Quick quote bar" />
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden
                />

                {/* Row 1 — 3 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                  <div>
                    <label className="sr-only" htmlFor="hq-name">Full name</label>
                    <input
                      id="hq-name"
                      name="name"
                      type="text"
                      placeholder="Full name"
                      required
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="hq-phone">Phone number</label>
                    <input
                      id="hq-phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      required
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="hq-date">Move date</label>
                    <input
                      id="hq-date"
                      name="move_date"
                      type="date"
                      required
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Row 2 — 4 cols + button */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div>
                    <label className="sr-only" htmlFor="hq-from">Moving from</label>
                    <input
                      id="hq-from"
                      name="moving_from"
                      type="text"
                      placeholder="Moving from (city)"
                      required
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="hq-to">Moving to</label>
                    <input
                      id="hq-to"
                      name="moving_to"
                      type="text"
                      placeholder="Moving to (city)"
                      required
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="hq-size">Home size</label>
                    <select
                      id="hq-size"
                      name="home_size"
                      required
                      defaultValue=""
                      className={selectCls}
                    >
                      <option value="" disabled>Home size</option>
                      <option value="Studio / 1-Bedroom">Studio / 1-Bed</option>
                      <option value="2-Bedroom">2-Bedroom</option>
                      <option value="3-Bedroom">3-Bedroom</option>
                      <option value="4+ Bedroom">4+ Bedroom</option>
                      <option value="Office / Commercial">Office</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-xl bg-accent hover:bg-accent/90 text-foreground font-bold text-sm px-5 py-3 transition-colors shadow-[0_10px_24px_rgba(254,195,77,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "Get My Quote"}
                  </button>
                </div>

                <p className="text-white/55 text-xs mt-3">
                  No captcha. We&apos;ll contact you with pricing options.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
