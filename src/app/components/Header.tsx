"use client";

import CloseMenuIcon from "./icons/CloseMenuIcon";
import OpenMenuIcon from "./icons/OpenMenuIcon";
import { MotionButtonHeader, MotionSideNav, MotionSpanHeaderHover } from "./motion/Motions";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Header() {
  const openTag = "{";
  const closeTag = "}";

  const tabs = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre mi", href: "#aboutme" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
  ];

  const [hovered, setHovered] = useState("Inicio");
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky z-50 flex items-center top-0 w-full h-24 bg-slate-950">
      <div className="flex flex-row items-center justify-between mx-auto w-full xl:w-3/5 backdrop:blur-lg text-white">
        <Link href="/" className="text-neutral-300 font-bold font-mono text-xl lg:text-3xl ml-10 lg:ml-0 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] " aria-label="enlace a la página principal">
          {/* <span className="text-yellow-500 font-serif">{openTag}</span>Aythami Santana<span className="text-yellow-500">{closeTag}</span> */}
          <img src="/icon_no_bg.png" width={80} height={80}/>
        </Link>

        <ul className="hidden xl:flex flex-row items-center gap-20 mr-10">
          {!pathname.includes("blog") ? (
            <>
              {" "}
              {tabs.map((tab, index) => (
                <MotionButtonHeader
                  aria-label={"enlace a " + tab.label}
                  href={tab.href}
                  onHoverStart={() => setHovered(tab.label)}
                  key={index}
                  className="group relative cursor-pointer text-neutral-300 hover:text-yellow-500 duration-200 px-4 py-3"
                >
                  {tab.label}
                  {hovered === tab.label && <MotionSpanHeaderHover layoutId="nav-item" className="absolute bg-yellow-500 bg-opacity-30 inset-0 rounded-md p-2"></MotionSpanHeaderHover>}
                </MotionButtonHeader>
              ))}
            </>
          ) : (
            <>
              {" "}
              <Link href="/" className="w-full py-3 px-5 rounded-md text-center bg-yellow-500" aria-label={"enlace a " + tabs[0].label}>
                {tabs[0].label}
              </Link>
            </>
          )}
        </ul>
        <button
          className="block xl:hidden mr-10"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show == false ? <OpenMenuIcon width={30} height={30} /> : <CloseMenuIcon width={40} height={40} />}
        </button>
      </div>
      <MotionSideNav
        initial={{ x: "-100%" }}
        animate={show ? { x: 0 } : { x: "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        style={{ display: show ? "block" : "block" }}
        className="absolute top-24 w-full h-[100dvh] bg-slate-950 flex flex-col lg:hidden"
      >
        <ul className="flex flex-col items-center justify-start gap-20 mt-20 mx-20">
          {!pathname.includes("blog") ? (
            <>
              {" "}
              {tabs.map((tab, index) => (
                <Link
                  href={tab.href}
                  onClick={() => {
                    setShow(!show);
                  }}
                  key={index}
                  className="w-full py-3 rounded-md text-center bg-yellow-500"
                >
                  {tab.label}
                </Link>
              ))}
            </>
          ) : (
            <>
              {" "}
              <Link
                href="/"
                onClick={() => {
                  setShow(!show);
                }}
                className="w-full py-3 rounded-md text-center bg-yellow-500"
              >
                {tabs[0].label}
              </Link>
            </>
          )}
        </ul>
      </MotionSideNav>
    </header>
  );
}
