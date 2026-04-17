"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const YOUTUBE_VIDEO_ID = "lpAirEmAGrE";

const videoStructuredData = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "King Moving Services — See our team in action",
  description:
    "Watch King Moving Services professional movers, fleet, and careful packing and loading process for local, long-distance, and commercial moves.",
  thumbnailUrl: `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`,
  embedUrl: `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`,
  contentUrl: `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`,
};

export default function HeroVideoEmbed() {
  // autoplay=1 + mute=1: browsers block unmuted autoplay; playsinline helps on iOS
  const embedSrc = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&autoplay=1&mute=1&playsinline=1`;

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(headerRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7 }).fromTo(
      mediaRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.65 },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-surface border-b border-foreground/8 py-14 px-6 md:px-16"
      aria-labelledby="hero-video-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStructuredData) }}
      />

      <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Visual proof</p>
        <h2 id="hero-video-heading" className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
          See King Movers <span className="text-primary">in action</span>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Meet our professional moving crew, branded trucks, and the careful, efficient way we pack, load, and deliver
          for homes and businesses — local moves, long-distance relocations, and office jobs done right.
        </p>
      </div>

      <div ref={mediaRef} className="max-w-4xl mx-auto w-full px-1 sm:px-0">
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg ring-1 ring-foreground/10 bg-black">
          <iframe
            title="King Moving Services — professional movers, trucks, and moving company video (starts muted; use player controls for sound)"
            src={embedSrc}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
