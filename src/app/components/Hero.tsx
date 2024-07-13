import ArrowDown from "./icons/ArrowDown";

export default function Hero() {
  return (
    <section id="home" className="h-[100dvh] w-full flex flex-row items-center justify-center">
      <div className="absolute bottom-40 animate-bounce">
        {" "}
       
          <ArrowDown width={50} height={50} />
       
      </div>
    </section>
  );
}
