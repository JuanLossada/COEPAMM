import { Button } from "@/components/ui/button";
import TiltCard from "@/components/TiltCard";
import { cursos } from "@/data/coepamm";

export default function Courses() {
  return (
    <section
      id="cursos"
      className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-26"
      style={{
        background: "linear-gradient(180deg, #0e2747 0%, #14386b 100%)",
      }}
    >
      {/* Retícula de carta náutica */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(216,240,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(216,240,255,0.04) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <div data-reveal="">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sun">
            Cursos
          </p>
          <h2 className="mt-3.5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-[44px]">
            Catálogo de formación
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-sky/75">
            Catálogo según la web oficial de COEPAMM. Forma personal titulado
            de cubierta y máquinas para buques de hasta 500 toneladas de
            registro bruto.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cursos.map((c, i) => (
            <div key={c.nombre} data-reveal="" data-reveal-delay={String(i * 90)}>
              <TiltCard className="h-full rounded-[18px] border border-sky/15 bg-sky/5 p-7 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-sun/45 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)]">
                <span
                  className={
                    c.etiqueta === "OMI"
                      ? "inline-block rounded-full bg-sun px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-navy-ink"
                      : "inline-block rounded-full bg-sky/95 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-navy-ink"
                  }
                >
                  {c.etiqueta}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold leading-snug text-white">
                  {c.nombre}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-sky/75">
                  {c.descripcion}
                </p>
              </TiltCard>
            </div>
          ))}
        </div>

        <div
          data-reveal=""
          data-reveal-delay="120"
          className="mt-11 flex flex-col items-start justify-between gap-5 rounded-[18px] border border-sky/15 bg-sky/10 px-7 py-6 sm:flex-row sm:items-center"
        >
          <p className="text-[15px] leading-relaxed text-sky/85">
            ¿No sabes qué curso necesitas para tu titulación? Te orientamos sin
            compromiso.
          </p>
          <Button
            className="shrink-0 rounded-xl bg-sun px-6 font-extrabold text-navy-ink shadow-[0_10px_26px_-10px_rgba(240,227,66,0.4)] transition-[transform,box-shadow] duration-250 hover:-translate-y-0.5 hover:bg-sun hover:shadow-[0_16px_32px_-10px_rgba(240,227,66,0.5)]"
            nativeButton={false}
            render={<a href="#contacto" />}
          >
            Solicitar información →
          </Button>
        </div>
      </div>
    </section>
  );
}
