"use client";

import { MotionButtonHeader, MotionSpanHeaderHover } from "./motion/Motions";
import { useState } from "react";

export default function Header() {
  const openTag = "<";
  const closeTag = "/>";

  const tabs = [
    { label: "Inicio", href: "#home" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Blog", href: "/blog" },
  ];

  const [hovered, setHovered] = useState("Inicio");

  return (
    <header className="sticky z-50 flex items-center top-0 w-full h-24 bg-slate-950">
      <div className="flex flex-row items-center justify-between mx-auto w-full lg:w-3/5 backdrop:blur-lg text-white">
       <a href="/" className="text-white text-xl lg:text-3xl ml-10 lg:ml-0 ">
       <span className="text-yellow-500">{openTag}</span>OASRCode<span className="text-yellow-500">{closeTag}</span>
        </a>
        <ul className="hidden lg:flex flex-row items-center gap-20 mr-10">
          {tabs.map((tab, index) => (
            <MotionButtonHeader onHoverStart={() => setHovered(tab.label)} href={tab.href} key={index} className="group relative cursor-pointer hover:text-yellow-500 duration-200 px-4 py-3">
              {tab.label}

              {hovered === tab.label && <MotionSpanHeaderHover layoutId="nav-item" className="absolute bg-yellow-500 bg-opacity-30 inset-0 rounded-md p-2"></MotionSpanHeaderHover>}
            </MotionButtonHeader>
          ))}
        </ul>
        <a className="block lg:hidden bg-yellow-500 text-black mr-10 rounded-lg hover:bg-yellow-700 hover:text-yellow-100 duration-200 px-4 py-1 lg:px-6 lg:py-3"> Blog</a>
      </div>
    </header>
  );
}
