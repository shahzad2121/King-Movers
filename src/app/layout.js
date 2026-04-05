import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "../components/layout/NavbarWrapper";
import Footer from "../components/layout/Footer";
import FloatingStickyButtons from "../components/layout/FloatingStickyButtons";
import ToastProvider from "../components/ui/ToastProvider";

const montserrat = Montserrat({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata = {
  title: "King Moving Services",
  description: "Professional moving services website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased bg-background text-foreground overflow-x-hidden`}
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
