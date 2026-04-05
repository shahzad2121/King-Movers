import ContactPageClient from "@/components/contact-us/ContactPageClient";

export const metadata = {
  title: "Contact Us | King Moving Services",
  description:
    "Contact King Moving Services for moving quotes, storage support, and relocation planning in Scottsdale and across Arizona.",
};

export default function ContactUsPage() {
  return (
    <div className="overflow-hidden">
      <ContactPageClient />
    </div>
  );
}
