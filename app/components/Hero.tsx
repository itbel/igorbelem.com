import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.HeroContainer} id="hero">
      <h1 className={styles.MainHeadingText}>Igor Belem</h1>
      <h2 className={styles.SubHeadingText}>Full Stack Developer</h2>
      <article>
        <a
          className={styles.LinkIcon}
          aria-label="Visit my GitHub profile"
          href={"https://github.com/itbel"}
        >
          <Image
            width={40}
            height={40}
            src="/assets/github.svg"
            alt="GitHub Icon"
          />
        </a>
        <a
          className={styles.LinkIcon}
          aria-label="Visit my Linkedin profile"
          href={"https://www.linkedin.com/in/igor-belem"}
        >
          <Image
            width={40}
            height={40}
            src="/assets/linkedin.svg"
            alt="LinkedIn Icon"
          />
        </a>
      </article>
    </section>
  );
}
