"use client";

import { useState } from "react";
import {
  ArrowRightIcon,
  CheckCircledIcon,
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { contacto } from "@/data/coepamm";

function telHref(t: string) {
  return `tel:+58${t.replace(/[^0-9]/g, "").slice(1)}`;
}

export default function Contact() {
  const [correo, setCorreo] = useState("");
  const [enviado, setEnviado] = useState<string | null>(null);

  // SIMULACIÓN: aún no hay backend. En la implementación real, este envío
  // se conectará a un servicio de correo o CRM de la academia.
  function solicitarAsesoria(e: React.FormEvent) {
    e.preventDefault();
    setEnviado(correo);
    setCorreo("");
  }

  return (
    <section id="contacto" className="border-t bg-sky-soft py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* CTA de conversión: invitación a iniciar la conversación comercial */}
          <Card className="justify-between gap-0 border-navy bg-navy p-7 text-white sm:p-9">
            <div>
              <h2 className="font-display text-2xl font-bold leading-snug sm:text-3xl">
                ¿Interesado en alguna certificación marítima?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-sky/85">
                Nuestro equipo puede asesorarte sobre requisitos,
                documentación, tiempos de gestión y procesos de certificación.
              </p>

              {enviado ? (
                <Alert className="mt-6 max-w-md border-sun/40 bg-white text-navy-ink">
                  <CheckCircledIcon className="size-4" />
                  <AlertTitle>Solicitud recibida</AlertTitle>
                  <AlertDescription>
                    Te contactaremos pronto en {enviado}.
                  </AlertDescription>
                </Alert>
              ) : (
                <form
                  onSubmit={solicitarAsesoria}
                  className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <Input
                    type="email"
                    required
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="Tu correo electrónico"
                    aria-label="Tu correo electrónico"
                    className="border-white/30 bg-white/10 text-white placeholder:text-sky/60 focus-visible:ring-sun"
                  />
                  <Button
                    type="submit"
                    className="shrink-0 bg-sun font-bold text-navy-ink hover:bg-sun-dark"
                  >
                    Solicitar asesoría
                  </Button>
                </form>
              )}
            </div>

            <div className="mt-8">
              <Separator className="bg-white/15" />
              <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-sky/80">
                {contacto.telefonos.slice(0, 2).map((t) => (
                  <li key={t}>
                    <a
                      href={telHref(t)}
                      className="inline-flex items-center gap-1.5 hover:text-white"
                    >
                      <MobileIcon className="size-3.5" aria-hidden="true" />
                      {t}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${contacto.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-white"
                  >
                    <EnvelopeClosedIcon className="size-3.5" aria-hidden="true" />
                    {contacto.email}
                  </a>
                </li>
                <li>
                  <a
                    href={contacto.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-sun hover:text-white"
                  >
                    <InstagramLogoIcon className="size-3.5" aria-hidden="true" />
                    {contacto.instagramUsuario}
                  </a>
                </li>
              </ul>
            </div>
          </Card>

          {/* Ubicación: vista satelital integrada de la sede */}
          <Card className="gap-0 overflow-hidden py-0">
            <iframe
              src={contacto.mapsEmbed}
              title="Ubicación de COEPAMM en Google Maps"
              className="h-64 w-full sm:h-72 lg:h-[calc(100%-3.75rem)]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={contacto.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-15 items-center justify-between gap-3 px-5 py-3 text-xs text-muted-foreground transition-colors hover:text-navy"
            >
              <span>
                {contacto.direccion}, {contacto.ciudad}
              </span>
              <span className="inline-flex shrink-0 items-center gap-1 font-semibold text-navy">
                Cómo llegar
                <ArrowRightIcon className="size-3.5" aria-hidden="true" />
              </span>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
