"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll({
  children,
  lerp,
  wheelMx,
}: {
  children: React.ReactNode;
  lerp?: number;
  wheelMx?: number;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: lerp ? lerp : 0.3,
      wheelMultiplier: wheelMx ? wheelMx : 0.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // If needed: lenis.destroy()
    };
  }, []);

  return <>{children}</>;
}
