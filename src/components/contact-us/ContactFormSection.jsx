"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { submitFormSubmit } from "@/lib/formsubmit";

const contactSlides = [
  {
    image:
      "/images/international-move6.jpg",
    alt: "Moving team loading boxes into a truck",
    badge: "Expert moving crew",
    title: "Every move is handled by trained professionals.",
  },
  {
    image:
      "/images/Ready-to-load.jpg",
    alt: "Packed moving boxes stacked neatly in a living room",
    badge: "Stress-free packing",
    title: "We protect your home and belongings like our own.",
  },
  {
    image:
      "/images/Packing!.jpg",
    alt: "Mover carrying a box through a doorway",
    badge: "On-time arrivals",
    title: "Clear communication from quote to final walkthrough.",
  },
];

export default function ContactSection() {
  const headingId = useId();
  const descriptionId = useId();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="w-full bg-surface py-12 px-4 border-t border-foreground/10">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── LEFT: Form ── */}
          <div className="lg:sticky lg:top-24 lg:self-start rounded-2xl bg-background border border-foreground/10 shadow-sm">
            <div className="p-6 sm:p-8">
              <p className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Get in touch
              </p>
              <h2
                id={headingId}
                className="mt-4 text-2xl sm:text-3xl font-semibold leading-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Contact us with any questions about our moving services or to plan your next move.              </h2>
              <p
                id={descriptionId}
                className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-prose"
              >
                Send us a message and we&apos;ll respond promptly.
              </p>

              <form
                action="#"
                method="POST"
                data-formsubmit-action="https://formsubmit.co/info@kingsmovingservices.com"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (submitting) return;
                  setSubmitting(true);
                  setSubmitted(false);
                  try {
                    const ok = await submitFormSubmit(e.currentTarget);
                    if (ok) {
                      setSubmitted(true);
                      e.currentTarget?.reset?.();
                    }
                  } finally {
                    setSubmitting(false);
                  }
                }}
                className="mt-6 space-y-4"
                aria-labelledby={headingId}
                aria-describedby={descriptionId}
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      autoComplete="given-name"
                      placeholder="Jane"
                      className="w-full rounded-lg border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      autoComplete="family-name"
                      placeholder="Doe"
                      className="w-full rounded-lg border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="(555) 123-4567"
                      className="w-full rounded-lg border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
                    />
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      Optional, but helps us respond faster.
                    </p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="jane@example.com"
                      className="w-full rounded-lg border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us what you need help with…"
                    className="w-full min-h-[120px] rounded-lg border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/15 resize-y"
                  />
                </div>

                {submitted && (
                  <div
                    role="status"
                    className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground"
                  >
                    Thanks! Your message has been sent. We&apos;ll get back to you soon.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-semibold tracking-wide py-3 transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-primary/20"
                >
                  {submitting ? "Sending…" : "Submit"}
                </button>

                <p className="text-xs text-muted-foreground">
                  By submitting, you agree we can contact you about your request.
                </p>
              </form>
            </div>
          </div>

          {/* ── RIGHT: Image + Team ── */}
          <div className="space-y-6 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-2">
            {/* Photo slider */}
            <div className="relative overflow-hidden mb-6 rounded-2xl border border-foreground/10 bg-background shadow-sm">
              <div className="relative h-[320px]">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  loop
                  className="w-full h-full"
                >
                  {contactSlides.map((slide) => (
                    <SwiperSlide key={slide.alt}>
                      <div className="relative w-full h-full">
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          sizes="(min-width: 1024px) 520px, 100vw"
                          className="object-cover"
                          priority={false}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-black/0" />
                        <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                          <p className="inline-flex items-center rounded-full bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
                            {slide.badge}
                          </p>
                          <p className="mt-3 text-sm sm:text-base font-medium leading-snug">
                            {slide.title}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Contact + address cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">
              {/* Call & email */}
              <article className="rounded-2xl border border-foreground/10 bg-background p-6 shadow-sm">
                <h3
                  className="text-sm font-semibold text-foreground tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Call or email us
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Speak directly with our moving coordinators.
                </p>

                <div className="mt-4 space-y-2">
                  <a
                    href="tel:+18889981004"
                    className="flex items-center gap-2 rounded-lg bg-surface px-3 py-2 text-sm text-foreground/90 hover:bg-surface/70 hover:text-foreground transition-colors"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <span className="font-medium">Office: 888-998-1004 Ext. 101</span>
                  </a>
                  <a
                    href="tel:+14804471200"
                    className="flex items-center gap-2 rounded-lg bg-surface px-3 py-2 text-sm text-foreground/90 hover:bg-surface/70 hover:text-foreground transition-colors"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <span className="font-medium">Direct: 480-447-1200</span>
                  </a>
                  <a
                    href="mailto:info@kingsmovingservices.com"
                    className="flex items-center gap-2 rounded-lg bg-surface px-3 py-2 text-sm text-primary hover:bg-surface/70 transition-colors"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    <span className="font-medium">info@kingsmovingservices.com</span>
                  </a>
                </div>
              </article>

              {/* Address + badges */}
              <article className="rounded-2xl border border-foreground/10 bg-background p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h3
                    className="text-sm font-semibold text-foreground tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Scottsdale office
                  </h3>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    Kings Moving Services
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    6424 E. Greenway Pkwy, Suite 100
                    <br />
                    Scottsdale, AZ 85254
                  </p>
                  <p className="mt-2 text-xs italic text-muted-foreground">
                    &quot;Where You Are Treated Like Royalty&quot;
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Email:{" "}
                    <a
                      href="mailto:info@kingsmovingservices.com"
                      className="text-primary hover:underline underline-offset-4"
                    >
                      info@kingsmovingservices.com
                    </a>
                  </p>
                </div>


              </article>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}