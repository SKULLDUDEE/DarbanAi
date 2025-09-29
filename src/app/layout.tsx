// app/layout.tsx

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

// Load Urbanist font with CSS variable for use in Tailwind
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darban.AI – The Best AI Concierge for E-Commerce",
  description:
    "Bridge the gap between offline and online shopping with Darban's AI-driven customer experience platform. Revolutionize your e-commerce engagement with intelligent product recommendations and 24/7 customer support.",
  metadataBase: new URL("https://darban.ai"), // update to your real domain
  openGraph: {
    title: "Darban.AI – The Best AI Concierge for E-Commerce",
    description:
      "Bridge the gap between offline and online shopping with Darban's AI-driven customer experience platform.",
    url: "https://darban.ai",
    siteName: "Darban.AI",
    images: [
      {
        url: "/og-image.png", // make sure this image exists
        width: 1200,
        height: 630,
        alt: "Darban.AI – AI Concierge",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darban.AI – The Best AI Concierge for E-Commerce",
    description:
      "Bridge the gap between offline and online shopping with Darban's AI-driven customer experience platform.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${urbanist.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
