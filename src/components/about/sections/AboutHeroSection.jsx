import Link from "next/link";
import AboutIcon from "@/components/about/AboutIcon";

export default function AboutHeroSection({ sectionRef, bgRef, contentRef }) {
  return (
    <section
      ref={sectionRef}
      className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(86,26,140,0.90) 0%, rgba(20,11,34,0.94) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(254,195,77,0.55) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-accent/10 blur-[90px] pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto w-full py-28">
        <div ref={contentRef}>
        

          <span className="inline-block mt-3 bg-accent text-foreground text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            About King Movers
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-bold text-white leading-[1.1] max-w-3xl mb-6">
            Your Trusted Moving Partner,{" "}
            <span className="text-accent">Built on 8 Years</span> of Proven
            Experience
          </h1>

          <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
            Delivering stress-free, reliable relocation services for homes and
            businesses — handled with care from the first box to the last.
          </p>

          <div className="flex flex-wrap pb-4 gap-4">
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-foreground font-bold px-8 py-3.5 rounded text-sm transition-colors shadow-lg shadow-accent/20"
            >
              Get a Free Quote
              <AboutIcon type="arrow" className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded text-sm transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" aria-hidden />
    </section>
  );
}
