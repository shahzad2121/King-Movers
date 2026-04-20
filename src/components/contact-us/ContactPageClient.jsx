"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import AboutCtaSection from "@/components/about/sections/AboutCtaSection";

import { submitFormSubmit } from "@/lib/formsubmit";
import { CONTACT_INFO, FORMSUBMIT_CONTACT_ACTION } from "@/components/contact-us/contactData";

function InfoCard({ icon: Icon, title, children }) {
  return (
    <article className="rounded-2xl border border-primary/12 bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-primary/12 md:p-6">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-foreground md:text-2xl">{title}</h3>
      <div className="mt-2 text-[15px] leading-relaxed text-foreground/72 md:text-base">{children}</div>
    </article>
  );
}

export default function ContactPageClient() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const cardsRef = useRef(null);
  const splitRef = useRef(null);
  const formColRef = useRef(null);
  const mapColRef = useRef(null);
  const quickRef = useRef(null);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const heroCtx = gsap.context(() => {
      const children = heroContentRef.current?.children || [];
      gsap.set(children, { opacity: 0, y: 24 });
      if (reduceMotion) {
        gsap.set(children, { opacity: 1, y: 0 });
        return;
      }
      gsap.to(children, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.11,
      });
    }, heroRef);

    const cardsCtx = gsap.context(() => {
      if (reduceMotion) return;
      gsap.fromTo(
        ".contact-info-card",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: cardsRef.current, start: "top 84%" },
        }
      );
    }, cardsRef);

    const splitCtx = gsap.context(() => {
      if (reduceMotion) return;
      gsap.fromTo(
        formColRef.current,
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: splitRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        mapColRef.current,
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: splitRef.current, start: "top 80%" },
        }
      );
    }, splitRef);

    const quickCtx = gsap.context(() => {
      if (reduceMotion) return;
      gsap.fromTo(
        quickRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: quickRef.current, start: "top 90%" },
        }
      );
    }, quickRef);

    return () => [heroCtx, cardsCtx, splitCtx, quickCtx].forEach((ctx) => ctx.revert());
  }, []);

  return (
    <div className="bg-background">
      <section ref={heroRef} className="relative min-h-[65vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1800&q=80')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(86,26,140,0.90) 0%, rgba(20,11,34,0.92) 100%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-[1180px] items-center px-4 py-20 text-center sm:px-6 md:px-8">
          <div ref={heroContentRef} className="mx-auto max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-accent/35 bg-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Contact King Movers
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.6rem]">
              Get in Touch with King Movers
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/82 md:text-xl">
              Let&apos;s make your move simple, fast, and stress-free.
            </p>
            <a
              href="/#quote"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-accent/90"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      <section ref={cardsRef} className="px-4 py-12 sm:px-6 md:px-8 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="contact-info-card">
              <InfoCard icon={Phone} title="Phone">
                <a href={CONTACT_INFO.officePhoneHref} className="block hover:text-primary">
                  Office: {CONTACT_INFO.officePhone}
                </a>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/72 md:text-base">
                  <span className="text-foreground/55">Direct: </span>
                  <a href={CONTACT_INFO.directPhoneHref} className="hover:text-primary">
                    {CONTACT_INFO.directPhone}
                  </a>
                  <span className="text-foreground/45"> or </span>
                  <a href={CONTACT_INFO.directPhone2Href} className="hover:text-primary whitespace-nowrap">
                    {CONTACT_INFO.directPhone2DisplaySpaced}
                  </a>
                </p>
              </InfoCard>
            </div>
            <div className="contact-info-card">
              <InfoCard icon={Mail} title="Email">
                <a href={CONTACT_INFO.emailHref} className="block break-all hover:text-primary">
                  {CONTACT_INFO.email}
                </a>
              </InfoCard>
            </div>
            <div className="contact-info-card">
              <InfoCard icon={MapPin} title="Address">
                <p>{CONTACT_INFO.company}</p>
                <p>{CONTACT_INFO.addressLine1}</p>
                <p>{CONTACT_INFO.addressLine2}</p>
              </InfoCard>
            </div>
            <div className="contact-info-card">
              <InfoCard icon={Clock3} title="Working Hours">
                <p>{CONTACT_INFO.hours}</p>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      <section ref={splitRef} className="px-4 pb-12 sm:px-6 md:px-8 md:pb-14">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <div ref={formColRef} className="rounded-2xl border border-primary/15 bg-surface p-5 md:p-7">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Send us a message</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/72 md:text-base">
              Tell us about your move and our team will contact you quickly. Submissions are sent to{" "}
              <a href={CONTACT_INFO.emailHref} className="font-medium text-primary hover:underline">
                {CONTACT_INFO.email}
              </a>
              .
            </p>

            <form
              action={FORMSUBMIT_CONTACT_ACTION}
              method="POST"
              className="mt-6 space-y-4"
              data-formsubmit-action={FORMSUBMIT_CONTACT_ACTION}
              onSubmit={async (e) => {
                e.preventDefault();
                if (submitting) return;
                setSubmitting(true);
                setSubmitted(false);
                try {
                  const ok = await submitFormSubmit(e.currentTarget, {
                    successMessage:
                      "Thanks! Your message has been sent. We will contact you shortly.",
                  });
                  if (ok) setSubmitted(true);
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="King Moving — Contact form" />
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-foreground/85">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-xl border border-primary/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
                    placeholder="John Smith"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-foreground/85">Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-xl border border-primary/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
                    placeholder="(480) 000-0000"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-foreground/85">Email Address</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-primary/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
                  placeholder="you@example.com"
                />
              </label>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-foreground/85">Moving From</span>
                  <input
                    type="text"
                    name="moving_from"
                    className="w-full rounded-xl border border-primary/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
                    placeholder="Current city or address"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-foreground/85">Moving To</span>
                  <input
                    type="text"
                    name="moving_to"
                    className="w-full rounded-xl border border-primary/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
                    placeholder="Destination city or address"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-foreground/85">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-primary/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
                  placeholder="Share your preferred move date, home size, and any special requests."
                />
              </label>

              {submitted && (
                <p className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground">
                  Thanks! Your message has been sent. We will contact you shortly.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div ref={mapColRef} className="overflow-hidden rounded-2xl border border-primary/15 bg-background">
            <div className="border-b border-primary/10 px-5 py-4 md:px-6">
              <h3 className="text-2xl font-semibold text-foreground md:text-3xl">Visit our office</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground/72 md:text-base">
                {CONTACT_INFO.addressLine1}, {CONTACT_INFO.addressLine2}
              </p>
            </div>
            <div className="h-[420px] w-full">
              <iframe
                title="King Moving Services Office Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.mapQuery)}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      

      <AboutCtaSection />
    </div>
  );
}

