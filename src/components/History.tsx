import { historia } from "@/data/coepamm";

export default function History() {
  return (
    <section id="historia" className="bg-white px-4 py-24 sm:px-6 sm:py-26">
      <div className="mx-auto max-w-6xl">
        <div data-reveal="">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-navy">
            Nuestra historia
          </p>
          <h2 className="mt-3.5 font-display text-4xl font-extrabold tracking-tight text-navy-ink sm:text-[44px]">
            Seis décadas de navegación
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Más de seis décadas vinculadas a la navegación en el Lago de
            Maracaibo, según la reseña histórica de la institución.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Línea que se dibuja al entrar en viewport */}
          <div
            data-reveal=""
            data-line=""
            className="absolute top-[26px] left-[26px] hidden h-0.5 will-change-transform md:right-[8%] md:block"
            style={{ background: "linear-gradient(90deg, #1a5096, #d8f0ff)" }}
            aria-hidden="true"
          />
          <ol className="relative grid gap-10 md:grid-cols-3">
            {historia.map((h, i) => (
              <li
                key={h.anio}
                data-reveal=""
                data-reveal-delay={String(100 + i * 160)}
              >
                <span
                  className={
                    i === historia.length - 1
                      ? "flex size-13 items-center justify-center rounded-full bg-navy-ink font-display text-sm font-extrabold text-sun shadow-[0_0_0_6px_#ffffff,0_10px_22px_-8px_rgba(14,39,71,0.55)]"
                      : "flex size-13 items-center justify-center rounded-full bg-navy font-display text-sm font-extrabold text-white shadow-[0_0_0_6px_#ffffff,0_10px_22px_-8px_rgba(26,80,150,0.55)]"
                  }
                >
                  {h.anio}
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold text-navy-deep">
                  {h.titulo}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {h.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
