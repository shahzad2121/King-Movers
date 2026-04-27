import Link from "next/link";

const crateImages = [
  {
    src: "/images/services/Artwork_Crates.jpeg",
    alt: "Artwork secured inside a protective moving crate",
    title: "Artwork Crates",
    tag: "Fragile Protection",
  },
  {
    src: "/images/services/Crate_Completed.jpeg",
    alt: "Completed custom crate ready for transport",
    title: "Crate Completed",
    tag: "Ready to Move",
  },
  {
    src: "/images/services/crate-Kingsmovingservices.jpeg",
    alt: "King Moving Services team handling a custom crate",
    title: "Handled with Care",
    tag: "Safe Handling",
  },
  {
    src: "/images/services/custom_crate.jpg",
    alt: "Custom-built wooden crate for fragile moving items",
    title: "Custom Crate Build",
    tag: "Built to Fit",
  },
];

export default function CratingCareSection() {
  return (
    <section className="bg-surface font-sans py-12 md:py-14 border-t border-foreground/8">
      <div className="max-w-[1400px] mx-auto">
        <div className="px-6 md:px-8">
          <h2
            className="font-serif text-center font-semibold text-foreground leading-tight"
            style={{ fontSize: "clamp(30px, 3.6vw, 48px)", letterSpacing: "-0.02em" }}
          >
            How We Protect Items with Crates
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-foreground/70 text-base md:text-lg leading-relaxed">
            For artwork, glass, and high-value belongings, we use reinforced custom
            crates and careful handling from pickup to delivery.
          </p>
        </div>

        <div className="mt-10 px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-4">
          {crateImages.map((image) => (
            <figure key={image.src} className="group">
              <div className="aspect-5/4 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-center justify-between px-0.5 mt-2">
                <span className="font-serif text-lg font-semibold text-foreground tracking-tight">
                  {image.title}
                </span>
                <span className="text-sm font-semibold text-primary">{image.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>

       
      </div>
    </section>
  );
}
