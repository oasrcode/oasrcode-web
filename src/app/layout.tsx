import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import Header from "@/app/components/Header";
import Footer from "./components/Footer";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
