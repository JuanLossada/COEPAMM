import { quienesSomos, mision, vision, presencia } from "@/data/coepamm";

export default function About() {
  return (
    <section id="quienes-somos" className="bg-white px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div data-reveal="">
            <p className="text-xs font-semibold tracking-[0.26em] text-brass">
              QUIÉNES SOMOS
            </p>
            <h2 className="mt-4 font-display text-[32px] font-semibold leading-[1.22] text-navy-ink text-balance">
              La institución líder del sector náutico
            </h2>
          </div>
          <div>
            <p
              data-reveal=""
              data-reveal-delay="80"
              className="text-[17px] leading-[1.8] text-[#3a4a5c] text-pretty"
            >
              {quienesSomos}
            </p>
            <p
              data-reveal=""
              data-reveal-delay="140"
              className="mt-4.5 text-sm leading-relaxed text-[#6b7989]"
            >
              Con presencia en {presencia.join(", ")} y actividad en toda
              Venezuela.
            </p>

            <div className="mt-12 grid border-t border-navy-ink/10 sm:grid-cols-2">
              <div
                data-reveal=""
                className="pt-7.5 sm:border-r sm:border-navy-ink/10 sm:pr-9"
              >
                <p className="text-[11px] font-semibold tracking-[0.26em] text-brass">
                  MISIÓN
                </p>
                <p className="mt-3.5 text-sm leading-[1.75] text-[#3a4a5c] text-pretty">
                  {mision}
                </p>
              </div>
              <div
                data-reveal=""
                data-reveal-delay="120"
                className="pt-7.5 sm:pl-9"
              >
                <p className="text-[11px] font-semibold tracking-[0.26em] text-brass">
                  VISIÓN
                </p>
                <p className="mt-3.5 text-sm leading-[1.75] text-[#3a4a5c] text-pretty">
                  {vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
