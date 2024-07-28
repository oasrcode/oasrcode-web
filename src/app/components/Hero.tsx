
import { useEffect, useState } from "react";
import AngularIcon from "./icons/AngularIcon";
import ArrowDown from "./icons/ArrowDown";
import AzureDevOpsIcon from "./icons/AzureDevOpsIcon";
import DockerIcon from "./icons/DockerIcon";
import GithubIcon from "./icons/Github";
import GitIcon from "./icons/GitIcon";
import GrafanaIcon from "./icons/GrafanaIcon";
import LinkedinIcon from "./icons/Linkedin";
import NetIcon from "./icons/NetIcon";
import PostgresIcon from "./icons/PostgresIcon";
import { MotionDivSnake, MotionSection } from "./motion/Motions";

const icons = [
  <AngularIcon width={25} height={25} key={1} />,
  <AzureDevOpsIcon width={25} height={25} key={2} />,
  <GithubIcon width={25} height={25} key={3} />,
  <GitIcon width={25} height={25} key={4} />,
  <GrafanaIcon width={25} height={25} key={5} />,
  <NetIcon width={25} height={25} key={6} />,
  <PostgresIcon width={25} height={25} key={7} />,
  <DockerIcon width={25} height={25} key={8} />,
]


export default function Hero() {

  return (
    <MotionSection initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 1 }} id="home" className="h-[100dvh] w-full flex flex-row items-center justify-center relative">
    <div className="flex flex-col items-center justify-center gap-5">
      <img src="/foto_perfil.jfif" className="rounded-full w-32 lg:w-52 shadow-lg shadow-gray-900" />
      <p className="text-3xl lg:text-5xl font-bold font-sans text-black">Aythami Santana</p>
      <p className="text-xl lg:text-3xl font-sans font-semibold text-black opacity-80">Fullstack developer</p>
      <p className="w-11/12 lg:w-2/5 opacity-80">
        Me gusta utilizar diversas herramientas y tecnologías para encontrar soluciones creativas y efectivas, dándome la habilidad y capacidad de adaptarme a diferentes situaciones y desafíos.
      </p>
      <li className="list-none flex flex-row items-center gap-10 mt-10">
        <a className="hover:scale-125 ease-in-out duration-200" href="https://www.linkedin.com/in/oasrjob/" target="_blank">
          <LinkedinIcon width={40} height={40} />
        </a>
        <a className="hover:scale-125 ease-in-out duration-200" href="https://github.com/oasrcode/" target="_blank">
          <GithubIcon width={40} height={40} />
        </a>
        <a className="px-3 py-2 bg-black rounded-lg ease-in-out duration-200 hover:bg-slate-800 hover:scale-125 hover:ring-2 hover:ring-yellow-200" href="mailto:oasrjob@gmail.com">
          Contáctame 🤙
        </a>
      </li>
    </div>
    <div className="absolute bottom-0 lg:bottom-40 animate-bounce">
      <ArrowDown width={50} height={50} />
    </div>
  </MotionSection>
  );
}
