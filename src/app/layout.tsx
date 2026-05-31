import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Swapnosiri Builders Ltd. | Luxury Real Estate Developer in Bangladesh",
    template: "%s | Swapnosiri Builders Ltd."
  },
  description: "Experience modern, secure, and prestigious living spaces in Purbachal and Jolshiri Abashon. Swapnosiri Builders Ltd. focuses on developing high-quality, BNBC compliant structural designs with earthquake and wind resistance.",
  keywords: [
    "Swapnosiri Builders Ltd",
    "Swapnosiri Builders",
    "Luxury Real Estate Bangladesh",
    "Purbachal New Town Apartments",
    "Jolshiri Abashon Apartments",
    "Premium Residential Buildings Dhaka",
    "Earthquake Resistant Buildings Bangladesh",
    "Wind Resistant Buildings Dhaka",
    "Md. Shahbuddin CEO Swapnosiri"
  ],
  authors: [{ name: "Swapnosiri Builders Ltd." }],
  creator: "Swapnosiri Builders Ltd.",
  publisher: "Swapnosiri Builders Ltd.",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Swapnosiri Builders Ltd. | Premium Residential Developer",
    description: "Developing modern, sustainable, and prestigious living spaces in Purbachal and Jolshiri Abashon with high-end architecture and BNBC-compliant safety.",
    url: "https://swapnosiri.com",
    siteName: "Swapnosiri Builders Ltd.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swapnosiri Builders Ltd. | Premium Residential Developer",
    description: "Experience architectural excellence and high-security structural design in Dhaka's premier locations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${firaSans.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans text-white selection:bg-[#D4AF37] selection:text-white min-h-screen flex flex-col overflow-x-hidden">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
