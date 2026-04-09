import Link from "next/link";
import { Instagram, Youtube, Twitter } from "lucide-react";
import { CONTACT_INFO } from "@/components/contact-us/contactData";

const serviceLinks = [
  { label: "Residential", href: "#services" },
  { label: "Commercial", href: "#services" },
  { label: "Packing", href: "#services" },
  { label: "Long Distance", href: "#services" },
  { label: "Storage", href: "#services" },
];

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

const usefulLinks = [
  { label: "Contact Us", href: "/contact-us" },
  { label: "Get Instant Quote", href: "/#quote" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
    bgColor: "bg-[#E1306C]",
  },
  {
    icon: Twitter,
    href: "#",
    label: "X",
    bgColor: "bg-[#1DA1F2]",
  },
  {
    icon: Youtube,
    href: "#",
    label: "YouTube",
    bgColor: "bg-[#FF0000]",
  },
];

const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.mapQuery)}&output=embed`;

export default function Footer() {
  return (
    <footer className="footer-premium-fonts relative text-white bg-[#140b22]">
      {/* Purple night gradient + subtle patterns */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 0% 0%, rgba(86,26,140,0.6) 0%, transparent 55%), radial-gradient(ellipse 90% 90% at 100% 100%, rgba(86,26,140,0.4) 0%, transparent 60%), linear-gradient(180deg, #1b102b 0%, #140b22 55%, #0b0715 100%)",
        }}
      />
      {/* Dot/grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "26px 26px, 56px 56px",
          mixBlendMode: "soft-light",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-10 sm:px-6 md:py-11 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-12 lg:gap-x-6 xl:gap-x-8">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h2 className="footer-brand-title text-xl font-semibold tracking-tight text-white md:text-2xl">
              {CONTACT_INFO.company}
            </h2>
            <p className="footer-brand-body mt-3 max-w-sm text-sm leading-relaxed text-white/80">
              From packing to delivery. Our team handles your move with care so you can
              focus on what&apos;s next.
            </p>

            <div className="footer-social-row mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label, bgColor }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`footer-social-link flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 hover:border-white ${bgColor}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="footer-brand-body mt-6 space-y-2 text-sm text-white/90">
              <p>{CONTACT_INFO.addressLine1}</p>
              <p>{CONTACT_INFO.addressLine2}</p>
              <p>&quot;Where You Are Treated Like Royalty&quot;</p>
            </div>

            <p>
                <a href={CONTACT_INFO.emailHref} className="hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p>
                <a href={CONTACT_INFO.officePhoneHref} className="hover:underline">
                  Office: {CONTACT_INFO.officePhone}
                </a>
              </p>
              <p>
                <a href={CONTACT_INFO.directPhoneHref} className="hover:underline">
                  Direct: {CONTACT_INFO.directPhone}
                </a>
              </p>
          </div>

          {/* Column 2 — Our Services + contact / trust (second half) */}
          <div className="lg:col-span-2">
            <h3 className="footer-col-heading mb-3 text-base font-semibold text-white/90 md:mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="footer-brand-body mt-8 space-y-2 text-sm text-white/90">
            

              <div className=" flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-[11px] font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Licensed &amp; Insured
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/20 px-3 py-1 text-[11px] font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  10+ Years Experience
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-3 py-1 text-[11px] font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  100&apos;s of Moves Completed
                </span>
              </div>
              <p className="text-xs text-white/75">
                US DOT: 3226717 &nbsp;&nbsp; MC: 1010868
              </p>
            </div>
          </div>

          {/* Column 3 — About */}
          <div className="lg:col-span-2">
            <h3 className="footer-col-heading mb-3 text-base font-semibold text-white/90 md:mb-4">
              About Us
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              {aboutLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Useful links */}
          <div className="lg:col-span-2">
            <h3 className="footer-col-heading mb-3 text-base font-semibold text-white/90 md:mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              {usefulLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Location + map */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="footer-col-heading mb-3 text-base font-semibold text-white/90 md:mb-4">
              Location
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/20 bg-black/20 shadow-lg shadow-black/20">
              <iframe
                title={`${CONTACT_INFO.company} on Google Maps`}
                src={MAP_EMBED_SRC}
                className="h-[180px] w-full border-0 sm:h-[200px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="footer-map-caption mt-3 text-sm leading-relaxed text-white/80">
              {CONTACT_INFO.addressLine1}, {CONTACT_INFO.addressLine2}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-caption mt-2 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="my-8 border-t border-white/20" />

        <div className="footer-bottom-bar flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/75">© {new Date().getFullYear()} {CONTACT_INFO.company}</p>
          <div className="flex flex-wrap items-center gap-4 sm:justify-end">
            <Link href="/terms" className="text-sm text-white/80 underline-offset-2 hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-sm text-white/80 underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-white/90"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
