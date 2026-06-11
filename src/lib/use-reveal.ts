"use client";

import { useEffect } from "react";

function runCounter(el: HTMLElement) {
  if (el.dataset.counted) return;
  el.dataset.counted = "1";
  const to = parseInt(el.dataset.countTo ?? "0", 10);
  const from = parseInt(el.dataset.countFrom ?? "0", 10);
  const dur = 1100;
  const t0 = performance.now();
  const tick = (t: number) => {
    const p = Math.min(1, (t - t0) / dur);
    const e = 1 - Math.pow(1 - p, 3); // easeOutCubic
    el.textContent = String(Math.round(from + (to - from) * e));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function startCounters(el: HTMLElement) {
  if (el.dataset.countTo) runCounter(el);
  el.querySelectorAll<HTMLElement>("[data-count-to]").forEach(runCounter);
}

/**
 * Activa los elementos marcados con [data-reveal] (+ opcional
 * [data-reveal-delay], [data-count-to] / [data-count-from]).
 *
 * - Un único IntersectionObserver para toda la página (pasivo, barato).
 * - Los elementos visibles "above the fold" nunca se ocultan.
 * - Respeta prefers-reduced-motion.
 *
 * Uso: montar <RevealProvider /> una vez en la página.
 */
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting) continue;
          const el = en.target as HTMLElement;
          io.unobserve(el);
          el.style.transitionDelay = (el.dataset.revealDelay ?? "0") + "ms";
          el.classList.add("is-revealed");
          startCounters(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      // Ya visible o reduced-motion → no ocultar nunca, solo contadores.
      if (reduce || el.getBoundingClientRect().top < innerHeight * 0.85) {
        startCounters(el);
        return;
      }
      el.classList.add("cp-reveal");
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}
