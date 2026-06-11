import Image from "next/image";
import { identidad } from "@/data/coepamm";

/*
 * Logo oficial de COEPAMM (foto de perfil de Instagram @coepamm, 320x320).
 * Sustituir public/coepamm-logo.jpg por el archivo en alta resolución
 * cuando el cliente lo facilite.
 */
export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`flex items-center gap-2.5 ${light ? "text-white" : "text-navy"}`}
    >
      <Image
        src="/coepamm-logo.jpg"
        alt="Logo de COEPAMM"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-full bg-white object-cover ring-1 ring-navy/10"
      />
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold tracking-wide">
          {identidad.siglas}
        </span>
        <span
          className={`block text-[0.65rem] font-medium tracking-wide ${
            light ? "text-sky" : "text-foreground/60"
          }`}
        >
          Escuela de Patrones y Motoristas
        </span>
      </span>
    </span>
  );
}
