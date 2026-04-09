"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutCtaSection from "@/components/about/sections/AboutCtaSection";
import { BLOG_POSTS } from "@/components/blog/blogPosts";
import BlogCard from "@/components/blog/BlogCard";

gsap.registerPlugin(ScrollTrigger);

function formatDate(iso) {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function BlogPostPageClient({ post }) {
  const rootRef = useRef(null);
  const metaRef = useRef(null);
  const articleRef = useRef(null);

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) return;
      gsap.fromTo(
        metaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          delay: 0.15,
        }
      );
      gsap.fromTo(
        ".blog-article-p",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: articleRef.current, start: "top 88%" },
        }
      );
      gsap.fromTo(
        ".blog-related-card",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".blog-related-section", start: "top 90%" },
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, [post.slug]);

  return (
    <div ref={rootRef} className="bg-background">
      <section className="relative min-h-[38vh] overflow-hidden md:min-h-[42vh]">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(86,26,140,0.88) 0%, rgba(20,11,34,0.9) 100%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[38vh] max-w-[800px] flex-col justify-end px-4 py-12 text-center sm:px-6 md:min-h-[42vh] md:px-8 md:py-16">
          <Link
            href="/blog"
            className="blog-body-link mb-6 inline-flex self-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/18"
          >
            ← Back to blog
          </Link>
          <span className="blog-category-pill inline-flex self-center rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-[1.12] text-white sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-white/78 md:text-lg">
            {post.description}
          </p>
        </div>
      </section>

      <article className="px-4 py-8 sm:px-6 md:px-8 md:py-10">
        <div className="mx-auto max-w-[720px]">
          <div
            ref={metaRef}
            className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 border-b border-primary/12 pb-6 text-sm text-foreground/60"
          >
            <span>King Moving Services</span>
            {post.publishedAt ? (
              <time dateTime={post.publishedAt} className="font-medium text-foreground/80">
                {formatDate(post.publishedAt)}
              </time>
            ) : null}
          </div>

          <div ref={articleRef} className="space-y-5">
            {(post.body ?? []).map((para, i) => (
              <p
                key={i}
                className="blog-article-p text-[16px] leading-[1.85] text-foreground/78 md:text-[17px]"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-primary/15 bg-surface px-5 py-6 md:px-8 md:py-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Plan your move with King Movers
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/72 md:text-base">
              Request a free quote and get a clear plan for packing, loading, and delivery.
            </p>
            <Link
              href="/#quote"
              className="blog-body-link mt-4 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="blog-related-section border-t border-primary/10 bg-surface/50 px-4 py-10 sm:px-6 md:px-8 md:py-12">
          <div className="mx-auto max-w-[1180px]">
            <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
              More to read
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-[15px] text-foreground/70 md:text-base">
              Explore more guides from our team.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {related.map((p) => (
                <div key={p.slug} className="blog-related-card">
                  <BlogCard post={p} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="">
        <AboutCtaSection />
      </div>
    </div>
  );
}
