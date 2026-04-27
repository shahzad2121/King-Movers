const loadingImages = [
  {
    src: "/images/services/In_action_loading_truck.jpg",
    alt: "Movers inside truck adjusting and securing wrapped furniture",
    title: "In-Action Loading",
    tag: "Adjusting & Securing",
  },
  {
    src: "/images/services/moving_picture_load.jpg",
    alt: "Stacked and wrapped moving materials organized in truck",
    title: "Stacked Materials",
    tag: "Space Optimized",
  },
  {
    src: "/images/services/Stacking_for_a_long_distance_move.jpg",
    alt: "Truck stacked and braced for long-distance relocation",
    title: "Long-Distance Stacking",
    tag: "Transit Ready",
  },
];

export default function LoadingCareSection() {
  return (
    <section className="bg-surface font-sans py-12 md:py-14 border-t border-foreground/8">
      <div className="max-w-[1400px] mx-auto">
        <div className="px-6 md:px-8">
          <h2
            className="font-serif text-center font-semibold text-foreground leading-tight"
            style={{ fontSize: "clamp(30px, 3.6vw, 48px)", letterSpacing: "-0.02em" }}
          >
            How We Load and Secure Every Move
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-foreground/70 text-base md:text-lg leading-relaxed">
            From careful in-truck adjustments to dense long-distance stacking, our crew
            secures each load to reduce shifting and keep belongings protected on the road.
          </p>
        </div>

        <div className="mt-10 px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-4">
          {loadingImages.map((image) => (
            <figure key={image.src} className="group">
              <div className="h-[360px] md:h-[400px] overflow-hidden">
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
