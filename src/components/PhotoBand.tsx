import Image from "next/image";

/*
 * Banda fotográfica full-bleed entre el hero y "Quiénes somos".
 * Imagen optimizada (2400px, ~700 KB) con carga diferida vía next/image.
 * object-position 68% prioriza el casco del velero sobre el tope de la vela.
 */
export default function PhotoBand() {
  return (
    <section className="relative overflow-hidden bg-navy-ink">
      <div className="relative h-[340px] w-full sm:h-[clamp(440px,60vh,640px)]">
        <Image
          src="/velero.jpg"
          alt="Velero navegando a vela con tripulación a bordo"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 68%" }}
        />
      </div>
      {/* Degradado para legibilidad del caption */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,20,39,0.18) 0%, rgba(8,20,39,0) 30%, rgba(8,20,39,0) 55%, rgba(8,20,39,0.62) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-4 pb-8 sm:px-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-11 bg-brass-light" aria-hidden="true" />
            <p className="text-xs font-semibold tracking-[0.26em] text-white/90 [text-shadow:0_1px_8px_rgba(8,20,39,0.5)]">
              LA CARRERA DEL MAR COMIENZA EN EL AULA
            </p>
          </div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-white/65 [text-shadow:0_1px_8px_rgba(8,20,39,0.5)]">
            LAGO DE MARACAIBO · 10.6345° N, 71.6262° O
          </p>
        </div>
      </div>
    </section>
  );
}
