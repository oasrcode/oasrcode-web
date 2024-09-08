import Skills from "./Skills";

export default function AboutMe() {
  return (
    <div className="relative mt-20 flex flex-col xl:flex-row w-full text-neutral-200 items-start justify-start gap-10">
      <div className="flex flex-col gap-5 w-full xl:w-[50%]">
        <p>Soy desarrollador de software full stack que vive en Gran Canaria 🏝️</p>
        <p>Más que un desarrollador de aplicaciones y web, me concidero un desarrollador de soluciones a las necesidades que afrontamos.</p>
        <div className="group relative">
          <blockquote className="relative">
            <p className="block">
              {" "}
              <span className="animate-pulse">🖱️</span> &quot;Nemo vir est qui mundum non reddat meliorem&quot;{" "}
            </p>
            <p className="absolute left-0 top-full mt-2 hidden group-hover:block bg-yellow-500 text-black text-sm p-2 rounded shadow-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              Qué clase de hombre es aquel que no quiere mejorar el mundo
            </p>
            <p className="w-full text-end">Marcus Aurelius</p>
          </blockquote>
        </div>
      </div>
      <div className="w-full xl:w-[50%]">
        <Skills />
      </div>
    </div>
  );
}
