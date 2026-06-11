import { cursos } from "@/data/coepamm";

export default function Courses() {
  return (
    <section id="cursos" className="bg-navy-ink px-4 py-22 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div
          data-reveal=""
          className="flex flex-wrap items-end justify-between gap-8"
        >
          <div className="max-w-xl">
            <p className="text-xs font-normal tracking-[0.26em] text-brass-light">
              CURSOS
            </p>
            <h2 className="mt-4 font-display text-[32px] font-semibold leading-[1.22] text-white">
              Catálogo de formación
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-sky/70">
              Forma personal titulado de cubierta y máquinas para buques de
              hasta 500 toneladas de registro bruto.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 border border-sky/35 px-6 py-3.5 text-sm font-semibold tracking-[0.04em] text-white transition-colors hover:border-sky/60 hover:bg-sky/[0.08]"
          >
            SOLICITAR INFORMACIÓN <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Cards clicables: se iluminan al pasar el cursor y revelan el CTA */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cursos.map((c, i) => (
            <a
              key={c.nombre}
              href="#contacto"
              data-reveal=""
              data-reveal-delay={String(i * 70)}
              className="group flex flex-col border border-sky/15 bg-white/[0.02] p-6.5 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-brass-light/60 hover:bg-sky/[0.07] hover:shadow-[0_22px_44px_-20px_rgba(0,0,0,0.6)] focus-visible:-translate-y-1 focus-visible:border-brass-light/60 focus-visible:bg-sky/[0.07]"
            >
              <p className="text-[10.5px] font-bold tracking-[0.2em] text-brass-light">
                {c.etiqueta}
              </p>
              <h3 className="mt-2.5 font-display text-lg font-semibold leading-snug text-white">
                {c.nombre}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.65] text-sky/[0.68]">
                {c.descripcion}
              </p>
              <span className="mt-auto flex items-center gap-2 pt-5 text-[11.5px] font-bold tracking-[0.12em] text-brass-light opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                VER MÁS DETALLES{" "}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
