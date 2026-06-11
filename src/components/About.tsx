import { Card, CardContent } from "@/components/ui/card";
import { quienesSomos, mision, vision, presencia } from "@/data/coepamm";

const datos = [
  { cifra: "1958", detalle: "Tradición formando gente de mar desde su escuela original" },
  { cifra: "2007", detalle: "Constituida como cooperativa bajo supervisión del INEA" },
  { cifra: "OMI · SHA", detalle: "Áreas marítimas y de Seguridad, Higiene y Ambiente" },
];

export default function About() {
  return (
    <section id="quienes-somos" className="border-t bg-sky-soft py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-navy-ink">
          Quiénes somos
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div>
            <p className="text-base leading-relaxed text-foreground/80">
              {quienesSomos}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Con presencia en {presencia.join(", ")} y actividad en toda
              Venezuela, según su Instagram oficial.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {datos.map((d) => (
                <Card key={d.cifra} className="gap-0 py-5">
                  <CardContent className="px-5">
                    <p className="font-display text-2xl font-extrabold text-navy">
                      {d.cifra}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {d.detalle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Card className="gap-0 border-l-4 border-l-navy py-6">
              <CardContent className="px-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy">
                  Misión
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {mision}
                </p>
              </CardContent>
            </Card>
            <Card className="gap-0 border-l-4 border-l-sun-dark py-6">
              <CardContent className="px-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy">
                  Visión
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
