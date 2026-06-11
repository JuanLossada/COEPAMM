import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { identidad } from "@/data/coepamm";

export default function Hero() {
  return (
    <section className="bg-white pb-20 pt-36 sm:pb-24 sm:pt-44">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-4 gap-2 px-3.5 py-1.5">
            <span
              className="size-2 rounded-full bg-sun-dark"
              aria-hidden="true"
            />
            Avalado por {identidad.avales.join(" y ")} · {identidad.cobertura}
          </Badge>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-navy-ink sm:text-5xl">
            Formación marítima para la{" "}
            <span className="text-navy">gente de mar</span> de Venezuela
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {identidad.nombreLegal} · {identidad.lema}. Capacitación para
            patrones, motoristas y personal de plataforma costa afuera, con
            instructores certificados.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="h-11 px-8 text-base"
              nativeButton={false}
              render={<a href="#cursos" />}
            >
              Ver cursos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
