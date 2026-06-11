import { portalBeneficios } from "@/data/coepamm";

export default function PortalSection() {
  return (
    <section id="portal" className="bg-white px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div data-reveal="">
            <p className="text-xs font-semibold tracking-[0.26em] text-brass">
              PORTAL DE AFILIADOS
            </p>
            <h2 className="mt-4 font-display text-[32px] font-semibold leading-[1.22] text-navy-ink text-balance">
              Tu academia, en línea las 24 horas
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-[#6b7989] text-pretty">
              Toda tu relación con la academia, con mayor comodidad y
              autonomía, disponible las 24 horas.
            </p>
          </div>
          <div className="grid self-start border-t border-navy-ink/10 sm:grid-cols-2">
            {portalBeneficios.map((b, i) => (
              <div
                key={b.titulo}
                data-reveal=""
                data-reveal-delay={String(i * 70)}
                className={
                  "py-6.5 " +
                  (i % 2 === 0
                    ? "sm:border-r sm:border-navy-ink/10 sm:pr-8"
                    : "sm:pl-8") +
                  (i < portalBeneficios.length - 2
                    ? " border-b border-navy-ink/10"
                    : "")
                }
              >
                <h3 className="text-[15px] font-bold text-navy-deep">
                  {b.titulo}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#6b7989]">
                  {b.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
