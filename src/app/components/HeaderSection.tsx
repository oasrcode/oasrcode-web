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
      className="relative flex flex-col w-full min-h-[100dvh] pt-0 lg:pt-40 mb-20  lg:items-center justify-start lg:justify-start text-black "
    >
      <p className="relative lg:absolute lg:left-0 text-2xl lg:text-4xl font-bold ">
        <span className="text-2xl lg:text-4xl">{OPENTAG}</span>
        {title}
        <span className=" text-2xl lg:text-4xl">{CLOSETAG}</span>
      </p>

      {children}
    </MotionSection>
  );
}
