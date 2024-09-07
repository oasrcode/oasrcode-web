import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import Header from "@/app/components/Header";
import Footer from "./components/Footer";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});
export const runtime = "edge";
export const metadata: Metadata = {
  metadataBase: new URL('https://aythamisantana.pages.dev'),
  title: "Aythami Santana - Desarrollador de software",
  description: "Portafolio de Aythami Santana, desarrollador de software Full Stack",
  keywords: ["portafolio", "desarrollador", "software", "desarrollador de software", "programador", "programdor de software", "Full Stack"],
  authors: [
    { name: "Aythami Santana", url: "https://aythamisantana.pages.dev" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/oasrjob/" },
  ],
  openGraph: {
    title: "Aythami Santana - Desarrollador de software",
    description: "Portafolio de Aythami Santana, desarrollador de software Full Stack",
    url: "https://aythamisantana.pages.dev",
    siteName: "aythamisantana.page.dev",
    images: [
      {
        url: "/siteimage.PNG",
        width: 1200,
        height: 630,
        alt: "Imagen del portafolio de Aythami Santana",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={roboto_mono.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
