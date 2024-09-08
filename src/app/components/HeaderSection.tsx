import { MotionSection } from "./motion/Motions";

const OPENTAG = "<";
const CLOSETAG = "/>";
export default function HeaderSection({ children, id, title }: { children: React.ReactNode; id: string; title: string }) {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      }}
      exit={{  opacity: 0 }}
      id={id}
      className="relative flex flex-col w-full h-auto pt-40 xl:items-center justify-start xl:justify-start text-black "
    >
      <p className="relative lg:absolute lg:left-0 text-2xl lg:text-4xl font-bold text-neutral-300 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] ">
        <span className="text-2xl lg:text-4xl text-yellow-500">{OPENTAG}</span>
        {title}
        <span className=" text-2xl lg:text-4xl text-yellow-500">{CLOSETAG}</span>
      </p>

      {children}
    </MotionSection>
  );
}
