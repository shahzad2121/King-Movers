import Link from "next/link";

export default function LegalPageShell({ title, lastUpdated, children }) {
  return (
    <div className="bg-background min-h-[50vh]">
      <section
        className="relative overflow-hidden px-6 py-14 md:py-16 text-center text-white"
        style={{
          background:
            "linear-gradient(135deg, rgba(86,26,140,0.96) 0%, rgba(20,11,34,0.98) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(254,195,77,0.4) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative z-10">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
          {lastUpdated ? (
            <p className="mt-3 text-sm text-white/75">Last updated: {lastUpdated}</p>
          ) : null}
          <Link
            href="/"
            className="inline-block mt-8 text-sm font-medium text-accent hover:text-accent/90 hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <div className="space-y-10 text-foreground/90 text-[15px] leading-relaxed md:text-base [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-2 [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:underline hover:[&_a]:text-primary/80">
          {children}
        </div>
      </article>
    </div>
  );
}
