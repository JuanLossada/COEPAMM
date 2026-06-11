"use client";

import { useState } from "react";
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
    <section
      id="contacto"
      className="border-t border-navy-ink/[0.08] bg-mist px-4 py-14 sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* Panel de asesoría */}
        <div
          data-reveal=""
          className="flex flex-col justify-between border border-navy-ink/10 bg-white p-9 sm:p-14"
        >
          <div>
            <p className="text-xs font-normal tracking-[0.26em] text-brass">
              CONTACTO
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.25] text-navy-ink text-balance">
              ¿Interesado en alguna certificación marítima?
            </h2>
            <p className="mt-3.5 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
              Nuestro equipo puede asesorarte sobre requisitos, documentación,
              tiempos de gestión y procesos de certificación.
            </p>

            {enviado ? (
              <div className="mt-7 max-w-md border border-brass bg-[#fdfbef] px-5.5 py-4.5">
                <p className="text-sm font-bold text-navy-ink">
                  Solicitud recibida
                </p>
                <p className="mt-1.5 text-[13.5px] text-muted-foreground">
                  Te contactaremos pronto en {enviado}.
                </p>
              </div>
            ) : (
              <form
                onSubmit={solicitarAsesoria}
                className="mt-7 flex max-w-md flex-col sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="Tu correo electrónico"
                  aria-label="Tu correo electrónico"
                  className="min-w-0 flex-1 border border-navy-ink/25 bg-white px-4.5 py-3.5 text-[14.5px] text-navy-ink outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-navy-deep sm:border-r-0"
                />
                <button
                  type="submit"
                  className="cursor-pointer border border-navy-deep bg-navy-deep px-6 py-3.5 text-sm font-bold tracking-[0.04em] text-white transition-colors hover:bg-navy-ink"
                >
                  SOLICITAR
                </button>
              </form>
            )}
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2.5 border-t border-navy-ink/10 pt-6 text-[13px]">
            {contacto.telefonos.slice(0, 2).map((t) => (
              <li key={t}>
                <a
                  href={telHref(t)}
                  className="text-muted-foreground transition-colors hover:text-navy-ink"
                >
                  {t}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${contacto.email}`}
                className="text-muted-foreground transition-colors hover:text-navy-ink"
              >
                {contacto.email}
              </a>
            </li>
            <li>
              <a
                href={contacto.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-navy-deep transition-colors hover:text-navy-ink"
              >
                {contacto.instagramUsuario}
              </a>
            </li>
          </ul>
        </div>

        {/* Ubicación */}
        <div
          data-reveal=""
          data-reveal-delay="120"
          className="flex flex-col border border-navy-ink/10 bg-white"
        >
          <iframe
            src={contacto.mapsEmbed}
            title="Ubicación de COEPAMM en Google Maps"
            className="min-h-80 w-full flex-1 border-0 grayscale-[0.35]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href={contacto.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 border-t border-navy-ink/10 px-6 py-4.5 text-xs text-muted-foreground transition-colors hover:text-navy-ink"
          >
            <span>
              {contacto.direccion}, {contacto.ciudad}
            </span>
            <span className="shrink-0 font-bold text-navy-deep">
              Cómo llegar →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
