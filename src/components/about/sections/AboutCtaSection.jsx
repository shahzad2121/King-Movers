import Link from "next/link";
import AboutIcon from "@/components/about/AboutIcon";
import { CONTACT_INFO } from "@/components/contact-us/contactData";

function QuoteDocIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="15" x2="15" y2="15" />
      <line x1="9" y1="11" x2="13" y2="11" />
    </svg>
  );
}

const btnLayout =
  "flex flex-1 min-h-[56px] md:min-h-[64px] w-full md:w-auto md:min-w-0 items-center justify-center gap-3 rounded-lg px-4 py-3 md:px-5 text-center text-[15px] md:text-lg font-bold shadow-sm transition-opacity";

const btnOnDark =
  `${btnLayout} text-white hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`;

export default function AboutCtaSection({ sectionRef, contentRef }) {
  return (
    <section
      ref={sectionRef}
      className="relative border-t border-foreground/8 bg-surface py-14 md:py-20 px-4 sm:px-6 md:px-10"
    >
      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center text-center"
      >
        <h2 className="text-3xl font-black text-foreground sm:text-4xl md:text-5xl lg:text-[2.75rem] leading-tight tracking-tight">
          Want instant support?
        </h2>

        <div className="mt-10 flex w-full max-w-4xl flex-col gap-4 md:mt-12 md:flex-row md:flex-wrap md:items-stretch md:justify-center md:gap-5">
          <a href={CONTACT_INFO.officePhoneHref} className={`${btnOnDark} bg-primary`}>
            <AboutIcon type="phone" className="h-3 w-3 shrink-0 md:h-4 md:w-4 text-white" />
            <span className="leading-snug">
              Office:&nbsp;
              {CONTACT_INFO.officePhone}
            </span>
          </a>

          <Link
            href="/#quote"
            className={`${btnLayout} bg-accent text-foreground shadow-accent/25 hover:opacity-95`}
          >
            <QuoteDocIcon className="h-6 w-6 shrink-0 md:h-7 md:w-7 text-foreground" />
            <span className="leading-snug">Request a Free Quote</span>
          </Link>
        </div>

        <p className="mt-8 max-w-xl text-sm font-medium text-foreground/55 md:text-base">
          Direct:&nbsp;
          <a href={CONTACT_INFO.directPhoneHref} className="text-primary underline-offset-2 hover:underline">
            {CONTACT_INFO.directPhone}
          </a>
          &nbsp;or&nbsp;
          <a href={CONTACT_INFO.directPhone2Href} className="text-primary underline-offset-2 hover:underline whitespace-nowrap">
            {CONTACT_INFO.directPhone2DisplaySpaced}
          </a>
          <span className="text-foreground/35" aria-hidden>
            {" "}
            ·{" "}
          </span>
          <a href={CONTACT_INFO.emailHref} className="text-primary underline-offset-2 hover:underline">
            {CONTACT_INFO.email}
          </a>
        </p>

        <p className="mt-4 text-xs tracking-wide text-foreground/45 md:text-sm">
          Licensed &amp; Insured · US DOT: 3226717 · MC: 1010868
        </p>
      </div>
    </section>
  );
}
