import BlogPageClient from "@/components/blog/BlogPageClient";

export const metadata = {
  title: "Blog | King Moving Services",
  description:
    "Moving tips, packing guides, and relocation advice from King Moving Services — trusted movers in Scottsdale and across Arizona.",
  openGraph: {
    title: "Blog | King Moving Services",
    description:
      "Moving tips, packing guides, and relocation advice from King Moving Services.",
  },
};

export default function BlogPage() {
  return (
    <div className="overflow-hidden">
      <BlogPageClient />
    </div>
  );
}
