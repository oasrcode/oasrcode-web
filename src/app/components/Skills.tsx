import AngularIcon from "./icons/AngularIcon";
import Css3Icon from "./icons/Css3Icon";
import HTML5Icon from "./icons/Html5Icon";
import JavaScriptIcon from "./icons/JavaScriptIcon";
import NextJSIcon from "./icons/NextJSIcon";
import ReactIcon from "./icons/ReactIcon";
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
export default function Skills() {
  return (
    <div className="flex flex-col mt-20 gap-14">
      <p>Frontend</p>
      <InfiniteCarousel icons={frontendIcons} direction={"right"} />
      <p>Backend</p>
      <InfiniteCarousel icons={frontendIcons} direction={"left"}/>
      <p>Herramientas</p>
      <InfiniteCarousel icons={frontendIcons} direction={"right"}/>
    </div>
  );
}
