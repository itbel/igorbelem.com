import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import UpDownButton from "./components/UpDownButton";

export default function Home() {
  return (
    <>
      <UpDownButton />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <footer id="footer" />
    </>
  );
}
