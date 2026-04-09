import LegalPageShell from "@/components/legal/LegalPageShell";
import { CONTACT_INFO } from "@/components/contact-us/contactData";

export const metadata = {
  title: "Privacy Policy | King Moving Services",
  description:
    "How King Moving Services collects, uses, and protects your personal information when you use our website and services.",
};

export default function PrivacyPage() {
  return (
    <div className="overflow-hidden">
      <LegalPageShell title="Privacy Policy" lastUpdated="April 10, 2026">
        <section>
          <h2>1. Introduction</h2>
          <p>
            {CONTACT_INFO.company} (“we,” “us,” or “our”) respects your privacy. This policy describes
            how we collect, use, and share information when you visit our website, submit forms, or
            use our moving services.
          </p>
        </section>

        <section>
          <h2>2. Information we collect</h2>
          <h3>Information you provide</h3>
          <ul>
            <li>Contact details (name, email, phone, addresses).</li>
            <li>Move details (dates, home size, service type, messages).</li>
            <li>Communications you send us by phone, email, or web forms.</li>
          </ul>
          <h3>Automatic information</h3>
          <p>
            We may collect technical data such as browser type, device type, general location
            (region), and pages visited, to improve site performance and security.
          </p>
        </section>

        <section>
          <h2>3. How we use information</h2>
          <ul>
            <li>To respond to quote requests, questions, and service bookings.</li>
            <li>To schedule crews, coordinate moves, and deliver our services.</li>
            <li>To send service-related messages (e.g., confirmations, updates).</li>
            <li>To improve our website, marketing (where permitted), and customer experience.</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        <section>
          <h2>4. Sharing of information</h2>
          <p>
            We do not sell your personal information. We may share information with trusted
            service providers who assist us (e.g., hosting, email delivery, form processing) under
            confidentiality obligations, or when required by law.
          </p>
        </section>

        <section>
          <h2>5. Cookies &amp; similar technologies</h2>
          <p>
            Our site may use cookies or similar tools to remember preferences, measure traffic, or
            support site functionality. You can control cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2>6. Data retention</h2>
          <p>
            We retain information only as long as needed for the purposes above, including legal,
            accounting, or operational requirements.
          </p>
        </section>

        <section>
          <h2>7. Security</h2>
          <p>
            We use reasonable measures to protect information. No method of transmission over the
            internet is 100% secure; we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>8. Your choices</h2>
          <p>
            Depending on your location, you may have rights to access, correct, or delete certain
            personal information, or to opt out of certain communications. Contact us using the
            details below to make a request.
          </p>
        </section>

        <section>
          <h2>9. Children’s privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect personal
            information from children.
          </p>
        </section>

        <section>
          <h2>10. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The “Last updated” date reflects the
            latest version. Please review this page periodically.
          </p>
        </section>

        <section>
          <h2>11. Contact us</h2>
          <p>
            For privacy-related questions, contact us at{" "}
            <a href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a>, call{" "}
            <a href={CONTACT_INFO.directPhoneHref}>{CONTACT_INFO.directPhone}</a>, or write to{" "}
            {CONTACT_INFO.addressLine1}, {CONTACT_INFO.addressLine2}.
          </p>
        </section>
      </LegalPageShell>
    </div>
  );
}
