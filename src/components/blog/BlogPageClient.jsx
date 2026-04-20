"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import QuoteForm from "@/components/home3/QuoteForm";
import { BLOG_POSTS } from "@/components/blog/blogPosts";
import BlogCard from "@/components/blog/BlogCard";

gsap.registerPlugin(ScrollTrigger);

const featuredPost = BLOG_POSTS[0];

export default function BlogPageClient() {
  const rootRef = useRef(null);
  const heroContentRef = useRef(null);
  const featuredRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const heroChildren = heroContentRef.current?.children || [];
      gsap.set(heroChildren, { opacity: 0, y: 28 });
      if (!reduceMotion) {
        gsap.to(heroChildren, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
        });
      } else {
        gsap.set(heroChildren, { opacity: 1, y: 0 });
      }

      if (!reduceMotion) {
        gsap.fromTo(
          featuredRef.current,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: featuredRef.current, start: "top 85%" },
          }
        );
        gsap.fromTo(
          ".blog-grid-card",
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
          }
        );
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-background">
      <section className="relative min-h-[52vh] overflow-hidden md:min-h-[56vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1800&q=80')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(86,26,140,0.88) 0%, rgba(20,11,34,0.92) 100%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[52vh] max-w-[1180px] items-center px-4 py-16 text-center sm:px-6 md:min-h-[56vh] md:px-8 md:py-20">
          <div ref={heroContentRef} className="mx-auto max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-accent/35 bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              King Movers Insights
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem]">
              Our Blog
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/82 md:text-xl">
              Moving tips, guides, and insights to make your relocation easier.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 md:px-8 md:py-12">
        <div className="mx-auto max-w-[1180px]">
          <div ref={featuredRef} className="overflow-hidden rounded-3xl border border-primary/15 shadow-md">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="relative block min-h-[280px] md:min-h-[360px] lg:min-h-[400px]"
            >
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 1180px) 100vw, 1180px"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12 text-left">
                <span className="blog-category-pill inline-flex rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground">
                  {featuredPost.category}
                </span>
                <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-snug text-white md:text-4xl lg:text-[2.35rem]">
                  {featuredPost.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                  {featuredPost.description}
                </p>
                <span className="mt-5 inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent/90">
                  Read Article
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section ref={gridRef} className="px-4 pb-12 sm:px-6 md:px-8 md:pb-14">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
            Latest articles
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-[15px] leading-relaxed text-foreground/70 md:text-base">
            Practical advice from the King Moving Services team to help you plan with confidence.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
            {BLOG_POSTS.map((post) => (
              <div key={post.slug} className="blog-grid-card">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
