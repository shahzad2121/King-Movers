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
    { Icon: BoxIcon, title: "Professional Packing", desc: "Professional packing ensures safe, efficient, and damage-free item transport." },
    { Icon: ClockIcon, title: "Trained Moving Crew", desc: "Professional packing ensures safe, efficient, and damage-free item transport." },
    { Icon: ShieldIcon, title: "Secure Storage Options", desc: "Secure storage options ensure your belongings stay safe, accessible, and secure." },
    { Icon: HeadphonesIcon, title: "Customer Support", desc: "Customer support ensures prompt assistance and answers for a seamless process." },
  ],
  "office-corporate-shifting": [
    { Icon: BoxIcon, title: "Office Equipment Handling", desc: "We carefully handle desks, IT equipment, and sensitive office items with precision." },
    { Icon: ClockIcon, title: "Minimal Downtime", desc: "After-hours and weekend moves keep your business running without interruption." },
    { Icon: ShieldIcon, title: "Secure Transport", desc: "All corporate assets are insured and secured throughout the entire move." },
    { Icon: HeadphonesIcon, title: "Dedicated Support", desc: "A dedicated coordinator is assigned to manage your office move from start to finish." },
  ],
  "international-relocation": [
    { Icon: BoxIcon, title: "International Packing", desc: "We use certified crating and packing standards for safe international transit." },
    { Icon: ClockIcon, title: "Customs & Documentation", desc: "Our team handles all paperwork and customs requirements for a smooth border crossing." },
    { Icon: ShieldIcon, title: "Freight Options", desc: "Choose between sea and air freight options based on your timeline and budget." },
    { Icon: HeadphonesIcon, title: "Global Support", desc: "We work with trusted partners worldwide to ensure seamless door-to-door delivery." },
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
    "Our goal is to adapt to your specific needs, ensuring a smooth and personalized experience.",
    "We believe in managing tight schedules and providing quality service at competitive prices.",
    "Ensuring your new home shifting space feels like home as quickly as possible.",
    "Our fleet of vehicles is designed to accommodate goods and secure transportation.",
  ],
  "office-corporate-shifting": [
    "We plan every office move in detail to eliminate disruptions to your business operations.",
    "Our experienced teams work around your schedule — evenings and weekends included.",
    "We ensure IT equipment and sensitive files are packed and transported with full care.",
    "Transparent pricing and clear timelines keep your relocation on track and on budget.",
  ],
  "international-relocation": [
    "We have extensive experience managing complex cross-border and international moves.",
    "Our partners worldwide ensure consistent handling standards at every destination.",
    "We take care of documentation and customs so you never face unexpected delays.",
    "Flexible freight options let you choose the best balance of cost and delivery speed.",
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
    p1: "Local home shifting can often feel like a daunting task, even when the distance is short. Whether you are moving to a new apartment across town or relocating your family to a nearby neighbourhood, the process involves several key elements, including packing, transportation, and unpacking. At its core, local home shifting is about transitioning from one residence.",
    p2: "Our local home shifting service is designed to make this process seamless, stress-free, and tailored to your specific needs. We understand the challenges associated with moving, even locally, and we address them with professional expertise and meticulous planning.",
  },
  "office-corporate-shifting": {
    p1: "Relocating an office requires careful coordination, minimal disruption, and experienced handling of equipment and furniture. Even a short move across a business park involves significant logistics — from IT teardown to furniture reassembly. We specialise in smooth, planned corporate transitions.",
    p2: "Our office moving service is built around your business schedule. We work after hours or on weekends when needed, assign a dedicated project coordinator, and provide clear timelines so your team can plan with confidence.",
  },
  "international-relocation": {
    p1: "Moving internationally is one of the most complex logistical challenges you can face. From customs documentation to freight selection, every step requires expert knowledge and trusted partners at both origin and destination.",
    p2: "Our international relocation service handles every detail — packaging to international standards, coordinating air or sea freight, managing customs clearance, and arranging final delivery. We make global moves feel manageable.",
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
  "home-shifting": "Local home shifting doesn't have to be stressful. With our professional and reliable services, you can look forward to a smooth transition to your new home. Let us handle the complexities of your move so you can focus on the excitement of starting fresh in a new place.",
  "office-corporate-shifting": "An office relocation is a major undertaking, but with the right partner it doesn't have to disrupt your business. Let our experienced team handle the logistics so your staff can stay focused on what matters.",
  "international-relocation": "International moves are complex, but you don't have to navigate them alone. Our experienced team and worldwide network ensure your belongings arrive safely, on time, and without the paperwork headaches.",
  "vehicle-transportation": "Your vehicle deserves the same care you'd give it yourself. With our fully insured, tracked, and professionally managed transport service, you can trust that it will arrive exactly as it left.",
  "furniture-moving": "Furniture moving doesn't have to mean scratches, stress, or reassembly nightmares. Our trained crews handle every piece with care so you can settle into your new space without the worry.",
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
          Choosing the right moving service is critical to the success of your relocation. With our team, you benefit from years of experience, a customer-focused approach, and commitment to excellence. We prioritize the safety of your belongings and your peace of mind, making us the trusted choice for countless clients.
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