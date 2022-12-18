import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.AboutContainer}>
      <h2 className={styles.AboutHeadingText}>About Me</h2>
      <div className={styles.AboutTextContainer}>
        <p className={styles.AboutText}>
          I am a well-rounded Full-Stack Developer with a passion for coding. I
          have a strong proficiency in various technologies, including React,
          React Native, Typescript, NodeJS, and AWS.
        </p>
        <p className={styles.AboutText}>
          I am constantly seeking to learn and improve my skills, and I am
          always eager to take on new challenges. Whether I am working on
          front-end or back-end projects, I am committed to delivering
          high-quality results and providing value to my clients.
        </p>
      </div>
    </section>
  );
}
