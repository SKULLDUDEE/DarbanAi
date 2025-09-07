import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Darban.AI - The Best AI Concierge for E-Commerce",
  description: "Bridge the gap between offline and online shopping with Darban's AI-driven customer experience platform. Revolutionize your e-commerce engagement with intelligent product recommendations and 24/7 customer support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${urbanist.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}