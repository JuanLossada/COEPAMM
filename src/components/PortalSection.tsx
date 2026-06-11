import {
  ReaderIcon,
  IdCardIcon,
  BarChartIcon,
  DownloadIcon,
  DashboardIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";
import { portalBeneficios } from "@/data/coepamm";

const iconos = [
  ReaderIcon, // Cursos y material formativo
  IdCardIcon, // Certificaciones y credenciales
  BarChartIcon, // Seguimiento del progreso
  DownloadIcon, // Descarga de documentación
  DashboardIcon, // Información centralizada
  MobileIcon, // Desde cualquier dispositivo
];

export default function PortalSection() {
  return (
    <section id="portal" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-sun-dark">
            Herramienta para alumnos y afiliados
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy-ink">
            Portal web para afiliados
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Una plataforma moderna que mejora la experiencia del alumno: toda
            tu relación con la academia, con mayor comodidad y autonomía,
            disponible las 24 horas.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portalBeneficios.map((b, i) => {
            const Icono = iconos[i];
            return (
              <Card key={b.titulo} className="gap-0 bg-sky-soft/60 py-5">
                <CardContent className="px-5">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-navy text-white">
                    <Icono className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-display text-sm font-bold text-navy">
                    {b.titulo}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {b.texto}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
