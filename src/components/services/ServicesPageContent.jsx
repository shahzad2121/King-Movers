"use client";

import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";

export default function ServicesPageContent() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Page header — theme-aligned */}
        <div className="mb-14 text-center md:mb-16">
          <p className="mb-2 text-sm font-medium text-primary">
            Our Services
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Explore Our Shifting Service
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Our local moving services are quick, efficient, and hassle-free—from
            packing to unpacking, we ensure a stress-free transition.
          </p>
        </div>

        {/* 3×3 grid — same card as home section, links to detail page */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="block no-underline"
            >
              <ServiceCard service={service} className="w-full" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
