"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";

const SCROLL_THRESHOLD = 50;

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-90 shrink-0 bg-background border-b border-foreground/8">
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
            {/* Row 1: Contact, Email, Social icons */}
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
                  className="lg:hidden p-2 text-white"
                  aria-label="Open menu"
                >
                  <HamburgerIcon />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
