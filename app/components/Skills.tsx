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
    uri: "/assets/nextjs.svg",
    caption: "NextJS",
  },
  {
    uri: "/assets/typescript.svg",
    caption: "TypeScript",
  },
  {
    uri: "/assets/react.svg",
    caption: "React Native",
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
  {
    uri: "/assets/jest.svg",
    caption: "Jest",
  },
  {
    uri: "/assets/nodejs.svg",
    caption: "NodeJS",
  },
  {
    uri: "/assets/aws-lambda-1.svg",
    caption: "AWS Lambda",
  },
  {
    uri: "/assets/mongodb.svg",
    caption: "MongoDB",
  },
  {
    uri: "/assets/expressjs.svg",
    caption: "ExpressJS",
  },
  {
    uri: "/assets/amplify.svg",
    caption: "AWS Amplify",
  },

  {
    uri: "/assets/amazon-s3.svg",
    caption: "Amazon S3",
  },
];
export default function Skills() {
  return (
    <section className={styles.SkillsContainer}>
      <h2 className={styles.SkillsHeadingText}>Skills</h2>
      <ul className={styles.SkillsListContainer}>
        {tech_data.map(({ caption, uri }) => (
          <li className={styles.SkillItem} key={uri}>
            <Image alt={`${caption} Icon`} src={uri} width={55} height={55} />
            <figcaption className={styles.SkillText}>{caption}</figcaption>
          </li>
        ))}
      </ul>
    </section>
  );
}
