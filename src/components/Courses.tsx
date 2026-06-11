import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cursos } from "@/data/coepamm";

export default function Courses() {
  return (
    <section id="cursos" className="bg-navy-deep py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white">Cursos</h2>
        <p className="mt-3 max-w-2xl text-sm text-sky">
          Catálogo según la web oficial de COEPAMM. Forma personal titulado de
          cubierta y máquinas para buques de hasta 500 toneladas de registro
          bruto.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cursos.map((c) => (
            <Card
              key={c.nombre}
              className="gap-0 border-white/10 bg-white/5 py-6 transition-colors hover:bg-white/10"
            >
              <CardContent className="px-6">
                <Badge className="bg-sun text-navy-ink hover:bg-sun">
                  {c.etiqueta}
                </Badge>
                <h3 className="mt-3 font-display text-base font-bold text-white">
                  {c.nombre}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sky/80">
                  {c.descripcion}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-10 gap-0 border-white/10 bg-white/5 py-5">
          <CardContent className="flex flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center">
            <p className="text-sm text-sky/85">
              ¿No sabes qué curso necesitas para tu titulación? Te orientamos
              sin compromiso.
            </p>
            <Button
              className="shrink-0 bg-sun font-bold text-navy-ink hover:bg-sun-dark"
              nativeButton={false}
              render={<a href="#contacto" />}
            >
              Solicitar información
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
