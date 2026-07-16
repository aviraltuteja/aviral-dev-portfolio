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
    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [lerp, wheelMx]);

  return <>{children}</>;
}
