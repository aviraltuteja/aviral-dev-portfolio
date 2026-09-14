"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Masthead from "@/components/redesign/masthead";

/**
 * Routes the chrome: redesigned pages get the paper masthead, and every
 * pre-redesign page — including the preserved `/v1` editions — keeps the
 * original navbar it was built against.
 */
const redesigned = new Set(["/", "/about", "/journey", "/contact"]);

export default function SiteNav(): React.ReactElement {
  const pathname = usePathname();

  if (redesigned.has(pathname)) {
    return <Masthead />;
  }

  return (
    <nav>
      <Navbar />
    </nav>
  );
}
