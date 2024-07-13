import { Card } from "../interface/CardProps";
import ExperienceCard from "./ExperienceCard";
import AngularIcon from "./icons/AngularIcon";
import AzureDevOpsIcon from "./icons/AzureDevOpsIcon";
import GitIcon from "./icons/GitIcon";
import NetIcon from "./icons/NetIcon";
import { MotionSection } from "./motion/Motions";

const CARDS: Card[] = [
  {
    name: "GiseCloud",
    summ: "Desarrollo de plataforma de seguridad para policía local y equipos de emergencias en canarias.",
    icons: [AngularIcon({ width: 20, height: 20 }), NetIcon({ width: 20, height: 20 }), AzureDevOpsIcon({ width: 20, height: 20 }), GitIcon({ width: 20, height: 20 })],
  },
];
export default function Experience() {
  const openTag = "<";
  const closeTag = "/>";

  return (
    <MotionSection
      initial={{ x: 300, opacity: 0 }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      exit={{ x: 300, opacity: 0 }}
      id="experience"
      className="relative flex flex-col w-full h-[100dvh] pt-0 lg:pt-40  lg:items-center justify-start lg:justify-start text-black "
    >
      <p className="relative lg:absolute lg:left-0 text-4xl font-bold ">
        <span className="text-4">{openTag}</span>
        Experiencia
        <span className="text-4xl">{closeTag}</span>
      </p>

      <div className="relative border-l-2 border-black  mt-20 lg:mt-20 ">
        <div className="ml-10 flex flex-row gap-5">
          <div className="bg-white w-5 h-5 rounded-full absolute -left-2.5"></div>
          <div>
            <p className="text-xs lg:text-sm opacity-70">03/2023 - Actualidad</p>
            <p className="lg:text-2xl font-bold mt-4">Fullstack Developer</p>
            <p className="text-sm lg:text-lg">Tecnicas Competitivas S.L</p>
            <p className="opacity-70 text-xs">Proyectos</p>
            {CARDS.map((card, index) => (
              <ExperienceCard data={card} key={index} />
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
{
  /* <MotionDivExperienceCardHover
whileHover={{ scale: 1.2 }}
whileTap={{ scale: 0.9 }}
transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1 }}
className="flex flex-col p-1 pl-2 gap-3 bg-white border-[1px] rounded-lg border-black mt-3 max-w-[600px] shadow-gray-700 shadow-lg"
>
<p className="font-semibold">GiseCloud</p>

<p className=" text-sm text-wrap"> Desarrollo de plataforma de seguridad para policía local y equipos de emergencias en canarias.</p>
<div className="flex flex-row flex-wrap gap-2">
  <AngularIcon width={25} height={25} />
  <NetIcon width={25} height={25} />
</div>
</MotionDivExperienceCardHover> */
}
