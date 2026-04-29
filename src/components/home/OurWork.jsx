"use client";

const topRowItems = {
  topLeft: {
    id: "local-move",
    title: "Local Move",
    tag: "Home Relocation",
    img: "/images/international-move00.jpg",
  },
  center: {
    id: "international-move",
    title: "House Hold Items",
    tag: "International Move",
    img: "/images/international-move.jpg",
  },
  topRight: {
    id: "table-move",
    title: "Table Move",
    tag: "Shrink Wrapping",
    img: "/images/international-move2.jpg",
  },
  bottomLeft: {
    id: "padding",
    title: "Pads and Blanketing",
    tag: "Furniture Move",
    img: "/images/Padded-and-blanketed.jpg",
  },
  bottomRight: {
    id: "piano-move",
    title: "Piano Move",
    tag: "Special Item",
    img: "/images/Piano.jpeg",
  },
  thirdLeft: {
    id: "artwork-packing",
    title: "Packing ArtWork",
    tag: "",
    img: "/images/services/Mover_Packing_artwork.jpg",
  },
  thirdCenter: {
    id: "table-protection",
    title: "Protecting a Table Top",
    tag: "",
    img: "/images/services/Protecting_a_table_top.jpg",
  },
  thirdRight: {
    id: "bed-packing",
    title: "Packing Bed",
    tag: "",
    img: "/images/services/Bed-2.jpg",
  },
};

const Caption = ({ title, tag }) => (
  <div className="flex items-center justify-between px-0.5 mt-2">
    <span className="font-serif text-lg font-semibold text-foreground tracking-tight">{title}</span>
    <span className="text-sm  font-semibold text-primary">{tag}</span>
  </div>
);

export default function WorkGallery() {
  return (
    <section className="bg-surface font-sans py-12 md:py-14">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">

        {/* Heading */}
        <h1
          className="font-serif text-center font-semibold text-foreground mb-8 md:mb-10"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
        >
          Our Work Gallery
        </h1>

        {/* Original mosaic layout with center feature image */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 md:gap-4 md:grid-cols-[1.2fr_1.7fr_1.2fr] md:grid-rows-[324px_324px]">
          <div className="group flex flex-col md:col-1 md:row-1">
            <div className="rounded-2xl overflow-hidden h-[220px] sm:h-[240px] md:h-[280px]">
              <img
                src={topRowItems.topLeft.img}
                alt={topRowItems.topLeft.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <Caption title={topRowItems.topLeft.title} tag={topRowItems.topLeft.tag} />
          </div>

          <div className="group flex flex-col sm:col-span-2 md:col-2 md:row-[1/3]">
            <div className="rounded-2xl overflow-hidden h-[260px] sm:h-[360px] md:min-h-[620px] md:h-[calc(100%-44px)]">
              <img
                src={topRowItems.center.img}
                alt={topRowItems.center.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <Caption title={topRowItems.center.title} tag={topRowItems.center.tag} />
          </div>

          <div className="group flex flex-col md:col-3 md:row-1">
            <div className="rounded-2xl overflow-hidden h-[220px] sm:h-[240px] md:h-[280px]">
              <img
                src={topRowItems.topRight.img}
                alt={topRowItems.topRight.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <Caption title={topRowItems.topRight.title} tag={topRowItems.topRight.tag} />
          </div>

          <div className="group flex flex-col md:col-1 md:row-2">
            <div className="rounded-2xl overflow-hidden h-[220px] sm:h-[240px] md:h-[280px]">
              <img
                src={topRowItems.bottomLeft.img}
                alt={topRowItems.bottomLeft.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <Caption title={topRowItems.bottomLeft.title} tag={topRowItems.bottomLeft.tag} />
          </div>

          <div className="group flex flex-col md:col-3 md:row-2">
            <div className="rounded-2xl overflow-hidden h-[220px] sm:h-[240px] md:h-[280px]">
              <img
                src={topRowItems.bottomRight.img}
                alt={topRowItems.bottomRight.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <Caption title={topRowItems.bottomRight.title} tag={topRowItems.bottomRight.tag} />
          </div>

        </div>

        {/* Protection steps row for portrait images */}
        <div className="mt-8">
          <div className="text-center mb-4">
            <h2 className="font-serif text-xl font-semibold text-primary tracking-tight"
            style={{ fontSize: "clamp(30px, 3.6vw, 48px)", letterSpacing: "-0.02em" }}
            >
              Protection Steps
            </h2>
            <p className="text-foreground/65 text-sm md:text-base">
              How we prep sensitive items before loading and transport.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 md:gap-4">
            <div className="group flex flex-col">
              <div className="rounded-2xl overflow-hidden h-[340px] md:h-[400px] bg-white/60 border border-foreground/8 flex items-center justify-center">
                <img
                  src={topRowItems.thirdLeft.img}
                  alt={topRowItems.thirdLeft.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <Caption title={topRowItems.thirdLeft.title} tag={topRowItems.thirdLeft.tag} />
            </div>

            <div className="group flex flex-col">
              <div className="rounded-2xl overflow-hidden h-[340px] md:h-[400px] bg-white/60 border border-foreground/8 flex items-center justify-center">
                <img
                  src={topRowItems.thirdCenter.img}
                  alt={topRowItems.thirdCenter.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <Caption title={topRowItems.thirdCenter.title} tag={topRowItems.thirdCenter.tag} />
            </div>

            <div className="group flex flex-col">
              <div className="rounded-2xl overflow-hidden h-[340px] md:h-[400px] bg-white/60 border border-foreground/8 flex items-center justify-center">
                <img
                  src={topRowItems.thirdRight.img}
                  alt={topRowItems.thirdRight.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <Caption title={topRowItems.thirdRight.title} tag={topRowItems.thirdRight.tag} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}