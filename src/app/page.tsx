import Experience from "./components/Experience";
import HeaderSection from "./components/HeaderSection";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="w-11/12 lg:w-3/5 mx-auto">
      <Hero />

      <HeaderSection id="experience" title="Experiencia">
      <Experience/>
      </HeaderSection>

      <HeaderSection id="skills" title="Habilidades">
      <Skills/>
      </HeaderSection>
   
    </div>
  );
}
