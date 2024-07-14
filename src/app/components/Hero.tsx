import ArrowDown from "./icons/ArrowDown";
import GithubIcon from "./icons/Github";
import LinkedinIcon from "./icons/Linkedin";
import { MotionSection } from "./motion/Motions";

export default function Hero() {
  return (
    <MotionSection 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ ease: "easeInOut", duration: 1 }}
    id="home" className="h-[100dvh] w-full flex flex-row items-center justify-center">
      <div className="flex flex-col items-center  justify-center gap-5">
        <img src="/foto_perfil.jfif" width={150} height={150} className="rounded-full shadow-lg shadow-gray-900"></img>
        <p className="text-5xl font-bold font-sans text-black">Aythami Santana</p>
        <p className="text-3xl font-sans font-semibold text-black opacity-80">Fullstack developer</p>
        <li className="list-none flex flex-row items-center gap-10 mt-10">
          <a className="hover:scale-125 ease-in-out duration-200"  href="https://www.linkedin.com/in/oasrjob/" target="_blank">
            <LinkedinIcon width={40} height={40} />
          </a>
          <a className="hover:scale-125 ease-in-out duration-200" href="https://github.com/oasrcode/" target="_blank">
            <GithubIcon width={40} height={40} />
          </a>
          <a className="px-3 py-2 bg-black rounded-lg ease-in-out duration-200 hover:bg-slate-800 hover:scale-125 hover:ring-2 hover:ring-yellow-200" href="mailto:oasrjob@gmail.com">Contáctame</a>
        </li>
      </div>
      <div className="absolute bottom-40 animate-bounce">
        <ArrowDown width={50} height={50} />
      </div>
    </MotionSection>
  );
}
