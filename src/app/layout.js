import { Plus_Jakarta_Sans, Open_Sans, Work_Sans, Roboto } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "../components/layout/NavbarWrapper";
import Footer from "../components/layout/Footer";
import FloatingStickyButtons from "../components/layout/FloatingStickyButtons";
import ToastProvider from "../components/ui/ToastProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-hero-heading",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-hero-body",
});

export const metadata = {
  title: "King Moving Services",
  description: "Professional moving services website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${openSans.variable} ${workSans.variable} ${roboto.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <NavbarWrapper />
        <main>{children}</main>
        <Footer />
        <FloatingStickyButtons />
        <ToastProvider />
      </body>
    </html>
  );
}

