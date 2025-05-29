import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";
import Navbar from "@/components/navbar";

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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${jost.className}`}>
        {" "}
        <nav>
          <Navbar />
        </nav>{" "}
        {children}
      </body>
    </html>
  );
}
