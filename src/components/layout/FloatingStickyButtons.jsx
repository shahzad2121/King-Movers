"use client";

import Link from "next/link";
import { PhoneCall, FileText } from "lucide-react";

export default function FloatingStickyButtons() {
  return (
    <>
      {/* Bottom-right: Get a Free Quote */}
      <div className="fixed bottom-5 right-4 z-40">
        <Link
          href="/#quote"
          className="group flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary shadow-xl shadow-black/50 transition-transform hover:-translate-y-0.5 hover:scale-[1.03]"
        >
          <FileText className="h-4 w-4" />
          <span>Get a Free Quote</span>
        </Link>
      </div>

      {/* Bottom-left: Contact Us icon with subtle shake */}
      <div className="fixed bottom-5 left-4 z-40">
        <Link
          href="/contact-us"
          aria-label="Contact us"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-black/40 ring-2 ring-white/15"
        >
          <PhoneCall className="h-5 w-5 text-accent animate-wiggle-horizontal" />
        </Link>
      </div>
    </>
  );
}

