import type { Metadata } from "next";
import "./globals.css";
import { Fraunces, Inter, Jost } from "next/font/google";
import SiteNav from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Aviral Tuteja",
  description: "Full Stack Developer",
  openGraph: {
    title: "Aviral Tuteja",
    description: "Full Stack Developer",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Aviral Tuteja",
    description: "Full Stack Developer",
  },
};

const jost = Jost({
  subsets: ["latin"],

  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Redesign type pairing (REDESIGN.md §4): serif for voice, sans for
// information. Exposed as variables so Jost stays the default on the
// pre-redesign pages and only `.theme-paper` subtrees pick these up.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${jost.className} ${fraunces.variable} ${inter.variable}`}>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
