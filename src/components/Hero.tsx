import { identidad } from "@/data/coepamm";

/*
 * Hero "Sobrio": blanco protocolar, serif institucional, filete dorado
 * como único acento. Sin ornamentos; la estructura se sostiene con
 * jerarquía tipográfica, aire y filetes finos.
 */
export default function Hero() {
  return (
    <section className="border-b border-navy-ink/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-48 pb-16 sm:px-6 sm:pt-[196px] sm:pb-20">
        {/* Aval institucional: la frase se resalta progresivamente en amarillo,
            como un capitán trazando la ruta sobre la carta náutica */}
        <div className="flex items-center gap-4">
          <span className="h-px w-5 bg-brass" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.26em] text-[#46566a]">
            <span className="cp-chart-trace">
              AVALADO POR {identidad.avales.join(" Y ").toUpperCase()} ·{" "}
              {identidad.cobertura.toUpperCase()}
            </span>
          </p>
        </div>

        <h1
          data-reveal=""
          className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.12] tracking-[-0.008em] text-navy-ink text-balance sm:text-6xl lg:text-[66px]"
        >
          Formación marítima para la gente de mar de Venezuela
        </h1>

        <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <p
            data-reveal=""
            data-reveal-delay="90"
            className="mb-1.5 max-w-xl text-[17px] leading-relaxed text-[#3a4a5c] text-pretty"
          >
            {identidad.nombreLegal}. Cursos OMI y SIAHO para patrones,
            motoristas y personal de plataforma costa afuera, impartidos por
            instructores certificados.
          </p>
          <div
            data-reveal=""
            data-reveal-delay="160"
            className="flex flex-col justify-end pb-1.5"
          >
            <a
              href="#cursos"
              className="flex items-center justify-between gap-3.5 bg-navy-deep px-6 py-4 text-[15px] font-bold text-white transition-colors hover:bg-navy-ink"
            >
              <span>Ver catálogo de cursos</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Franja de credenciales */}
        <div className="mt-18 grid border-t border-navy-ink/10 sm:grid-cols-3">
          <div
            data-reveal=""
            className="py-7 pr-9 sm:border-r sm:border-navy-ink/10"
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#6b7989]">
              TRADICIÓN DESDE
            </p>
            <p
              data-count-to="1958"
              data-count-from="1900"
              className="mt-2.5 font-display text-[34px] font-semibold text-navy-ink tabular-nums"
            >
              1958
            </p>
          </div>
          <div
            data-reveal=""
            data-reveal-delay="110"
            className="py-7 sm:border-r sm:border-navy-ink/10 sm:px-9"
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#6b7989]">
              SUPERVISIÓN
            </p>
            <p className="mt-2.5 font-display text-[34px] font-semibold text-navy-ink">
              INEA · OMI
            </p>
          </div>
          <div
            data-reveal=""
            data-reveal-delay="220"
            className="py-7 sm:pl-9"
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#6b7989]">
              ÁREAS DE FORMACIÓN
            </p>
            <p className="mt-2.5 font-display text-[34px] font-semibold text-navy-ink">
              OMI · SHA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
