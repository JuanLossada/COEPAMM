"use client";

import { useCallback, useRef } from "react";

/**
 * Tilt 3D ligero: perspective + rotateX/rotateY en pointermove.
 * Muta el estilo directamente (sin re-renders de React) → 60 fps.
 */
export function useTilt(maxX = 5, maxY = 7) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = "transform 0.12s ease-out";
      el.style.transform =
        `perspective(900px) rotateX(${(-y * maxX).toFixed(2)}deg) ` +
        `rotateY(${(x * maxY).toFixed(2)}deg) translateY(-4px)`;
    },
    [maxX, maxY],
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
