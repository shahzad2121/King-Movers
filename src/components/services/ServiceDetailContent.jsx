// Icon components — stroke white for contrast on primary bg
const BoxIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
    <path d="M16 2.5A10 10 0 0122 12"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const HeadphonesIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0118 0v6"/>
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
  </svg>
);

const BadgeCheckIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 3.2L18 4l.8 3.8L22 10l-2 3.2 2 3.2-3.2 2.8-.8 3.8-3.6-1.2L12 24l-2.4-3.2L6 21.8l-.8-3.8L2 16l2-3.2L2 9.6l3.2-2.8L6 4l3.6 1.2z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

// Feature cards data per service
const featuresBySlug = {
  "home-shifting": [
    { Icon: BoxIcon, title: "Full & Partial Packing", desc: "Choose full packing, partial packing, or unpacking support. We use proper materials and techniques to keep your items safe in transit." },
    { Icon: ClockIcon, title: "Trained Movers, Timely Service", desc: "Our moving crews are carefully selected and trained to deliver efficient, well-planned moves while keeping your timeline on track." },
    { Icon: ShieldIcon, title: "Protection You Can Trust", desc: "From blankets and bubble wrap to stretch wrap and careful loading, we take every precaution to prevent scratches, damage, or breakage." },
    { Icon: HeadphonesIcon, title: "Responsive Customer Support", desc: "Our customer service team gathers your move details and builds a plan around your needs, with clear communication from start to finish." },
  ],
  "office-corporate-shifting": [
    { Icon: BoxIcon, title: "Office Equipment Handling", desc: "We carefully handle desks, IT equipment, and sensitive office items with precision." },
    { Icon: ClockIcon, title: "Minimal Downtime", desc: "After-hours and weekend moves keep your business running without interruption." },
    { Icon: ShieldIcon, title: "Secure Transport", desc: "All corporate assets are insured and secured throughout the entire move." },
    { Icon: HeadphonesIcon, title: "Dedicated Support", desc: "A dedicated coordinator is assigned to manage your office move from start to finish." },
  ],
  "international-relocation": [
    { Icon: BoxIcon, title: "Detailed Packing & Inventory", desc: "We pack and label every shipment carefully to help your items move safely through long-distance and complex transport routes." },
    { Icon: ClockIcon, title: "Planned Logistics", desc: "Our team coordinates scheduling, routing, and milestones in advance so your move stays organized and predictable." },
    { Icon: ShieldIcon, title: "Protection First", desc: "Fragile and high-value items receive extra care with proven packing methods designed to reduce movement and prevent damage." },
    { Icon: HeadphonesIcon, title: "Dedicated Service Guidance", desc: "You get direct support throughout the process, with clear updates and practical guidance at each stage of your move." },
  ],
  "vehicle-transportation": [
    { Icon: BoxIcon, title: "Car & Motorcycle Transport", desc: "We safely transport cars, motorcycles, and specialty vehicles over any distance." },
    { Icon: ClockIcon, title: "Carrier Options", desc: "Choose between enclosed or open carrier transport for maximum flexibility." },
    { Icon: ShieldIcon, title: "Full Insurance", desc: "Every vehicle is fully insured during transport for complete peace of mind." },
    { Icon: HeadphonesIcon, title: "Live Tracking", desc: "Track your vehicle's journey in real time with live status updates and support." },
  ],
  "furniture-moving": [
    { Icon: BoxIcon, title: "Disassembly & Reassembly", desc: "We disassemble and reassemble large furniture pieces to ensure safe transport." },
    { Icon: ClockIcon, title: "Padded Protection", desc: "Blankets, straps, and custom padding protect every item during the move." },
    { Icon: ShieldIcon, title: "Stair & Elevator Handling", desc: "Our crews are trained to navigate stairs, elevators, and tight spaces safely." },
    { Icon: HeadphonesIcon, title: "Flexible Scheduling", desc: "Book a single item or a full-home move with scheduling that fits your timeline." },
  ],
};

const whyChoosePointsBySlug = {
  "home-shifting": [
    "Our staff is carefully selected and trained to provide efficient, timely, and well-planned moves.",
    "We customize every move plan around your household, timeline, and budget — no one-size-fits-all process.",
    "Our smart planning and streamlined operations help keep your move affordable without compromising quality.",
    "We stay flexible and do our best to accommodate last-minute needs when moving day changes unexpectedly.",
  ],
  "office-corporate-shifting": [
    "We plan every office move in detail to eliminate disruptions to your business operations.",
    "Our experienced teams work around your schedule — evenings and weekends included.",
    "We ensure IT equipment and sensitive files are packed and transported with full care.",
    "Transparent pricing and clear timelines keep your relocation on track and on budget.",
  ],
  "international-relocation": [
    "We build a clear move plan up front so complex relocations feel manageable, not overwhelming.",
    "Our team uses proven packing and handling methods designed for long-distance and multi-stage transport.",
    "You receive practical guidance and responsive communication throughout each phase of the move.",
    "We focus on safe delivery, careful handling, and efficient coordination from origin to destination.",
  ],
  "vehicle-transportation": [
    "We use vetted and licensed carriers to ensure your vehicle is in safe hands.",
    "Full insurance coverage is included for every vehicle we transport.",
    "Real-time tracking keeps you informed throughout the entire journey.",
    "Door-to-door service means no hassle — we pick up and deliver at your location.",
  ],
  "furniture-moving": [
    "Every item is wrapped and padded to prevent scratches, dents, and damage.",
    "Our teams are equipped for heavy lifting, stairs, and tight-space navigation.",
    "We offer both single-item moves and full-home furniture relocations.",
    "Disassembly and reassembly are included so your furniture arrives ready to use.",
  ],
};

const descriptionsBySlug = {
  "home-shifting": {
    p1: "Kings Moving Services makes moving simple. From local and long-distance home moves to office and retail relocations, our experienced movers handle it all. With affordable, high-quality moving and trucking services, relocating your family or business becomes convenient and stress-free.",
    p2: "Our customer service team gathers the details of your move and customizes a plan that fits your unique needs. No two moves are the same, and we make sure yours is handled with care and precision from first contact to final delivery.",
  },
  "office-corporate-shifting": {
    p1: "Office and retail relocations need speed, planning, and reliable execution. From a single workstation to a full office floor, our experienced movers handle equipment, furniture, and packed inventory with care while keeping disruption to your operations as low as possible.",
    p2: "Our team works with your schedule and customizes a move plan around your business needs. With organized logistics, efficient crews, and clear communication, we help your team transition quickly and get back to work with confidence.",
  },
  "international-relocation": {
    p1: "Long-route and international-style moves involve many moving parts, and poor planning can quickly create delays and extra stress. We make the process simpler with organized coordination, careful packing, and a move plan tailored to your shipment, timing, and destination requirements.",
    p2: "From first inventory to final delivery, our team focuses on clear communication, safe handling, and efficient logistics. You get practical guidance at every step, so your relocation stays structured, predictable, and easier to manage.",
  },
  "vehicle-transportation": {
    p1: "Transporting a vehicle across the country or to a new city requires more than just a truck — it demands proper carriers, full insurance, and a team that understands how to handle your asset with care.",
    p2: "We arrange open and enclosed carrier transport for cars, motorcycles, and specialty vehicles. Every move is tracked, insured, and handled by vetted carriers so your vehicle arrives on schedule and in perfect condition.",
  },
  "furniture-moving": {
    p1: "Moving large or heavy furniture is physically demanding and, if done wrong, costly. Scratched floors, dented walls, and damaged pieces are common results of rushed or inexperienced handling.",
    p2: "Our furniture moving service includes professional disassembly, proper padding, and careful reassembly at your destination. Whether it's a single sofa or a full household of furniture, we treat every piece with the same care.",
  },
};

const conclusionsBySlug = {
  "home-shifting": "Moving your home should feel exciting, not overwhelming. With experienced movers, careful protection, and a plan built around your needs, we make your transition smooth, affordable, and stress-free.",
  "office-corporate-shifting": "Commercial moving is easier with the right team behind you. We combine smart planning, efficient crews, and reliable communication to keep your business move organized and on schedule.",
  "international-relocation": "Complex relocations become manageable when every step is planned with care. Our team helps you move with confidence through clear guidance, safe handling, and dependable execution.",
  "vehicle-transportation": "Your vehicle is handled with professional care from pickup to delivery. With reliable carriers, transparent updates, and full protection standards, you can move forward with confidence.",
  "furniture-moving": "Protecting furniture is all about method and attention to detail. Our trained crews wrap, move, and reassemble each piece carefully so you can settle in without damage-related stress.",
};

export default function ServiceDetailContent({ service }) {
  const slug = service.slug;
  const features = featuresBySlug[slug] || featuresBySlug["home-shifting"];
  const whyPoints = whyChoosePointsBySlug[slug] || whyChoosePointsBySlug["home-shifting"];
  const descs = descriptionsBySlug[slug] || descriptionsBySlug["home-shifting"];
  const conclusion = conclusionsBySlug[slug] || conclusionsBySlug["home-shifting"];

  return (
    <article className="min-w-0 flex-1">

      {/* ── SERVICE DESCRIPTION ── */}
      <section className="mb-12">
        <h2 className="font-serif text-3xl font-bold text-foreground tracking-tight mb-6">
          Service Description
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed mb-5">
          {descs.p1}
        </p>
        <p className="text-muted-foreground text-base leading-relaxed">
          {descs.p2}
        </p>
      </section>

      {/* ── FEATURE CARDS 2x2 ── */}
      <section className="mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {features.map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col gap-3">
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                <Icon />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground tracking-tight">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-foreground tracking-tight mb-4">
          Why Choose Us for {service.title}?
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed mb-6">
          We are a company you can have confidence in. Our team is carefully selected, trained for efficient and
          well-planned moves, and ready to accommodate last-minute needs whenever possible. We keep your move
          cost-effective through smart planning and streamlined processes, while delivering white glove treatment from
          your doorstep to your destination.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mb-6">
          Need extra muscle without a full-service relocation? We also provide labor and truck support, including
          professional load and unload services for homes, offices, containers, and trucks, completed safely and
          efficiently to keep your move on track.
        </p>

        <ul className="flex flex-col gap-4">
          {whyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <BadgeCheckIcon />
              <span className="text-muted-foreground text-base leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── CONCLUSION ── */}
      <section>
        <h2 className="font-serif text-2xl font-bold text-foreground tracking-tight mb-4">
          Conclusion
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          {conclusion}
        </p>
      </section>

    </article>
  );
}