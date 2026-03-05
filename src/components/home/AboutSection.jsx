"use client";

const stats = [
  { number: "100%", label: "On-Time Deliveries" },
  { number: "182k", label: "Drop-offs" },
  { number: "94%", label: "Cross-Border Services" },
];

export default function AboutSection() {
  return (
    <section className="bg-surface py-10 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-20">

        {/* ── HEADING ── */}
        <div className="text-center mb-12 md:mb-14">
          <p className="text-sm font-medium text-primary mb-2">
            About Our Company
          </p>
          <h2 className="font-serif text-foreground font-semibold leading-tight max-w-2xl mx-auto text-3xl md:text-4xl">
            Expert moving and logistics with years of experience—from the first
            box to the final walkthrough.
          </h2>
        </div>

        {/* ── THREE COLUMNS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-10 lg:gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <p className="text-muted-foreground text-sm leading-relaxed">
              We go beyond the usual with moving and logistics that exceed
              expectations and deliver care that sets us apart.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-6 py-3 rounded-full w-fit hover:opacity-90 transition-all hover:-translate-y-0.5"
            >
              More About Us
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>

          {/* CENTER — Image (reduced height) + play badge */}
          <div className="relative order-1 lg:order-2 max-w-md mx-auto w-full">
            <div className="rounded-2xl overflow-hidden bg-muted-foreground/10" style={{ aspectRatio: "4/4" }}>
              <img
                src="/images/moving.jpg"
                alt="Logistics worker in yellow jacket"
                className="w-full h-full object-cover object-top"
              />
            </div>

            

            <style>{`
              @keyframes aboutSpin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>

          {/* RIGHT — Stats */}
          <div className="flex flex-col divide-y divide-foreground/10 order-3">
            {stats.map((stat) => (
              <div key={stat.label} className="py-4 first:pt-0">
                <div className="font-serif text-foreground font-bold leading-none mb-1 text-3xl md:text-xl">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
