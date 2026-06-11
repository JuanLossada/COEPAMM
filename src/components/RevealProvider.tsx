"use client";

import { useReveal } from "@/lib/use-reveal";

/** Monta los scroll-reveals de la página (no renderiza nada). */
export default function RevealProvider() {
  useReveal();
  return null;
}
