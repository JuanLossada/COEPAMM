"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Brand from "@/components/Brand";

/*
 * Login de DEMOSTRACIÓN: no hay backend ni autenticación real.
 * Cualquier credencial no vacía abre el panel de ejemplo.
 */
export default function PortalLogin() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  function entrar(e: React.FormEvent) {
    e.preventDefault();
    if (!usuario.trim() || !clave.trim()) return;
    sessionStorage.setItem("coepamm-demo-sesion", usuario.trim());
    router.push("/portal/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-sky-soft px-4 py-10">
      <Link href="/" className="mb-8" aria-label="Volver al inicio">
        <Brand />
      </Link>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="font-display text-xl text-navy-ink">
            Portal de afiliados
          </CardTitle>
          <CardDescription>
            Accede a tus cursos, certificaciones y documentación.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={entrar} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="usuario">Usuario o correo</Label>
              <Input
                id="usuario"
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
                autoComplete="username"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="clave">Contraseña</Label>
              <Input
                id="clave"
                type="password"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <Button type="submit" className="w-full">
              Iniciar sesión
            </Button>
          </form>

          <Alert className="mt-5">
            <InfoCircledIcon className="size-4" />
            <AlertTitle>Demostración</AlertTitle>
            <AlertDescription>
              Sin datos reales. Escribe cualquier usuario y contraseña para
              ver el panel de ejemplo.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Button
        variant="link"
        className="mt-4 text-navy"
        nativeButton={false}
        render={<Link href="/" />}
      >
        <ArrowLeftIcon className="size-3.5" aria-hidden="true" />
        Volver a la página principal
      </Button>
    </main>
  );
}
