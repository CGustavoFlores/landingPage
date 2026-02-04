import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GFLOW Software - Gestión y Contabilidad para PyMEs",
  description: "Sistema de Gestión y Contabilidad probado en el mundo real. Más de 30 años de experiencia, estabilidad y soporte para su empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
