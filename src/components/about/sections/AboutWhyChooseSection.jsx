"use client";

import { useState } from "react";

const items = [
  {
    title: "Highly Rated and Trusted by Real Customers",
    content:
      "King Moving Services is trusted by homeowners and businesses across Scottsdale and nearby Arizona cities for reliable, professional relocations.",
  },
  {
    title: "Licensed & Insured Moving Company in Arizona",
    content:
      "We are fully licensed and insured, giving you complete peace of mind from pickup to final delivery.",
  },
  {
    title: "Professional and Experienced Moving Crew",
    content:
      "Our trained team handles every item with attention and respect, using proven methods for safe packing, loading, and transport.",
  },
  {
    title: "Well Equipped for Safe Relocation",
    content:
      "We use quality packing materials, modern tools, and strict safety procedures to reduce risk and protect your belongings.",
  },
  {
    title: "Responsive Customer Service and Support",
    content:
      "Our support team stays available before, during, and after your move to answer questions and keep everything on schedule.",
  },
  {
    title: "Clear Communication for Stress-Free Moves",
    content:
      "From your first quote to move-day updates, we keep communication simple, transparent, and reliable.",
  },
];

export default function WhyTamamMovers() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-background py-16 px-12">
      <div className=" mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT — circular image with orange ring */}
        <div className="shrink-0 flex items-center justify-center">
          <div
            className="rounded-full p-[6px] border-4 sm:border-[5px] border-accent w-[min(420px,86vw)] h-[min(420px,86vw)]"
            style={{
              background: "transparent",
              borderRadius: "50%",
            }}
          >
            <div
              className="w-full h-full rounded-full overflow-hidden"
              style={{ width: "100%", height: "100%" }}
            >
              {/* Replace src with your actual image */}
              <img src="/images/Happy-Clients-3.jpg" alt="King Moving Services truck" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* RIGHT — text + accordion */}
        <div className="flex-1 w-full">
          {/* Heading */}
          <div className="mb-7">
            <p
              className="text-xl md:text-2xl mb-1 text-foreground/80 font-medium"
            >
              Why King Moving Services.
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-[1.15] text-foreground">
              Choosing us for your move in Scottsdale will be one of your best decisions.
            </h2>
          </div>

          {/* Accordion */}
          <div
            className="w-full rounded-sm overflow-hidden"
            style={{ border: "1px solid rgba(86,26,140,0.22)" }}
          >
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  style={{
                    borderBottom:
                      i < items.length - 1 ? "1px solid rgba(86,26,140,0.18)" : "none",
                  }}
                >
                  {/* Row header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
                    style={{
                      background: isOpen ? "rgba(86,26,140,0.04)" : "var(--surface)",
                      cursor: "pointer",
                      border: "none",
                      outline: "none",
                    }}
                  >
                    <span
                      className="text-sm md:text-[15px] font-bold"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.title}
                    </span>

                    {/* Circle icon */}
                    {isOpen ? (
                      /* Filled dot with outer ring */
                      <span
                        className="shrink-0 ml-4"
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          border: "2px solid var(--primary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "var(--primary)",
                            display: "block",
                          }}
                        />
                      </span>
                    ) : (
                      /* Empty ring */
                      <span
                        className="shrink-0 ml-4"
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          border: "2px solid rgba(86,26,140,0.45)",
                          display: "inline-block",
                        }}
                      />
                    )}
                  </button>

                  {/* Expandable content */}
                  {isOpen && item.content && (
                    <div
                      className="px-5 pb-5"
                      style={{ background: "rgba(86,26,140,0.04)" }}
                    >
                      <p
                        className="text-sm md:text-[15px]"
                        style={{ color: "rgba(15,15,20,0.72)", lineHeight: 1.7 }}
                      >
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}