"use client";
import Image from "next/image";
import { MotionButtonHeaderHover, MotionSpanHeaderHover } from "../motion/Motions";
import { useState } from "react";

export default function Header() {
  let tabs = ["Inicio", "Experiencia", "Proyectos", "Blog"];
  const [hovered, setHovered] = useState("Inicio");
  return (
    <header className="sticky flex flex-row items-center justify-between w-full h-24 bg-emerald-900 ">
      <Image className="ml-10" src="./next.svg" alt="logo" width="200" height="200" />
      <ul className="flex flex-row items-center gap-20 mr-10">
        {tabs.map((tab, index) => (
          <MotionButtonHeaderHover 
          onHoverStart={()=>setHovered(tab)}
          
          key={index} className="group relative hover:text-red-600  duration-200 px-3 py-1">
            {tab}{hovered===tab&&(    <MotionSpanHeaderHover
            layoutId="nav-item" className="absolute bg-gray-100 bg-opacity-10 inset-0 rounded-md p-2"></MotionSpanHeaderHover>)}
        
          </MotionButtonHeaderHover>
        ))}
      </ul>
    </header>
  );
}
