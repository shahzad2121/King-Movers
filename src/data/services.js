/**
 * Shared services list for home Services section, Services page, and detail pages.
 * Image paths are from public (e.g. /images/...).
 */
export const services = [
  {
    id: 1,
    slug: "home-shifting",
    title: "Home Shifting",
    img: "/images/service-1.jpg",
    description:
      "We make residential moves smooth and stress-free. Whether you're moving across town or across the state, our team handles packing, loading, transport, and unpacking with care.",
    content: `Moving to a new home is a big step. King Moving Services takes the weight off your shoulders with full-service home shifting tailored to your needs.

**What we offer**
- Packing and unpacking with quality materials
- Careful handling of furniture and fragile items
- Loading and unloading with experienced crews
- Local and long-distance residential moves

**Why choose us**
Our crews are trained to protect your belongings and respect your schedule. We provide clear communication from quote to delivery so you can focus on settling into your new space.`,
  },
  {
    id: 2,
    slug: "office-corporate-shifting",
    title: "Office & Corporate Shifting",
    img: "/images/service.jpg",
    description:
      "Minimize downtime with planned office and corporate relocations. We move desks, IT equipment, and files so your business is back up quickly.",
    content: `Relocating your office or business doesn't have to disrupt operations. We coordinate with your team to plan moves around your schedule.

**What we offer**
- After-hours and weekend moves when needed
- Handling of desks, cabinets, and office furniture
- Coordination for IT and sensitive equipment
- Phased moves for larger offices

**Why choose us**
We understand that time is money. Our project-based approach and clear timelines help you plan with confidence and get back to business fast.`,
  },
  {
    id: 3,
    slug: "international-relocation",
    title: "International Relocation Shifting",
    img: "/images/service-4.jpg",
    description:
      "Cross-border and international moves with documentation support and door-to-door coordination.",
    content: `Moving abroad involves more than just boxes—customs, documentation, and timing all matter. We help you navigate the process from start to finish.

**What we offer**
- International packing and crating standards
- Documentation and customs guidance
- Sea and air freight options
- Destination delivery and unpacking

**Why choose us**
We work with trusted partners worldwide so your belongings are tracked and handled to the same standards you expect locally.`,
  },
  {
    id: 4,
    slug: "vehicle-transportation",
    title: "Vehicle Transportation",
    img: "/images/Truck-4.jpg",
    description:
      "Safe, insured transport for cars, motorcycles, and other vehicles locally or long distance.",
    content: `Need to move a car, motorcycle, or other vehicle? We arrange enclosed or open carrier transport with full insurance and tracking.

**What we offer**
- Car and motorcycle transport
- Open and enclosed carrier options
- Door-to-door pickup and delivery
- Full insurance coverage

**Why choose us**
We use vetted carriers and clear paperwork so your vehicle arrives on time and in the condition it left.`,
  },
  {
    id: 5,
    slug: "furniture-moving",
    title: "Furniture Moving",
    img: "/images/service-6.jpg",
    description:
      "Specialist handling for large and heavy furniture—disassembly, padding, and reassembly included.",
    content: `Sofas, beds, dressers, and specialty pieces need extra care. Our crews are equipped to move heavy and bulky furniture safely.

**What we offer**
- Disassembly and reassembly when needed
- Blankets, straps, and padding for protection
- Stair and elevator handling
- Single-item or full-home furniture moves

**Why choose us**
We treat your furniture like our own—no scratches, no shortcuts. Get a quote for one piece or a whole house.`,
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null;
}

export function getAllSlugs() {
  return services.map((s) => ({ slug: s.slug }));
}
