import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import HeaderSection from "./components/HeaderSection";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="w-11/12 lg:w-3/5 mx-auto">
      <Hero />
      <HeaderSection id="aboutme" title="Sobre mi">
        <AboutMe />
      </HeaderSection>
      <HeaderSection id="experience" title="Experiencia">
        <Experience />
      </HeaderSection>
      <HeaderSection id="projects" title="Proyectos">
        <Projects />
      </HeaderSection>
    </div>
  );
}
