import styles from "./Skills.module.css";
import Image from "next/image";
const tech_data = [
  {
    uri: "/assets/js_badge.svg",
    caption: "JavaScript",
  },
  {
    uri: "/assets/react.svg",
    caption: "React",
  },
  {
    uri: "/assets/react.svg",
    caption: "React Native",
  },
  {
    uri: "/assets/typescript.svg",
    caption: "TypeScript",
  },
  {
    uri: "/assets/amplify.svg",
    caption: "AWS Amplify",
  },
  {
    uri: "/assets/nodejs_small.svg",
    caption: "NodeJS",
  },
  {
    uri: "/assets/expressjs.svg",
    caption: "ExpressJS",
  },
  {
    uri: "/assets/mongodb.svg",
    caption: "MongoDB",
  },
  {
    uri: "/assets/graphql.svg",
    caption: "GraphQL",
  },
  {
    uri: "/assets/css3.svg",
    caption: "CSS3",
  },
  {
    uri: "/assets/sass.svg",
    caption: "SCSS",
  },
  {
    uri: "/assets/html5.svg",
    caption: "HTML5",
  },
];
export default function Skills() {
  return (
    <section className={styles.SkillsContainer}>
      <h2 className={styles.SkillsHeadingText}>Skills</h2>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          gridGap: "1rem",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {tech_data.map(({ caption, uri }) => (
          <li className={styles.SkillItem} key={uri}>
            <figure>
              <Image
                alt={`${caption} Icon`}
                style={{ display: "block", margin: "auto" }}
                src={uri}
                width={55}
                height={55}
              />
              <figcaption className={styles.SkillText}>{caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
