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
  title: "Aythami Santana",
  description: "Desarrollador de sofware",
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
        <Footer/>
      </body>
    </html>
  );
}
