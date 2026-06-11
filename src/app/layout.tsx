import type { Metadata } from "next";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Tipografía del upgrade visual: Source Serif 4 (titulares, tono institucional
// formal) + Source Sans 3 (cuerpo y etiquetas).
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
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
        sourceSans.variable,
        sourceSerif.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
