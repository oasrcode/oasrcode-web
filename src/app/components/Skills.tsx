import AngularIcon from "./icons/AngularIcon";
import CSharpIcon from "./icons/CSharpIcon";
import Css3Icon from "./icons/Css3Icon";
import HTML5Icon from "./icons/Html5Icon";
import JavaIcon from "./icons/JavaIcon";
import JavaScriptIcon from "./icons/JavaScriptIcon";
import MongoIcon from "./icons/MongoIcon";
import MySQLIcon from "./icons/MySQLIcon";
import NetIcon from "./icons/NetIcon";
import NextJSIcon from "./icons/NextJSIcon";
import NodeIcon from "./icons/NodeIcon";
import OracleIcon from "./icons/OracleIcon";
import PostgresIcon from "./icons/PostgresIcon";
import ReactIcon from "./icons/ReactIcon";
import SpringBootIcon from "./icons/SpringBootIcon";
import TailwindIcon from "./icons/TailwindIcon";

import TypeScriptIcon from "./icons/TypeScriptIcon";
import InfiniteCarousel from "./InfiniteCarousel";

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
  AngularIcon({ height: 80, width: 80 }),
  TypeScriptIcon({ height: 80, width: 80 }),
  JavaScriptIcon({ width: 80, height: 80 }),
  TailwindIcon({ width: 80, height: 80 }),
  ReactIcon({ width: 80, height: 80 }),
  NextJSIcon({ width: 80, height: 80 }),
  HTML5Icon({ width: 80, height: 80 }),
  Css3Icon({ width: 80, height: 80 }),
];
export default function Skills() {
  return (
    <div className="flex flex-col mt-20 gap-14">
      <p>Frontend</p>
      <InfiniteCarousel icons={frontendIcons} direction={"right"} />
      <p>Backend</p>
      <InfiniteCarousel icons={backendIcons} direction={"left"}/>
      <p>Herramientas</p>
      <InfiniteCarousel icons={ToolsIcons} direction={"right"}/>
    </div>
  );
}
