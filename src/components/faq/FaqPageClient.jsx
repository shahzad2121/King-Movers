"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import QuoteForm from "@/components/home3/QuoteForm";
import { FAQ_BY_TAB, FAQ_TABS } from "@/components/faq/faqData";
import FaqAccordionItem from "@/components/faq/FaqAccordionItem";

export default function FaqPageClient() {
  const rootRef = useRef(null);
  const [activeTab, setActiveTab] = useState("general");
  const [openId, setOpenId] = useState(null);

  const items = FAQ_BY_TAB[activeTab] ?? [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-animate-header",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );
      gsap.fromTo(
        ".faq-animate-tabs",
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", delay: 0.12 }
      );
      gsap.fromTo(
        ".faq-animate-panel",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out", delay: 0.22 }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const setTab = (key) => {
    setActiveTab(key);
    setOpenId(null);
  };

  return (
    <div ref={rootRef} className="min-w-0">
      <section className="bg-background px-4 pb-10 pt-10 sm:px-6 md:px-10 md:pb-14">
        <div className="mx-auto max-w-3xl text-center faq-animate-header">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.08]">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl md:leading-relaxed">
            Everything you need to know about our moving services
          </p>
        </div>

        {/* Sticky wrapper must NOT receive GSAP transform (y) — that breaks position:sticky. Animate inner .faq-animate-tabs only. */}
        <div className="sticky top-[88px] z-40 mt-12 -mx-4 border-b border-primary/10 bg-background/95 px-4 py-3 backdrop-blur-sm supports-backdrop-filter:bg-background/85 sm:-mx-6 sm:px-6 md:top-[152px] md:mx-0 md:mt-14 md:px-0 md:py-4">
          <div className="faq-animate-tabs mx-auto flex max-w-4xl flex-wrap justify-center gap-2 md:gap-3">
            {FAQ_TABS.map(({ key, label }) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTab(key)}
                  className={`faq-tab rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 md:px-8 md:py-3.5 md:text-base lg:text-lg ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/25"
                      : "border-2 border-primary/25 bg-surface text-foreground hover:border-primary/45 hover:bg-background"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="faq-animate-panel mx-auto mt-10 max-w-4xl md:mt-12">
          {activeTab === "general" && (
            <p className="mx-auto mb-6 max-w-4xl px-1 text-center text-base leading-relaxed text-foreground/75 md:text-lg">
              Here are a few frequently asked questions we receive from our customers. As always, we aim to assist and
              ensure your move is as smooth as possible.
            </p>
          )}
          <div className="rounded-[1.75rem] border border-primary/15 bg-surface px-4 py-2 shadow-sm md:rounded-3xl md:px-8 md:py-4 lg:px-10 lg:py-6">
            {items.map((item) => (
              <FaqAccordionItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
