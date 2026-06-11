import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Tipografía propuesta (el logo no permite identificar la fuente oficial):
// Montserrat para titulares, Inter para cuerpo.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COEPAMM - Escuela de Patrones y Motoristas de Maracaibo",
  description:
    "Cooperativa Escuela de Patrones y Motoristas de Maracaibo, R.S. Formación y capacitación para el sector náutico: cursos OMI, SIAHO/SHA, patrones y motoristas. Avalado por INEA y MPPE. Maracaibo y toda Venezuela.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(
        "h-full antialiased font-sans",
        inter.variable,
        montserrat.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
