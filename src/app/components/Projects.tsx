import { Project } from "../interface/IProject";
import DockerIcon from "./icons/DockerIcon";
import GithubIcon from "./icons/Github";
import GitIcon from "./icons/GitIcon";
import JavaScriptIcon from "./icons/JavaScriptIcon";
import MongoIcon from "./icons/MongoIcon";
import NextJSIcon from "./icons/NextJSIcon";
import NodeIcon from "./icons/NodeIcon";
import PostgresIcon from "./icons/PostgresIcon";
import ReactIcon from "./icons/ReactIcon";
import TailwindIcon from "./icons/TailwindIcon";
import TypeScriptIcon from "./icons/TypeScriptIcon";
import ProjectCard from "./ProjectCard";

const PROJECTS: Project[] = [
  {
    name: "Filmster",
    summ: "Este proyecto es una página web construida con Next.js que muestra un catálogo de películas de la api TheMovieDB . Permite a los usuarios explorar diferentes películas, ver detalles y buscar títulos específicos.",
    icons: [NextJSIcon({ width: 50, height: 50 }), JavaScriptIcon({ width: 50, height: 50 }), ReactIcon({ width: 50, height: 50 }), TailwindIcon({ width: 50, height: 50 }),GitIcon({ width: 50, height: 50 }),GithubIcon({ width: 50, height: 50 })],
    url: "https://github.com/oasrcode/Filmster",
    image:"/filmin_frontpage-min.png"
  },
  {
    name: "iot-Simulator",
    summ: "Proyecto que simula la generación de datos de sensores de aire y agua, para ser almacenados en bases de datos de MongoDB y de series temporales en CrateDB.",
    icons: [NodeIcon({ width: 50, height: 50 }), DockerIcon({ width: 50, height: 50 }), PostgresIcon({ width: 50, height: 50 }), MongoIcon({ width: 50, height: 50 }),GitIcon({ width: 50, height: 50 }),GithubIcon({ width: 50, height: 50 })],
    url: "https://github.com/oasrcode/iot-Simulator",
     image:"/github-wallpaper-min.jpeg"
  },
  {
    name: "Portfolio",
    summ: "Proyecto de mi portfolio personal.",
    icons: [NextJSIcon({ width: 50, height: 50 }),ReactIcon({ width: 50, height: 50 }), TypeScriptIcon({ width: 50, height: 50 }), TailwindIcon({ width: 50, height: 50 }), GitIcon({ width: 50, height: 50 }),GithubIcon({ width: 50, height: 50 })],
    url: "https://github.com/oasrcode/oasrcode-web",
     image:"/github-wallpaper-min.jpeg"
  }
];

export default function Projects() {
  return (
    <div className="relative flex flex-col lg:flex-row lg:flex-wrap gap-7 w-full min-h-[100dvh] pt-0 lg:pt-40 mb-50 items-center justify-center lg:items-start">
      {PROJECTS.map((e, index) => (
        <ProjectCard key={index} data={e}></ProjectCard>
      ))}
    </div>
  );
}
