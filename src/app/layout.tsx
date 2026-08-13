import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StayInn — Plataforma de Alojamientos Exclusivos & Reservaciones (MVP)",
  description: "Plataforma de alquiler de alojamientos y reservaciones con arquitectura limpia, patrones de diseño (Factory Pattern) y diseño UI/UX premium.",
  keywords: ["alojamiento", "alquiler", "cabañas", "frente al mar", "mansiones", "glamping", "stayinn", "factory pattern"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
