"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";

export default function ServiceDetailSidebar() {
  const pathname = usePathname();
  const currentSlug = pathname?.split("/services/")[1]?.split("/")[0] ?? null;

  return (
    <aside
      className="sticky top-[104px] shrink-0 w-full lg:w-72 max-h-[calc(100vh-120px)] overflow-y-auto"
      aria-label="Other services"
    >
      <div className="bg-surface rounded-2xl p-6 border border-foreground/6">
        <h2 className="font-serif text-xl font-bold text-foreground tracking-tight mb-4">
          Other Services
        </h2>

        <ul className="list-none p-0 m-0 flex flex-col gap-2">
          {services.map((service) => {
            const isActive = currentSlug === service.slug;
            return (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium no-underline transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-background text-foreground hover:bg-primary/10 hover:text-primary border border-foreground/8"
                  }`}
                >
                  {service.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}