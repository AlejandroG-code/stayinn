import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StayInn — Plataforma de Alojamientos Exclusivos & Reservaciones",
  description: "Plataforma de alquiler de alojamientos exclusivos, reservaciones y escapadas únicas en todo el mundo.",
  keywords: ["alojamiento", "alquiler", "cabañas", "frente al mar", "mansiones", "glamping", "stayinn"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f1faee] text-[#1d3557] selection:bg-[#e63946] selection:text-white">
        {children}
      </body>
    </html>
  );
}
