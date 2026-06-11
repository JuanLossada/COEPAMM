"use client";

import { useEffect, useState } from "react";
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
import { cn } from "@/lib/utils";

const enlaces = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#historia", label: "Historia" },
  { href: "#cursos", label: "Cursos" },
  { href: "#portal", label: "Portal" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [conScroll, setConScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setConScroll(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-navy-ink/10 backdrop-blur-xl transition-[background-color,box-shadow] duration-300",
        conScroll
          ? "bg-white/90 shadow-[0_12px_32px_-16px_rgba(8,20,39,0.22)]"
          : "bg-white/70",
      )}
    >
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
                className="rounded-full font-semibold"
                nativeButton={false}
                render={<a href={e.href} />}
              >
                {e.label}
              </Button>
            </li>
          ))}
          <li className="ml-2">
            <Button
              className="rounded-full bg-gradient-to-br from-navy to-navy-deep font-bold shadow-[0_6px_16px_-8px_rgba(20,56,107,0.55)] transition-[transform,box-shadow] duration-250 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-10px_rgba(20,56,107,0.65)]"
              nativeButton={false}
              render={<Link href="/portal" />}
            >
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
