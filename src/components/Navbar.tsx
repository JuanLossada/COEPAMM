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
        "fixed inset-x-0 top-0 z-50 border-b border-navy-ink/15 bg-white/95 backdrop-blur-sm transition-shadow duration-300",
        conScroll && "shadow-[0_10px_28px_-18px_rgba(8,20,39,0.25)]",
      )}
    >
      <nav className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="COEPAMM - inicio">
          <Brand />
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a
                href={e.href}
                className="border-b-[1.5px] border-transparent pb-0.5 text-[13.5px] font-semibold text-[#2b3b4e] transition-colors hover:border-navy-deep hover:text-navy-ink"
              >
                {e.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/portal"
              className="bg-navy-deep px-5 py-2.5 text-[13px] font-bold tracking-[0.06em] text-white transition-colors hover:bg-navy-ink"
            >
              PORTAL AFILIADOS
            </Link>
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
                  className="w-full rounded-none bg-navy-deep font-bold hover:bg-navy-ink"
                  nativeButton={false}
                  render={<Link href="/portal" />}
                >
                  PORTAL AFILIADOS
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
