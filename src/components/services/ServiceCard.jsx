"use client";

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

/**
 * Same card design as home Services section.
 * Use className for layout: "shrink-0" + width for slider, "w-full" for grid.
 */
export default function ServiceCard({ service, className = "" }) {
  return (
    <div className={`group cursor-pointer ${className}`.trim()}>
      <div className="w-full h-[320px] rounded-2xl overflow-hidden mb-5">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center shrink-0 text-primary transition-all duration-200 group-hover:bg-primary group-hover:border-primary group-hover:text-white"
        >
          <ArrowIcon />
        </button>
        <span className="text-lg font-semibold text-foreground tracking-tight">
          {service.title}
        </span>
      </div>
    </div>
  );
}
