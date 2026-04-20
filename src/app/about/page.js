import AboutPageClient from "@/components/about/AboutPageClient";

export const metadata = {
  title: "About Us | King Moving Services",
  description:
    "Learn about King Moving Services — your trusted partner for residential, commercial, and long-distance moving. 8 years of reliable relocation experience.",
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <AboutPageClient />
    </div>
  );
}
