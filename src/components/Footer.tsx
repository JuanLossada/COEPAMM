import { Separator } from "@/components/ui/separator";
import Brand from "./Brand";
import { identidad, contacto } from "@/data/coepamm";

export default function Footer() {
  return (
    <footer className="bg-abyss py-14 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Brand light />
            <p className="mt-4.5 text-xs leading-relaxed text-sky/60">
              {identidad.nombreLegal} · RIF {identidad.rif}
              <br />
              Avalado por {identidad.avales.join(" y ")}.
            </p>
            <p className="mt-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky/40">
              10.6345° N · 71.6262° O — Lago de Maracaibo
            </p>
          </div>
          <div className="text-sm">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sky/50">
              Enlaces
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="#quienes-somos"
                  className="text-sky/80 transition-colors hover:text-white"
                >
                  Quiénes somos
                </a>
              </li>
              <li>
                <a
                  href="#cursos"
                  className="text-sky/80 transition-colors hover:text-white"
                >
                  Cursos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-sky/80 transition-colors hover:text-white"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href={contacto.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky/80 transition-colors hover:text-white"
                >
                  Instagram {contacto.instagramUsuario}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="mt-10 bg-white/10" />
        <p className="mt-6 text-xs text-sky/45">
          © {new Date().getFullYear()} {identidad.siglas}. Sitio de
          demostración elaborado con información pública de la institución.
        </p>
      </div>
    </footer>
  );
}
