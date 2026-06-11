import { quienesSomos, mision, vision, presencia } from "@/data/coepamm";

const datos = [
  {
    cifra: "1958",
    countFrom: "1900",
    detalle: "Tradición formando gente de mar desde su escuela original",
  },
  {
    cifra: "2007",
    countFrom: "1950",
    detalle: "Constituida como cooperativa bajo supervisión del INEA",
  },
  {
    cifra: "OMI · SHA",
    countFrom: null,
    detalle: "Áreas marítimas y de Seguridad, Higiene y Ambiente",
  },
];

export default function About() {
  return (
    <section id="quienes-somos" className="bg-mist px-4 py-24 sm:px-6 sm:py-26">
      <div className="mx-auto max-w-6xl">
        <div data-reveal="">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-navy">
            Quiénes somos
          </p>
          <h2 className="mt-3.5 font-display text-4xl font-extrabold tracking-tight text-navy-ink sm:text-[44px]">
            La institución líder del sector náutico
          </h2>
        </div>

        <div className="mt-11 grid gap-12 lg:grid-cols-[3fr_2fr]">
          <div>
            <p
              data-reveal=""
              data-reveal-delay="80"
              className="text-[17px] leading-relaxed text-[#3a4a5c] text-pretty"
            >
              {quienesSomos}
            </p>
            <p
              data-reveal=""
              data-reveal-delay="140"
              className="mt-4 text-sm text-muted-foreground"
            >
              Con presencia en {presencia.join(", ")} y actividad en toda
              Venezuela, según su Instagram oficial.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {datos.map((d, i) => (
                <div
                  key={d.cifra}
                  data-reveal=""
                  data-reveal-delay={String(i * 110)}
                  className="rounded-2xl border border-navy/10 bg-white p-5.5 shadow-[0_14px_30px_-22px_rgba(14,39,71,0.3)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_42px_-22px_rgba(14,39,71,0.4)]"
                >
                  <p
                    className="font-display text-3xl font-extrabold text-navy tabular-nums"
                    {...(d.countFrom
                      ? { "data-count-to": d.cifra, "data-count-from": d.countFrom }
                      : {})}
                  >
                    {d.cifra}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {d.detalle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4.5">
            {/* Misión: panel naval oscuro con rosa de los vientos */}
            <div
              data-reveal=""
              data-reveal-delay="120"
              className="relative overflow-hidden rounded-[20px] p-8 text-white shadow-[0_26px_50px_-26px_rgba(14,39,71,0.55)]"
              style={{
                background: "linear-gradient(150deg, #14386b, #0e2747)",
              }}
            >
              <svg
                className="absolute -right-12 -bottom-12 opacity-10"
                width="220"
                height="220"
                viewBox="0 0 220 220"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="110" cy="110" r="108" stroke="#d8f0ff" strokeWidth="1.5" />
                <circle
                  cx="110"
                  cy="110"
                  r="70"
                  stroke="#d8f0ff"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                />
                <path d="M110 10 L118 102 L110 110 L102 102 Z" fill="#d8f0ff" />
              </svg>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sun">
                Misión
              </p>
              <p className="relative mt-3.5 text-sm leading-relaxed text-sky/90 text-pretty">
                {mision}
              </p>
            </div>

            {/* Visión: panel claro */}
            <div
              data-reveal=""
              data-reveal-delay="220"
              className="rounded-[20px] border border-navy/10 bg-white p-8 shadow-[0_18px_38px_-26px_rgba(14,39,71,0.35)]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-navy">
                Visión
              </p>
              <p className="mt-3.5 text-sm leading-relaxed text-[#3a4a5c] text-pretty">
                {vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
