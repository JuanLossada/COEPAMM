"use client";

import { useState } from "react";
import {
  ArrowRightIcon,
  CheckCircledIcon,
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <section id="contacto" className="bg-mist px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-stretch gap-5.5 lg:grid-cols-[1.1fr_1fr]">
        {/* CTA de conversión */}
        <div
          data-reveal=""
          className="relative flex flex-col justify-between overflow-hidden rounded-[22px] p-9 text-white shadow-[0_30px_60px_-30px_rgba(14,39,71,0.6)] sm:p-10"
          style={{
            background: "linear-gradient(155deg, #14386b 0%, #0e2747 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute -top-32 -right-28 size-[380px] rounded-full will-change-transform animate-[cp-float-a_16s_ease-in-out_infinite]"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, rgba(26,80,150,0.8), rgba(26,80,150,0) 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sun">
              Contacto
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
              ¿Interesado en alguna certificación marítima?
            </h2>
            <p className="mt-3.5 max-w-md text-sm leading-relaxed text-sky/80">
              Nuestro equipo puede asesorarte sobre requisitos, documentación,
              tiempos de gestión y procesos de certificación.
            </p>

            {enviado ? (
              <div className="mt-7 max-w-md rounded-2xl border border-sun/40 bg-sun/10 px-5.5 py-4.5">
                <p className="flex items-center gap-2 text-sm font-extrabold text-sun">
                  <CheckCircledIcon className="size-4" /> Solicitud recibida
                </p>
                <p className="mt-1.5 text-[13.5px] text-sky/85">
                  Te contactaremos pronto en {enviado}.
                </p>
              </div>
            ) : (
              <form
                onSubmit={solicitarAsesoria}
                className="mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <Input
                  type="email"
                  required
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="Tu correo electrónico"
                  aria-label="Tu correo electrónico"
                  className="h-12 rounded-xl border-sky/30 bg-sky/10 text-white placeholder:text-sky/60 focus-visible:ring-sun"
                />
                <Button
                  type="submit"
                  className="h-12 shrink-0 rounded-xl bg-sun px-6 font-extrabold text-navy-ink shadow-[0_10px_26px_-10px_rgba(240,227,66,0.4)] transition-[transform,background-color] duration-250 hover:-translate-y-0.5 hover:bg-[#f6ea5a]"
                >
                  Solicitar asesoría
                </Button>
              </form>
            )}
          </div>

          <div className="relative mt-9 border-t border-sky/15 pt-5.5">
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-2.5 text-xs text-sky/80">
              {contacto.telefonos.slice(0, 2).map((t) => (
                <li key={t}>
                  <a
                    href={telHref(t)}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                  >
                    <MobileIcon className="size-3.5" aria-hidden="true" />
                    {t}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contacto.email}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
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
                  className="inline-flex items-center gap-1.5 font-bold text-sun transition-colors hover:text-white"
                >
                  <InstagramLogoIcon className="size-3.5" aria-hidden="true" />
                  {contacto.instagramUsuario}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ubicación: vista satelital integrada de la sede */}
        <div
          data-reveal=""
          data-reveal-delay="140"
          className="flex flex-col overflow-hidden rounded-[22px] border border-navy/10 bg-white shadow-[0_24px_50px_-28px_rgba(14,39,71,0.4)]"
        >
          <iframe
            src={contacto.mapsEmbed}
            title="Ubicación de COEPAMM en Google Maps"
            className="min-h-72 w-full flex-1 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={contacto.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 px-5.5 py-4 text-xs text-muted-foreground transition-colors hover:text-navy-deep"
          >
            <span>
              {contacto.direccion}, {contacto.ciudad}
            </span>
            <span className="inline-flex shrink-0 items-center gap-1 font-bold text-navy">
              Cómo llegar
              <ArrowRightIcon className="size-3.5" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
