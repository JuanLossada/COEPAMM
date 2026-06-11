import { Button } from "@/components/ui/button";
import { identidad } from "@/data/coepamm";

/*
 * Hero "Océano": fondo abisal con orbes mesh animados, retícula de carta
 * náutica, rosa de los vientos y ola de transición. Todas las animaciones
 * usan solo transform/opacity (composición GPU, 60 fps).
 */
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #081427 0%, #0e2747 52%, #14386b 100%)",
      }}
    >
      {/* Capas decorativas */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -top-52 -right-28 size-[620px] rounded-full will-change-transform animate-[cp-float-a_16s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(circle at 38% 38%, rgba(26,80,150,0.85), rgba(26,80,150,0) 68%)",
          }}
        />
        <div
          className="absolute -bottom-36 -left-40 size-[540px] rounded-full will-change-transform animate-[cp-float-b_20s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(240,227,66,0.13), rgba(240,227,66,0) 68%)",
          }}
        />
        {/* Retícula de carta náutica */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(216,240,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(216,240,255,0.045) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
          }}
        />
        {/* Rosa de los vientos */}
        <svg
          className="absolute top-24 right-[6%] hidden opacity-[0.14] animate-[cp-spin_90s_linear_infinite] lg:block"
          width="340"
          height="340"
          viewBox="0 0 340 340"
          fill="none"
        >
          <circle cx="170" cy="170" r="168" stroke="#d8f0ff" strokeWidth="1" />
          <circle
            cx="170"
            cy="170"
            r="126"
            stroke="#d8f0ff"
            strokeWidth="0.7"
            strokeDasharray="3 7"
          />
          <circle cx="170" cy="170" r="64" stroke="#d8f0ff" strokeWidth="0.7" />
          <path d="M170 12 L178 162 L170 170 L162 162 Z" fill="#f0e342" opacity="0.8" />
          <path d="M170 328 L162 178 L170 170 L178 178 Z" fill="#d8f0ff" />
          <path d="M12 170 L162 162 L170 170 L162 178 Z" fill="#d8f0ff" />
          <path d="M328 170 L178 178 L170 170 L178 162 Z" fill="#d8f0ff" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-40 sm:px-6 sm:pt-44">
        {/* Aval institucional */}
        <div className="inline-flex items-center gap-3.5">
          <span className="h-0.5 w-9 bg-sun" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">
            Avalado por {identidad.avales.join(" y ")} · {identidad.cobertura}
          </span>
        </div>

        <h1 className="mt-7 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Formación marítima para la{" "}
          <em className="font-bold text-sun">gente de mar</em> de Venezuela
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sky/80 text-pretty">
          {identidad.nombreLegal} · {identidad.lema}. Capacitación para
          patrones, motoristas y personal de plataforma costa afuera, con
          instructores certificados.
        </p>

        <div className="mt-9 flex flex-wrap gap-3.5">
          <Button
            size="lg"
            className="h-13 rounded-xl bg-sun px-8 text-base font-extrabold text-navy-ink shadow-[0_10px_30px_-10px_rgba(240,227,66,0.45)] transition-[transform,box-shadow] duration-250 ease-out hover:-translate-y-0.5 hover:bg-sun hover:shadow-[0_18px_38px_-10px_rgba(240,227,66,0.55)]"
            nativeButton={false}
            render={<a href="#cursos" />}
          >
            Ver cursos →
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-13 rounded-xl border-sky/30 bg-sky/5 px-8 text-base font-bold text-white transition-[background-color,transform] duration-250 hover:-translate-y-0.5 hover:bg-sky/15 hover:text-white"
            nativeButton={false}
            render={<a href="#portal" />}
          >
            Portal Afiliados
          </Button>
        </div>

        {/* Franja de credenciales */}
        <div className="mt-16 flex flex-wrap border-t border-sky/15">
          <div className="py-6 pr-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky/55">
              Tradición desde
            </p>
            <p className="mt-1.5 font-display text-3xl font-extrabold">1958</p>
          </div>
          <div className="border-l border-sky/15 px-10 py-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky/55">
              Supervisión
            </p>
            <p className="mt-1.5 font-display text-3xl font-extrabold">
              INEA · OMI
            </p>
          </div>
          <div className="border-l border-sky/15 py-6 pl-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky/55">
              Áreas
            </p>
            <p className="mt-1.5 font-display text-3xl font-extrabold">
              OMI · SHA
            </p>
          </div>
        </div>
      </div>

      {/* Ola de transición */}
      <div className="relative mt-8 h-[130px] overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-[26px] left-0 h-[70px] w-[200%] opacity-35 will-change-transform animate-[cp-drift_22s_linear_infinite]">
          <svg width="100%" height="70" viewBox="0 0 2880 70" preserveAspectRatio="none">
            <path
              d="M0 35 Q 180 0 360 35 T 720 35 T 1080 35 T 1440 35 T 1800 35 T 2160 35 T 2520 35 T 2880 35 V 70 H 0 Z"
              fill="#d8f0ff"
              opacity="0.25"
            />
          </svg>
        </div>
        <div className="absolute -bottom-px left-0 w-[200%] will-change-transform animate-[cp-drift_34s_linear_infinite]">
          <svg width="100%" height="64" viewBox="0 0 2880 64" preserveAspectRatio="none">
            <path
              d="M0 32 Q 180 0 360 32 T 720 32 T 1080 32 T 1440 32 T 1800 32 T 2160 32 T 2520 32 T 2880 32 V 64 H 0 Z"
              fill="#f3f8fd"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
