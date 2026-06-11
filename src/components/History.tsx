import { historia } from "@/data/coepamm";

export default function History() {
  return (
    <section
      id="historia"
      className="border-y border-navy-ink/[0.08] bg-mist px-4 py-28 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div data-reveal="" className="max-w-xl">
          <p className="text-xs font-normal tracking-[0.26em] text-brass">
            NUESTRA HISTORIA
          </p>
          <h2 className="mt-4 font-display text-[32px] font-semibold leading-[1.22] text-navy-ink">
            Seis décadas de navegación
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#6b7989]">
            Más de seis décadas vinculadas a la navegación en el Lago de
            Maracaibo, según la reseña histórica de la institución.
          </p>
        </div>

        <ol className="mt-16 flex flex-col">
          {historia.map((h, i) => (
            <li
              key={h.anio}
              data-reveal=""
              data-reveal-delay={String(i * 80)}
              className="grid gap-4 border-t border-navy-ink/10 py-8.5 sm:grid-cols-[160px_1fr] sm:gap-12"
            >
              <p className="font-display text-[40px] font-semibold leading-none text-navy-deep tabular-nums">
                {h.anio}
              </p>
              <div>
                <h3 className="mt-1 font-display text-xl font-semibold text-navy-ink">
                  {h.titulo}
                </h3>
                <p className="mt-2.5 max-w-2xl text-[14.5px] leading-[1.75] text-muted-foreground text-pretty">
                  {h.texto}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
