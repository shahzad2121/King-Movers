"use client";

const items = [
  {
    id: "top-left",
    title: "Local Move",
    tag: "Local Shifting",
    img: "/images/international-move00.jpg",
    position: "top-left",
  },
  {
    id: "center",
    title: "House Hold Items",
    tag: "International Move",
    img: "/images/international-move.jpg",
    position: "center",
  },
  {
    id: "top-right",
    title: "Table Move",
    tag: "Table Move",
    img: "/images/international-move2.jpg",
    position: "top-right",
  },
  {
    id: "bottom-left",
    title: "Blanketed Move",
    tag: "Furniture Move",
    img: "/images/Blanketed.jpg",
    position: "bottom-left",
  },
  {
    id: "bottom-right",
    title: "Piano Move",
    tag: "Local Shifting",
    img: "/images/Piano.jpeg",
    position: "bottom-right",
  },
];

const Caption = ({ title, tag }) => (
  <div className="flex items-center justify-between px-0.5 mt-2">
    <span className="font-serif text-lg font-semibold text-foreground tracking-tight">{title}</span>
    <span className="text-sm text-muted-foreground font-normal">{tag}</span>
  </div>
);

export default function WorkGallery() {
  const topLeft    = items.find(i => i.position === "top-left");
  const center     = items.find(i => i.position === "center");
  const topRight   = items.find(i => i.position === "top-right");
  const bottomLeft = items.find(i => i.position === "bottom-left");
  const bottomRight= items.find(i => i.position === "bottom-right");

  return (
    <section className="bg-surface font-sans py-12 md:py-14">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">

        {/* Heading */}
        <h1
          className="font-serif text-center font-bold text-foreground mb-10 md:mb-12"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em" }}
        >
          Our Work Gallery
        </h1>

        {/* Mosaic Grid — fixed row height = side card (280 + caption) so no gap between top/bottom items */}
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 md:gap-4 md:grid-cols-[1fr_1.9fr_1fr] md:grid-rows-[324px_324px]"
        >

          {/* TOP LEFT */}
          <div className="group flex flex-col md:col-1 md:row-1">
            <div className="rounded-2xl overflow-hidden h-[220px] sm:h-[240px] md:h-[280px]">
              <img src={topLeft.img} alt={topLeft.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            </div>
            <Caption title={topLeft.title} tag={topLeft.tag} />
          </div>

          {/* CENTER — spans 2 rows (324 + gap + 324) so it aligns with side columns */}
          <div className="group flex flex-col sm:col-span-2 md:col-2 md:row-[1/3]">
            <div
              className="rounded-2xl overflow-hidden h-[260px] sm:h-[360px] md:min-h-[620px] md:h-[calc(100%-44px)]"
            >
              <img src={center.img} alt={center.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            </div>
            <Caption title={center.title} tag={center.tag} />
          </div>

          {/* TOP RIGHT */}
          <div className="group flex flex-col md:col-3 md:row-1">
            <div className="rounded-2xl overflow-hidden h-[220px] sm:h-[240px] md:h-[280px]">
              <img src={topRight.img} alt={topRight.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            </div>
            <Caption title={topRight.title} tag={topRight.tag} />
          </div>

          {/* BOTTOM LEFT */}
          <div className="group flex flex-col md:col-1 md:row-2">
            <div className="rounded-2xl overflow-hidden h-[220px] sm:h-[240px] md:h-[280px]">
              <img src={bottomLeft.img} alt={bottomLeft.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            </div>
            <Caption title={bottomLeft.title} tag={bottomLeft.tag} />
          </div>

          {/* BOTTOM RIGHT */}
          <div className="group flex flex-col md:col-3 md:row-2">
            <div className="rounded-2xl overflow-hidden h-[220px] sm:h-[240px] md:h-[280px]">
              <img src={bottomRight.img} alt={bottomRight.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            </div>
            <Caption title={bottomRight.title} tag={bottomRight.tag} />
          </div>

        </div>
      </div>
    </section>
  );
}