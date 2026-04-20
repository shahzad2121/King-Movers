import Image from "next/image";
import { CONTACT_INFO } from "@/components/contact-us/contactData";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=King+Moving+Services+Scottsdale+Arizona+reviews";
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsappPhoneDigits}&text=Hi%20King%20Moving%20Services%2C%20I%27d%20like%20to%20ask%20about%20a%20move.`;

function GoogleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.03-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function AboutCompanySection({ sectionRef, leftRef, rightRef }) {
  return (
    <section
      ref={sectionRef}
      className="bg-background py-20 px-6 md:px-12 border-t border-foreground/5"
    >
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div ref={leftRef} className="flex flex-col">
          <p className="text-xl md:text-2xl text-foreground/75 font-medium leading-snug">
            Moving is easy,
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-foreground leading-[1.15] mt-1 mb-6">
            But with King Moving Services, it&apos;s more than you expect.
          </h2>

          <p className="text-[15px] md:text-[16px] leading-[1.75] text-foreground/70">
            Our dedicated team helps make your move{" "}
            <strong className="font-bold text-foreground">smooth, seamless, and stress-free</strong>.
            With <strong className="font-bold text-foreground">thousands of successful moves</strong>{" "}
            behind us and consistently strong feedback from Arizona families and businesses, we are
            proud to be among{" "}
            <strong className="font-bold text-foreground">
              Scottsdale&apos;s most trusted moving teams
            </strong>
            . From{" "}
            <strong className="font-bold text-foreground">professional packing and unpacking</strong>{" "}
            to careful handling of every detail, our{" "}
            <strong className="font-bold text-foreground">experienced movers</strong> focus on
            safety and clarity at every step. Choose{" "}
            <strong className="font-bold text-foreground">King Moving Services</strong> for a{" "}
            <strong className="font-bold text-foreground">
              moving experience that exceeds expectations
            </strong>
            {" "}and join customers who rely on us for their move.{" "}
            <strong className="font-bold text-foreground">
              Relocating in Scottsdale, across Arizona, or planning a long-distance move
            </strong>{" "}
            has never been easier with a team that stays accountable from quote to delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <GoogleIcon className="h-5 w-5 shrink-0" />
              Visit our Google Reviews
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0 text-primary" />
              Support on WhatsApp
            </a>
          </div>
        </div>

        <div className="shrink-0 flex items-center justify-center">
          <div
            className="rounded-full p-[6px]"
            style={{
              background: "transparent",
              border: "5px solid var(--accent)",
              borderRadius: "50%",
              width: 420,
              height: 420,
            }}
          >
            <div
              className="w-full h-full rounded-full overflow-hidden"
              style={{ width: "100%", height: "100%" }}
            >
              {/* Replace src with your actual image */}
              <img src="/images/hero/Kingsmovinging-service.jpg" alt="King Moving Services truck" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
