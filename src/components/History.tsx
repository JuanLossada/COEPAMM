import { historia } from "@/data/coepamm";

export default function History() {
  return (
    <section id="historia" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-navy-ink">
          Nuestra historia
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-foreground/60">
          Más de seis décadas vinculadas a la navegación en el Lago de
          Maracaibo, según la reseña histórica de la institución.
        </p>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {historia.map((h, i) => (
            <li key={h.anio} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-white">
                  {h.anio}
                </span>
                {i < historia.length - 1 && (
                  <span
                    className="hidden h-0.5 flex-1 bg-sky md:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-navy">
                {h.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {h.texto}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
