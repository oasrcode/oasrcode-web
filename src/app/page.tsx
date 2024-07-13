import Experience from "./components/Experience";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="w-11/12 lg:w-3/5 mx-auto">
      <Hero />
      <Experience />
    </div>
  );
}
