"use client";
import { useEffect, useState } from "react";
import { Skill } from "../interface/ISkills";

import AngularIcon from "./icons/AngularIcon";
import AzureDevOpsIcon from "./icons/AzureDevOpsIcon";
import CSharpIcon from "./icons/CSharpIcon";
import Css3Icon from "./icons/Css3Icon";
import DockerIcon from "./icons/DockerIcon";
import GithubIcon from "./icons/GithubIcon";
import GitIcon from "./icons/GitIcon";
import GrafanaIcon from "./icons/GrafanaIcon";
import HTML5Icon from "./icons/Html5Icon";
import JavaIcon from "./icons/JavaIcon";
import JavaScriptIcon from "./icons/JavaScriptIcon";
import JiraIcon from "./icons/JiraIcon";
import MongoIcon from "./icons/MongoIcon";
import MySQLIcon from "./icons/MySQLIcon";
import NetIcon from "./icons/NetIcon";
import NextJSIcon from "./icons/NextJSIcon";
import NodeIcon from "./icons/NodeIcon";
import OracleIcon from "./icons/OracleIcon";
import PostgresIcon from "./icons/PostgresIcon";
import ReactIcon from "./icons/ReactIcon";
import SlackIcon from "./icons/SlackIcon";
import SpringBootIcon from "./icons/SpringBootIcon";
import TailwindIcon from "./icons/TailwindIcon";
import TeamsIcon from "./icons/TeamsIcon";
import TypeScriptIcon from "./icons/TypeScriptIcon";

import { MotionSpanHeaderHover, MotionSpanSkillsPill, MotionSpanSkillsSelectorHover } from "./motion/Motions";
import Unity3DIcon from "./icons/Unity3DIcon";
import PowerBiIcon from "./icons/PowerBiIcon";

const frontendSkills: Skill[] = [
  { type: "Frontend", label: "Angular", icon: AngularIcon({ height: 40, width: 40 }) },
  { type: "Frontend", label: "TypeScript", icon: TypeScriptIcon({ height: 40, width: 40 }) },
  { type: "Frontend", label: "JavaScript", icon: JavaScriptIcon({ width: 40, height: 40 }) },
  { type: "Frontend", label: "Tailwind", icon: TailwindIcon({ width: 40, height: 40 }) },
  { type: "Frontend", label: "React", icon: ReactIcon({ width: 40, height: 40 }) },
  { type: "Frontend", label: "Next.js", icon: NextJSIcon({ width: 40, height: 40 }) },
  { type: "Frontend", label: "HTML5", icon: HTML5Icon({ width: 40, height: 40 }) },
  { type: "Frontend", label: "CSS3", icon: Css3Icon({ width: 40, height: 40 }) },
];

const backendSkills: Skill[] = [
  { type: "Backend", label: "Node.js", icon: NodeIcon({ height: 40, width: 40 }) },
  { type: "Backend", label: "MongoDB", icon: MongoIcon({ height: 40, width: 40 }) },
  { type: "Backend", label: ".NET", icon: NetIcon({ width: 40, height: 40 }) },
  { type: "Backend", label: "PostgreSQL", icon: PostgresIcon({ width: 40, height: 40 }) },
  { type: "Backend", label: "C#", icon: CSharpIcon({ width: 40, height: 40 }) },
  { type: "Backend", label: "Oracle", icon: OracleIcon({ width: 40, height: 40 }) },
  { type: "Backend", label: "Spring Boot", icon: SpringBootIcon({ width: 40, height: 40 }) },
  { type: "Backend", label: "Java", icon: JavaIcon({ width: 40, height: 40 }) },
  { type: "Backend", label: "MySQL", icon: MySQLIcon({ width: 40, height: 40 }) },
];

const toolsSkills: Skill[] = [
  { type: "Herramienta", label: "GitHub", icon: GithubIcon({ height: 40, width: 40 }) },
  { type: "Herramienta", label: "Git", icon: GitIcon({ height: 40, width: 40 }) },
  { type: "Herramienta", label: "Jira", icon: JiraIcon({ width: 40, height: 40 }) },
  { type: "Herramienta", label: "Microsoft Teams", icon: TeamsIcon({ width: 40, height: 40 }) },
  { type: "Herramienta", label: "Slack", icon: SlackIcon({ width: 40, height: 40 }) },
  { type: "Herramienta", label: "Azure DevOps", icon: AzureDevOpsIcon({ width: 40, height: 40 }) },
  { type: "Herramienta", label: "Docker", icon: DockerIcon({ width: 40, height: 40 }) },
  { type: "Herramienta", label: "Grafana", icon: GrafanaIcon({ width: 40, height: 40 }) },
  { type: "Herramienta", label: "Power Bi", icon: PowerBiIcon({ width: 40, height: 40 }) },
  { type: "Herramienta", label: "Unity", icon: Unity3DIcon({ width: 40, height: 40 }) },
];
const allSkills = [...frontendSkills, ...backendSkills, ...toolsSkills];

export default function Skills() {
  const tabs = [{ label: "Frontend" }, { label: "Backend" }, { label: "Herramienta" }];
  const [hovered, setHovered] = useState("Frontend");
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    let filteredSkills = allSkills.filter((skill) => skill.type === hovered);
    setSkills(filteredSkills);
  }, [hovered]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-1 lg:gap-5 items-center justify-center">
        {tabs.map((tab, key) => (
          <MotionSpanSkillsSelectorHover
            key={key}
            className="group relative cursor-pointer text-neutral-300 hover:text-yellow-500 duration-200 px-4 py-3"
            onHoverStart={() => setHovered(tab.label)}
            onClick={() => setHovered(tab.label)}
          >
            {tab.label}
            {hovered === tab.label && <MotionSpanHeaderHover layoutId="skillsSelector" className="absolute bg-yellow-500 bg-opacity-30 inset-0 rounded-md p-2"></MotionSpanHeaderHover>}
          </MotionSpanSkillsSelectorHover>
        ))}
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        {skills.map((skill, index) => (
          <MotionSpanSkillsPill
            initial={{ opacity: 0,scale:0.7 }}
            animate={{ opacity: 1,scale:1 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            key={`${hovered}-${index}`}
            className="flex flex-row gap-3 items-center justify-end bg-neutral-300  hover:bg-yellow-100 p-2 rounded-lg"
          >
            {skill.icon}
            <span className="text-black">{skill.label}</span>
          </MotionSpanSkillsPill>
        ))}
      </div>
    </div>
  );
}
