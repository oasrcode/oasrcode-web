"use client";

import { MotionButtonHeader, MotionSpanHeaderHover } from "./motion/Motions";
import { useState } from "react";

export default function Header() {
  const tabs = [
    { label: "Inicio", href: "#home" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#proyects" },
    { label: "Blog", href: "/blog" }, // Ajuste aquí para ser consistente con otros hrefs
  ];

  const [hovered, setHovered] = useState("Inicio");

  return (
    <header className="sticky z-50 flex items-center top-0 w-full h-24 bg-slate-950">
      <div className="flex flex-row items-center justify-between mx-auto w-full lg:w-3/5 backdrop:blur-lg text-white">
        <p className="text-white text-3xl">
          OASRCode<span className="text-4xl text-blue-500">.</span>
        </p>
        <ul className="flex flex-row items-center gap-20 mr-10">
          {tabs.map((tab, index) => (
            <MotionButtonHeader onHoverStart={() => setHovered(tab.label)} href={tab.href} key={index} className="group relative cursor-pointer hover:text-yellow-500 duration-200 px-4 py-3">
              {tab.label}

              {hovered === tab.label && <MotionSpanHeaderHover layoutId="nav-item" className="absolute bg-yellow-500 bg-opacity-30 inset-0 rounded-md p-2"></MotionSpanHeaderHover>}
            </MotionButtonHeader>
          ))}
        </ul>
      </div>
    </header>
  );
}
