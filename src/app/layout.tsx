import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const siteUrl = "https://vsworks.vercel.app";
const siteTitle = "VSW Research & Development | Digital Product Studio";
const siteDescription =
  "VSW Research & Development explores web technologies and builds thoughtful websites, web applications, and mobile products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | VSW R&D",
  },
  description: siteDescription,
  applicationName: "VSW Research & Development",
  keywords: [
    "VSW Research & Development",
    "web development",
    "web applications",
    "mobile apps",
    "digital products",
    "product research",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "VSW Research & Development",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: "/imgs/icon.png",
    apple: "/imgs/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only fixed left-4 top-4 z-100 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black focus:not-sr-only focus:outline-2 focus:outline-offset-4 focus:outline-white"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
