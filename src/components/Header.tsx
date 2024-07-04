import Image from "next/image";

export default function Header() {
  return (<header className="sticky flex flex-row items-center justify-between w-full h-24 bg-emerald-900 ">
    <Image className="ml-10" src="./next.svg" alt="logo" width="200" height="200" />
    <ul className="flex flex-row items-center gap-20 mr-10">
        <a>Inicio</a>
        <a>Experiencia</a>
        <a>Proyectos</a>
        <a>Contacto</a>
        <a>Blog</a>
    </ul>
  </header>);
}
