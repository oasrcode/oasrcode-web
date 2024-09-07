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
import { MotionSection } from "./motion/Motions";
import TypeScriptIcon from "./icons/TypeScriptIcon";
import JavaScriptIcon from "./icons/JavaScriptIcon";
import TailwindIcon from "./icons/TailwindIcon";
import ReactIcon from "./icons/ReactIcon";

import CSharpIcon from "./icons/CSharpIcon";
import Css3Icon from "./icons/Css3Icon";

import HTML5Icon from "./icons/Html5Icon";
import JavaIcon from "./icons/JavaIcon";

import JiraIcon from "./icons/JiraIcon";
import MongoIcon from "./icons/MongoIcon";
import MySQLIcon from "./icons/MySQLIcon";

import NextJSIcon from "./icons/NextJSIcon";
import NodeIcon from "./icons/NodeIcon";
import OracleIcon from "./icons/OracleIcon";

import SlackIcon from "./icons/SlackIcon";
import SpringBootIcon from "./icons/SpringBootIcon";

import TeamsIcon from "./icons/TeamsIcon";
import InfiniteCarousel from "./InfiniteCarousel";

const icons = [
  <AngularIcon width={25} height={25} key={1} />,
  <AzureDevOpsIcon width={25} height={25} key={2} />,
  <GithubIcon width={25} height={25} key={3} />,
  <GitIcon width={25} height={25} key={4} />,
  <GrafanaIcon width={25} height={25} key={5} />,
  <NetIcon width={25} height={25} key={6} />,
  <PostgresIcon width={25} height={25} key={7} />,
  <DockerIcon width={25} height={25} key={8} />,
];

const frontendIcons = [
  AngularIcon({ height: 80, width: 80 }),
  TypeScriptIcon({ height: 80, width: 80 }),
  JavaScriptIcon({ width: 80, height: 80 }),
  TailwindIcon({ width: 80, height: 80 }),
  ReactIcon({ width: 80, height: 80 }),
  NextJSIcon({ width: 80, height: 80 }),
  HTML5Icon({ width: 80, height: 80 }),
  Css3Icon({ width: 80, height: 80 }),
];
const backendIcons = [
  NodeIcon({ height: 80, width: 80 }),
  MongoIcon({ height: 80, width: 80 }),
  NetIcon({ width: 80, height: 80 }),
  PostgresIcon({ width: 80, height: 80 }),
  CSharpIcon({ width: 80, height: 80 }),
  OracleIcon({ width: 80, height: 80 }),
  SpringBootIcon({ width: 80, height: 80 }),
  JavaIcon({ width: 80, height: 80 }),
  MySQLIcon({ width: 80, height: 80 }),
];
const ToolsIcons = [
  GithubIcon({ height: 80, width: 80 }),
  GitIcon({ height: 80, width: 80 }),
  JiraIcon({ width: 80, height: 80 }),
  TeamsIcon({ width: 80, height: 80 }),
  SlackIcon({ width: 80, height: 80 }),
  AzureDevOpsIcon({ width: 80, height: 80 }),
  DockerIcon({ width: 80, height: 80 }),
  GrafanaIcon({ width: 80, height: 80 }),
];
export default function Hero() {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      id="home"
      className="h-[100dvh] w-full flex flex-row items-center justify-center relative z-0"
    >
      <div className="flex flex-col items-center justify-center gap-5 mt-5 lg:mt-0">
        <img src="/foto_perfil.jfif" className="rounded-full w-32 lg:w-52 shadow-lg shadow-gray-900" alt="Foto de perfil de Aythami Santana, desarrollador de software"/>
        <p className="text-3xl lg:text-5xl font-bold font-sans text-black">Aythami Santana</p>
        <p className="text-xl lg:text-3xl font-sans font-semibold text-black opacity-80">Fullstack developer</p>
        <p className="w-11/12 lg:w-2/5 opacity-80">
        Soluciono problemas, ayudo al equipo a alcanzar objetivos, fomento un buen clima de trabajo y me mantengo en constante aprendizaje para adaptarme a las nuevas tendencias.
        </p>
        <li className="list-none flex flex-row items-center gap-10 lg:mt-10">
          <a className="hover:scale-125 ease-in-out duration-200" href="https://www.linkedin.com/in/oasrjob/" target="_blank" aria-label="Enlace a Linkedin">
            <LinkedinIcon width={40} height={40} />
          </a>
          <a className="hover:scale-125 ease-in-out duration-200" href="https://github.com/oasrcode/" target="_blank"  aria-label="Enlace a Github">
            <GithubIcon width={40} height={40} />
          </a>
          <a className="px-3 py-2 bg-black rounded-lg ease-in-out duration-200 hover:scale-125" href="mailto:oasrjob@gmail.com"  aria-label="Enviar un email a oasrjob@gmail.com">
            Contáctame 🤙
          </a>
        </li>
      </div>
      <div className="absolute bottom-24 animate-bounce">
        <ArrowDown width={50} height={50} />
      </div>
      <div className="absolute top-20 lg:top-48 -z-20 max-w-[100%]">
        <InfiniteCarousel icons={frontendIcons} direction={"right"} />
        <InfiniteCarousel icons={backendIcons} direction={"left"} />
        <InfiniteCarousel icons={ToolsIcons} direction={"right"} />
      </div>
    </MotionSection>
  );
}
