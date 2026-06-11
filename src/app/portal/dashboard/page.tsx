"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ExitIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Brand from "@/components/Brand";
import { demoAlumno, contacto } from "@/data/coepamm";

const suscribirSesion = (notificar: () => void) => {
  window.addEventListener("storage", notificar);
  return () => window.removeEventListener("storage", notificar);
};

/*
 * Panel de DEMOSTRACIÓN del alumno afiliado. Todos los datos provienen
 * de demoAlumno (src/data/coepamm.ts) y están marcados como ejemplo.
 */
export default function PortalDashboard() {
  const router = useRouter();
  const usuario = useSyncExternalStore(
    suscribirSesion,
    () => sessionStorage.getItem("coepamm-demo-sesion"),
    () => null,
  );

  useEffect(() => {
    if (!usuario) {
      router.replace("/portal");
    }
  }, [usuario, router]);

  function salir() {
    sessionStorage.removeItem("coepamm-demo-sesion");
    router.replace("/portal");
  }

  if (!usuario) return null;

  return (
    <div className="min-h-screen bg-sky-soft">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label="COEPAMM - inicio">
            <Brand />
          </Link>
          <Button variant="outline" size="sm" onClick={salir}>
            <ExitIcon className="size-3.5" aria-hidden="true" />
            Cerrar sesión
          </Button>
        </div>
      </header>

      <div className="bg-sun/30 py-2 text-center text-xs font-medium text-navy-deep">
        Vista de demostración - los datos mostrados no son reales.
      </div>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="font-display text-2xl font-bold text-navy-ink">
          Hola, {usuario}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {demoAlumno.nombre} · Panel del afiliado
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-navy">
              Mis cursos
            </h2>
            <div className="mt-3 space-y-3">
              {demoAlumno.cursos.map((c) => (
                <Card key={c.nombre} className="gap-0 py-5">
                  <CardContent className="px-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-sm font-bold text-navy-ink">
                        {c.nombre}
                      </h3>
                      <Badge
                        className={
                          c.estado === "Completado"
                            ? "bg-navy text-white"
                            : "bg-sun text-navy-ink"
                        }
                      >
                        {c.estado}
                      </Badge>
                    </div>
                    <Progress value={c.progreso} className="mt-3" />
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      Avance: {c.progreso}%
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="space-y-6">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-navy">
                Certificados
              </h2>
              <div className="mt-3 space-y-3">
                {demoAlumno.certificados.map((cert) => (
                  <Card key={cert.nombre} className="gap-0 py-5">
                    <CardContent className="px-5">
                      <h3 className="font-display text-sm font-bold text-navy-ink">
                        {cert.nombre}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Estado: {cert.estado}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Card className="gap-0 border-navy bg-navy py-5 text-white">
              <CardHeader className="px-5">
                <CardTitle className="font-display text-sm">
                  ¿Dudas o pagos pendientes?
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5">
                <p className="text-xs leading-relaxed text-sky/85">
                  Comunícate con la academia por sus canales oficiales mientras
                  el portal está en desarrollo.
                </p>
                <Button
                  size="sm"
                  className="mt-4 bg-sun font-bold text-navy-ink hover:bg-sun-dark"
                  nativeButton={false}
                  render={
                    <a
                      href={contacto.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <InstagramLogoIcon className="size-3.5" aria-hidden="true" />
                  Instagram {contacto.instagramUsuario}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
