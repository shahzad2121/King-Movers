import FaqPageClient from "@/components/faq/FaqPageClient";

export const metadata = {
  title: "FAQ | King Moving Services",
  description:
    "Answers about local and long-distance moving, storage, and international relocations from King Moving Services — packing, timing, trucks, and more.",
};

export default function FaqPage() {
  return (
    <div className="overflow-hidden">
      <FaqPageClient />
    </div>
  );
}
