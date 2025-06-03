import type { Metadata } from "next";
import { Manrope, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

// Optimize font loading
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  preload: true,
  weight: ["400", "500", "600", "700"], // Only load needed weights
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
  weight: ["400", "500", "600", "700"], // Only load needed weights
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  preload: true,
  weight: ["400", "500", "700"], // Only load needed weights
});

export const metadata: Metadata = {
  title: "Stillwater Web Development | Custom Web Solutions",
  description: "We create high-performance, hand-coded websites that convert visitors into customers. No templates, no page builders—just quality custom code.",
  // Add additional metadata for better SEO
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#10122E", // Use the primary dark color
  icons: {
    icon: '/images/favicon.svg',
    apple: '/images/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stillwaterweb.dev',
    title: 'Stillwater Web Development | Custom Web Solutions',
    description: 'Hand-coded custom websites that convert visitors into customers. No templates, no page builders.',
    siteName: 'Stillwater Web Development',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stillwater Web Development | Custom Web Solutions',
    description: 'Hand-coded custom websites that convert visitors into customers. No templates, no page builders.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col bg-royalbyte-900`}>
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
