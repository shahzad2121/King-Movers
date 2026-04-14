"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Facebook, Linkedin, Mail, Phone, X } from "lucide-react";

const SCROLL_THRESHOLD = 50;
const SCROLL_DELTA = 6;

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact-us" },
  { label: "Blog", href: "/blog" },
];

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export default function NavbarHome2() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollYRef = useRef(0);
  // Keep a ref in sync so the scroll handler can read it without stale closure
  const menuOpenRef = useRef(false);

  // Sync ref whenever state changes
  useEffect(() => {
    menuOpenRef.current = menuOpen;
    // Force header visible when sidebar is open
    if (menuOpen) setShowHeader(true);
  }, [menuOpen]);

  // Register scroll listener ONCE — empty deps so it never re-registers
  useEffect(() => {
    lastScrollYRef.current = window.scrollY || 0;

    const handleScroll = () => {
      const y = window.scrollY || 0;
      setIsScrolled(y > SCROLL_THRESHOLD);

      // Always show near the top or while mobile menu is open
      if (y <= SCROLL_THRESHOLD || menuOpenRef.current) {
        setShowHeader(true);
        lastScrollYRef.current = y;
        return;
      }

      const delta = y - lastScrollYRef.current;
      // Update reference on every event so deltas stay small and accurate
      lastScrollYRef.current = y;

      if (delta > SCROLL_DELTA) {
        setShowHeader(false);   // scrolling down
      } else if (delta < -SCROLL_DELTA) {
        setShowHeader(true);    // scrolling up
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // ← intentionally empty: register once, read menuOpen via ref

  // Close sidebar on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-90 shrink-0 bg-background border-b border-foreground/8 transition-transform duration-300 ease-out will-change-transform ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className=" mx-auto pl-10">
          {/* Grid: Col 1 = Logo, Col 2 = Two rows (top bar + bottom bar) */}
          <div className="grid grid-cols-[auto_1fr] gap-0 min-h-0">
            {/* Column 1: Logo only – compact width */}
            <div className="flex items-stretch border-r border-foreground/10 pr-4 md:pr-6">
              <Link href="/home-2" className="flex items-center py-3 shrink-0">
                <Image
                  src="/images/logo.webp"
                  alt="King Moving Services"
                  width={140}
                  height={72}
                  className="h-14 md:h-28 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Column 2: Two rows */}
            <div className="flex flex-col min-w-0">
              {/* Row 1: Contact, Email, Social icons — desktop only */}
              <div className="hidden md:flex items-center justify-between gap-4 py-2 px-4 border-b border-foreground/8 bg-surface/50">
                <div className="flex items-center gap-6 py-5 text-sm flex-wrap">
                  <a href="tel:+18889981004" className="flex items-center gap-2 text-primary font-medium hover:underline">
                    <Phone className="w-4 h-4 shrink-0" />
                    Office: 888-998-1004 Ext. 101
                  </a>
                  <a href="tel:+14804471200" className="flex items-center gap-2 text-primary font-medium hover:underline">
                    <Phone className="w-4 h-4 shrink-0" />
                    Direct: 480-447-1200
                  </a>
                  <a href="mailto:info@kingsmovingservices.com" className="flex items-center gap-2 text-primary font-medium hover:underline">
                    <Mail className="w-4 h-4 shrink-0" />
                    info@kingsmovingservices.com
                  </a>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a href="#" aria-label="Facebook" className="text-foreground/70 hover:text-primary transition-colors p-1">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary transition-colors p-1">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="Email" className="text-foreground/70 hover:text-primary transition-colors p-1">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Row 2: Menu items */}
              <nav
                className="flex items-center justify-between gap-4 py-3 px-4 bg-primary"
                aria-label="Main navigation"
              >
                <ul className="hidden lg:flex items-center gap-5 list-none m-0 p-0">
                  {NAV_LINKS.map(({ label, href }) => {
                    const isActive = pathname === href || (href !== "/home-2" && pathname?.startsWith(href));
                    return (
                      <li key={label}>
                        <Link
                          href={href}
                          className={`no-underline text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-background text-primary px-3 py-1.5 rounded"
                              : "text-white hover:text-accent"
                          }`}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="flex items-center gap-3 ml-auto">
                  <Link
                    href="/#quote"
                    className="hidden md:inline-flex items-center justify-center bg-background text-primary font-semibold px-4 py-2 rounded text-sm hover:bg-background/90 transition-colors no-underline shrink-0"
                  >
                    Request a Quote
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(true)}
                    className="lg:hidden p-2 text-white"
                    aria-label="Open menu"
                    aria-expanded={menuOpen}
                  >
                    <HamburgerIcon />
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Sidebar ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-200 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-201 w-[min(85vw,320px)] bg-background flex flex-col shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-foreground/10 bg-primary">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.webp"
              alt="King Moving Services"
              width={110}
              height={56}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="p-2 text-white hover:text-accent transition-colors rounded"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-3" aria-label="Mobile navigation">
          <ul className="list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href || (href !== "/" && pathname?.startsWith(href));
              return (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center px-6 py-4 text-base font-medium no-underline border-b border-foreground/6 transition-colors ${
                      isActive
                        ? "text-primary bg-primary/5 border-l-4 border-l-primary"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer: phone numbers + CTA */}
        <div className="p-5 border-t border-foreground/10 space-y-3 bg-surface/40">
          <a
            href="tel:+18889981004"
            className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-primary" />
            </span>
            Office: 888-998-1004 Ext. 101
          </a>
          <a
            href="tel:+14804471200"
            className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-primary" />
            </span>
            Direct: 480-447-1200
          </a>
          <a
            href="mailto:info@kingsmovingservices.com"
            className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-primary" />
            </span>
            info@kingsmovingservices.com
          </a>

          <Link
            href="/#quote"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center bg-primary text-white font-semibold px-4 py-3 rounded-lg text-base hover:bg-primary/90 transition-colors no-underline"
          >
            Request a Quote
          </Link>

          <div className="flex items-center justify-center gap-4 pt-1">
            <a href="#" aria-label="Facebook" className="text-foreground/60 hover:text-primary transition-colors p-1">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-foreground/60 hover:text-primary transition-colors p-1">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Email" className="text-foreground/60 hover:text-primary transition-colors p-1">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
