import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import UpDownButton from "./components/UpDownButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.Main}>
      <UpDownButton />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <footer id="footer" />
    </main>
  );
}
