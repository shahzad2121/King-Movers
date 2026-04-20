/** @typedef {{ id: string; question: string; answer: string }} FaqItem */

/** @type {Record<string, FaqItem[]>} */
export const FAQ_BY_TAB = {
  general: [
    {
      id: "general-0",
      question: "Are you a carrier or a broker?",
      answer:
        "We are a full-service carrier, meaning we provide the trucks, drivers, movers, and all the padding and blankets needed to ensure your items are safely transported.",
    },
    {
      id: "general-1",
      question: "What do you mean by full-service?",
      answer:
        "As a full-service mover, we handle all aspects of the move—from loading and transporting your furniture and belongings, to unloading them at your new home. We do all the labor so you don’t have to!",
    },
    {
      id: "general-2",
      question: "Why cant I just get an online quote? Why do I need to speak to someone?",
      answer:
        "No two moves are the same, so an accurate quote requires more than just a general estimate. Your move may differ greatly from others in terms of volume, fragile items, or access issues. We ask for about 10-15 minutes to discuss your move details so we can give you a customized, accurate estimate. If you’re unavailable to speak directly, our interactive system allows you to submit an inventory, and your sales rep can work with that for a more accurate quote. Be cautious of online quotes—miscommunication can lead to unexpected charges down the line.",
    },
    {
      id: "general-3",
      question: "I’m at work and don’t have time to discuss my move right now. What should I do?",
      answer:
        "We understand that many customers have busy schedules. Just let us know a more convenient time, and we’ll be happy to call you after work hours or on the weekend.",
    },
    {
      id: "general-4",
      question: "Do you charge by weight?",
      answer:
        "No, we don’t charge by weight. Weight can vary greatly depending on materials, and it’s difficult to estimate accurately without weighing your items. Instead, we base estimates on the space your items will occupy in the truck, which is more reliable and transparent.",
    },
    {
      id: "general-5",
      question: "How is your estimate based on space instead of weight?",
      answer:
        "Fixed dimensions are more reliable than weight for moving estimates. For example, a Queen-size bed frame has a standard size that doesn’t fluctuate much, whereas its weight can vary significantly. Using cubic feet to estimate the amount of space your belongings will occupy in the truck helps us give you a more accurate quote.",
    },
    {
      id: "general-6",
      question: "How do you calculate the cubic feet of my furniture over the phone?",
      answer:
        "We either use our detailed database, which assigns cubic feet values to common household items, or we ask you to provide the measurements of larger furniture. All we need is the height, width, and depth of any item that doesn’t fit in a standard box. This helps us create a precise and customized estimate.",
    },
    {
      id: "general-7",
      question: "What does your estimate include?",
      answer:
        "Our estimate includes the cost of fuel surcharges, tolls, taxes, an unlimited supply of moving pads and blankets, and the loading/unloading of your goods.",
    },
    {
      id: "general-8",
      question: "I’m not sure how many boxes I’ll be moving. How should I estimate this?",
      answer:
        "It’s normal to be unsure of the exact number of boxes. Just provide us with a rough estimate of the maximum number of boxes, and we’ll base our quote on that. If the actual number is less, we can adjust the quote down later.",
    },
    {
      id: "general-9",
      question: "Does the estimate include packing services?",
      answer:
        "Basic estimates do not include packing your boxes or supplying the boxes themselves. We expect all boxes to be packed and sealed before our movers arrive. However, we can supply packing services at an additional cost.",
    },
    {
      id: "general-10",
      question: "How do I pay for the estimate?",
      answer:
        "Payment is structured in three stages:\n\nDeposit: A 15% deposit is required to reserve your spot and guarantee your move. This deposit is fully refundable up to 7 days before the move.\nPickup: 60% of the total is due on the day of pickup. You can pay by cash, credit/debit card (Visa or MasterCard), cashier’s check, or money order.\nDelivery: The final 25% is due upon delivery. You can pay by cash, credit/debit card (subject to a 4% processing fee), or postal money order.",
    },
    {
      id: "general-11",
      question: "What type of insurance do you offer?",
      answer:
        "By law, we provide Limited Liability Coverage at $0.60 per pound, per item. For additional protection, we recommend exploring:\n\nRenters or Homeowners Insurance (if you have it).",
    },
  ],
  moving: [
    {
      id: "moving-0",
      question: "Can you dismantle beds and cupboards?",
      answer:
        "Absolutely. Our crew carefully disassembles large pieces—bed frames, wardrobes, shelving units—and reassembles them in your new home so everything fits through doorways safely and is set up where you want it.",
    },
    {
      id: "moving-1",
      question: "Do you put up shelves and curtains?",
      answer:
        "We’re happy to help with basic reinstall tasks many customers need, including shelves, curtain rods, TV mounting, and reconnecting simple appliances. Tell us during booking what you need so we can plan time and tools accordingly.",
    },
    {
      id: "moving-2",
      question: "What happens if my items are damaged?",
      answer:
        "We treat every item with care and use proven loading and protection methods. If something rare does go wrong, we work with you under our stated valuation and claims process—repair or replacement depends on coverage and the agreement for your move.",
    },
    {
      id: "moving-3",
      question: "What time do you start a move?",
      answer:
        "We know timing matters. Crews typically arrive early in the day so we can complete loading and travel on schedule—your coordinator will confirm your exact arrival window before move day.",
    },
    {
      id: "moving-4",
      question: "Do you have covered trucks?",
      answer:
        "Yes. Our fleet uses enclosed trucks to shield your belongings from sun, dust, and weather. Equipment and tie-downs are used so items stay secure from pickup through delivery.",
    },
    {
      id: "moving-5",
      question: "What should I do with fragile items?",
      answer:
        "The Department of Transportation requires that fragile items—such as glass tables, artwork, and stone objects—be properly wrapped before loading. If you prefer not to pack these yourself, we can offer crating services for an additional charge.",
    },
    {
      id: "moving-6",
      question: "I’m too busy to pack before the move! What can I do?",
      answer:
        "No problem! We offer a Full Packing Service where we’ll handle all your packing—both fragile and non-fragile items. Prices are based on the volume of goods, and we’ll bring all necessary packing materials. Sit back and relax while we take care of everything!",
    },
    {
      id: "moving-7",
      question: "What if I have furniture that needs disassembling?",
      answer:
        "Don't worry! Our team will disassemble any furniture that needs to be taken apart—bed frames, tables, bookshelves, etc. This service is included in your estimate.",
    },
  ],
  storage: [
    {
      id: "storage-0",
      question: "How safe is your storage?",
      answer:
        "King Movers storage is built around controlled access, monitoring, and disciplined inventory practices. Your goods stay in our care until you’re ready for delivery or pickup—we prioritize security and accountability at every step.",
    },
    {
      id: "storage-1",
      question: "Do you offer climate-controlled storage?",
      answer:
        "When you need extra protection for temperature-sensitive items—electronics, fine wood, artwork—ask about climate-controlled options availability in your area. We’ll recommend the right fit based on what you’re storing and for how long.",
    },
    {
      id: "storage-2",
      question: "Can I access my items while they’re in storage?",
      answer:
        "Access policies depend on facility type and your service plan. Your coordinator will explain visit windows, notice periods, and any fees so you know exactly how to retrieve or add items without surprises.",
    },
    {
      id: "storage-3",
      question: "How flexible are storage terms?",
      answer:
        "Whether you need storage for a few weeks between closings or several months during a remodel, we offer flexible terms. Rates and minimums are spelled out up front so you can extend or transition to delivery when you’re ready.",
    },
    {
      id: "storage-4",
      question: "What security measures are in place?",
      answer:
        "Expect controlled entry, surveillance-minded operations, and careful handling protocols. We combine physical safeguards with clear documentation so you always know what’s stored and where it stands in your plan.",
    },
    {
      id: "storage-5",
      question: "What if my new home isn’t ready yet? Can I store my items?",
      answer:
        "Yes, we offer up to one month of free storage! After that, storage is charged at $0.60 per cubic foot. There’s no additional fee for delivery from storage to your final destination.",
    },
  ],
  international: [
    {
      id: "international-0",
      question: "What documentation will I need for an international move?",
      answer:
        "Requirements vary by destination—passports, visas, residence paperwork, and itemized inventories are common. We guide you through the checklist early so customs and carriers get clean, complete paperwork and your shipment isn’t delayed over missing forms.",
    },
    {
      id: "international-1",
      question: "How do you handle customs clearance?",
      answer:
        "Our international team coordinates with partners and brokers where needed, prepares declarations, and keeps you informed at key milestones. The goal is predictable clearance without avoidable holds or surprise fees.",
    },
    {
      id: "international-2",
      question: "What packing standards apply overseas?",
      answer:
        "International moves often demand sturdier crating, moisture barriers, and detailed labeling. We pack to transit and destination requirements so your shipment is protected for long legs by sea or air—not just a short local truck ride.",
    },
    {
      id: "international-3",
      question: "How long does international delivery take?",
      answer:
        "Timelines depend on mode (air vs. ocean), distance, customs, and seasonal volume. After survey, we provide an estimated range and update you as the journey progresses so you can plan arrival and setup.",
    },
    {
      id: "international-4",
      question: "Can I track my shipment?",
      answer:
        "Yes. You’ll receive updates at major milestones—booking, dispatch, arrival in port or hub, customs events, and final delivery. Ask your coordinator about the tracking options available on your specific lane and carrier.",
    },
  ],
};

export const FAQ_TABS = [
  { key: "general", label: "General Questions" },
  { key: "moving", label: "Moving" },
  { key: "storage", label: "Storage" },
  { key: "international", label: "International Moving" },
];
