import { notFound } from "next/navigation";
import { getServiceBySlug, getAllSlugs } from "@/data/services";
import ServiceDetailHeader from "@/components/services/ServiceDetailHeader";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import ServiceDetailSidebar from "@/components/services/ServiceDetailSidebar";

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | King Moving Services" };
  return {
    title: `${service.title} | King Moving Services`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-background font-sans">
      {/* Full-width header: shown first, no sidebar */}
      <ServiceDetailHeader service={service} />

      {/* Detail section + sidebar: visible when you scroll down */}
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 lg:items-stretch">
          <div className="flex-1 min-w-0 order-2 lg:order-1">
            <ServiceDetailContent service={service} />
          </div>
          <aside className="order-1 lg:order-2 w-full lg:w-72 lg:min-w-[18rem]">
            <ServiceDetailSidebar />
          </aside>
        </div>
      </div>
    </main>
  );
}
