"use client";

import { useState } from "react";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Brand from "./Brand";

const enlaces = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#historia", label: "Historia" },
  { href: "#cursos", label: "Cursos" },
  { href: "#portal", label: "Portal" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="COEPAMM - inicio">
          <Brand />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Button
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={<a href={e.href} />}
              >
                {e.label}
              </Button>
            </li>
          ))}
          <li className="ml-2">
            <Button nativeButton={false} render={<Link href="/portal" />}>
              Portal Afiliados
            </Button>
          </li>
        </ul>

        <Sheet open={abierto} onOpenChange={setAbierto}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Abrir menú"
              />
            }
          >
            <HamburgerMenuIcon className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>
                <Brand />
              </SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-1 px-4">
              {enlaces.map((e) => (
                <li key={e.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    nativeButton={false}
                    render={
                      <a href={e.href} onClick={() => setAbierto(false)} />
                    }
                  >
                    {e.label}
                  </Button>
                </li>
              ))}
              <li className="pt-3">
                <Button
                  className="w-full"
                  nativeButton={false}
                  render={<Link href="/portal" />}
                >
                  Portal Afiliados
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
