import LegalPageShell from "@/components/legal/LegalPageShell";
import { CONTACT_INFO } from "@/components/contact-us/contactData";

export const metadata = {
  title: "Terms & Conditions | King Moving Services",
  description:
    "Terms and conditions for using King Moving Services website and booking moving services in Arizona.",
};

export default function TermsPage() {
  return (
    <div className="overflow-hidden">
      <LegalPageShell title="Terms & Conditions" lastUpdated="April 10, 2026">
        <section>
          <h2>1. Agreement</h2>
          <p>
            By accessing this website or booking services with {CONTACT_INFO.company} (“we,” “us,” or
            “our”), you agree to these Terms &amp; Conditions. If you do not agree, please do not use
            our site or services.
          </p>
        </section>

        <section>
          <h2>2. Services</h2>
          <p>
            We provide professional moving, packing, storage-related coordination, and related
            logistics services as described on our website or in your written estimate or contract.
            Service scope, pricing, and dates are confirmed in your booking documentation.
          </p>
        </section>

        <section>
          <h2>3. Estimates &amp; pricing</h2>
          <p>
            Quotes and estimates are based on information you provide. Final charges may vary if
            the scope of work, access, inventory, or timing changes. We will explain material changes
            before work proceeds where practicable.
          </p>
        </section>

        <section>
          <h2>4. Your responsibilities</h2>
          <ul>
            <li>Provide accurate information about locations, inventory, and special items.</li>
            <li>Ensure safe access to properties (paths, elevators, parking).</li>
            <li>Secure valuables, important documents, and hazardous materials per applicable law.</li>
            <li>Be available or designate an authorized person on move day.</li>
          </ul>
        </section>

        <section>
          <h2>5. Cancellations &amp; rescheduling</h2>
          <p>
            Cancellation and rescheduling policies may apply based on your agreement or estimate.
            Contact us as early as possible if your plans change.
          </p>
        </section>

        <section>
          <h2>6. Liability</h2>
          <p>
            Liability for loss or damage, if any, is governed by your service agreement, applicable
            law, and any valuation or coverage options you select. This website is provided “as is”;
            we do not guarantee uninterrupted or error-free use of the site.
          </p>
        </section>

        <section>
          <h2>7. Intellectual property</h2>
          <p>
            Content on this site (text, graphics, logos) is owned by or licensed to us and may not
            be copied or reused without permission.
          </p>
        </section>

        <section>
          <h2>8. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Arizona, without regard to conflict
            of law principles, except where preempted by federal law.
          </p>
        </section>

        <section>
          <h2>9. Changes</h2>
          <p>
            We may update these terms from time to time. The “Last updated” date at the top reflects
            the latest revision. Continued use of the site after changes constitutes acceptance of
            the updated terms.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>
            Questions about these terms? Reach us at{" "}
            <a href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a> or{" "}
            <a href={CONTACT_INFO.directPhoneHref}>{CONTACT_INFO.directPhone}</a>.
          </p>
        </section>
      </LegalPageShell>
    </div>
  );
}
