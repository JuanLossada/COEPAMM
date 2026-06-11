import { cursos } from "@/data/coepamm";

export default function Courses() {
  return (
    <section id="cursos" className="bg-navy-ink px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div
          data-reveal=""
          className="flex flex-wrap items-end justify-between gap-8"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.26em] text-brass-light">
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

        <div className="mt-14 grid border-t border-sky/15 sm:grid-cols-2">
          {cursos.map((c, i) => (
            <div
              key={c.nombre}
              data-reveal=""
              data-reveal-delay={String(i * 70)}
              className={
                "border-b border-sky/15 py-7.5 transition-colors hover:bg-sky/[0.04] " +
                (i % 2 === 0 ? "sm:border-r sm:pr-10" : "sm:pl-10")
              }
            >
              <p
                className={
                  "text-[10.5px] font-bold tracking-[0.2em] " +
                  (c.etiqueta === "OMI" ? "text-brass-light" : "text-sky/55")
                }
              >
                {c.etiqueta}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">
                {c.nombre}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-[1.7] text-sky/[0.68]">
                {c.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
