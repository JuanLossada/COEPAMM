import {
  ReaderIcon,
  IdCardIcon,
  BarChartIcon,
  DownloadIcon,
  DashboardIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
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
    <section id="portal" className="bg-white px-4 py-24 sm:px-6 sm:py-26">
      <div className="mx-auto max-w-6xl">
        <div data-reveal="" className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-navy">
            Portal de afiliados
          </p>
          <h2 className="mt-3.5 font-display text-4xl font-extrabold tracking-tight text-navy-ink sm:text-[44px]">
            Tu academia, en línea las 24 horas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Una plataforma moderna que mejora la experiencia del alumno: toda
            tu relación con la academia, con mayor comodidad y autonomía,
            disponible las 24 horas.
          </p>
        </div>

        <div className="mt-12 grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          {portalBeneficios.map((b, i) => {
            const Icono = iconos[i];
            return (
              <div
                key={b.titulo}
                data-reveal=""
                data-reveal-delay={String(i * 80)}
                className="rounded-2xl border border-navy/[0.07] bg-mist p-6.5 transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_26px_46px_-26px_rgba(14,39,71,0.4)]"
              >
                <span className="flex size-10.5 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-navy-deep text-white">
                  <Icono className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-extrabold text-navy-deep">
                  {b.titulo}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {b.texto}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
