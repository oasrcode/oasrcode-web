"use client";
import Image from "next/image";
import Atropos from "atropos/react";
export default function Hero() {
  const img = "/public/heroimage.jpeg";
  return (
    <section className="h-auto w-full flex flex-row items-center justify-center">
      {/* <div className="w-[1/2] flex flex-col items-center justify-center">
        <p>Hola!,soy</p>
        <h1 className="text-5xl">Aythami Santana</h1>
        <h2 className="text-3xl mt-5">Desarrollador FullStack</h2>
        <p className="mt-10 w-1/2">
          Apasionado desarrollador full stack con un amor por la creación de aplicaciones web eficientes y atractivas. Siempre en busca de nuevas tecnologías y desafíos para mejorar sus habilidades.
        </p>
        <div className="flex flex-row items-center gap-20 mt-5">
          <button className="px-4 py-3 rounded-md bg-white text-black border-black border-2 ">Descargar CV</button>
          <button className="px-4 py-3 rounded-md bg-white text-black border-black border-2 ">Contacto</button>
        </div>
      </div>
      <div>
        
        <Atropos
         
          className="my-atropos"
        >
          <Image src="/carbon.png" alt="personal information" height={0} width={800} className="" />
        </Atropos>
      </div> */}
    </section>
  );
}
