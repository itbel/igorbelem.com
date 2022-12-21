import Image from "next/image";
import styles from "./Projects.module.css";
export default function Projects() {
  return (
    <div id="projects" className={styles.ProjectsContainer}>
      <h2 className={styles.ProjectHeadingText}>Projects</h2>
      <div className={styles.ProjectsSubContainer}>
        <Project
          name={"Bolao"}
          description={
            "Soccer tournaments result guessing application built with React Native. Shares a backend with footGuess."
          }
          repo={"https://github.com/itbel/bolao_legacy"}
          pic={"/assets/bolao_reduced.png"}
        ></Project>

        <Project
          demo={"https://igorbelem.com/covid"}
          name={"Ontario Vaccinations Tracker"}
          description={
            "A website to track the number of vaccinations completed in Ontario in the last seven days. It uses AWS Lambda and AWS S3, to retrieve and store data from the Ontario Data Catalogue."
          }
          repo={"https://github.com/itbel/covid-vaccines-tracker-ON"}
          pic={"/assets/covid_laptop.png"}
        ></Project>

        <Project
          name={"footGuess"}
          description={
            "Soccer tournaments result guessing application built using MERN Stack. Hosted on AWS EC2, this application shares a back-end with Bolao."
          }
          repo={"https://github.com/itbel/footGuess"}
          pic={"/assets/footGuess_reduced.png"}
        ></Project>
      </div>
    </div>
  );
}
type ProjectProps = {
  name: string;
  description: string;
  repo: string;
  pic: string;
  demo?: string;
};
const Project = ({ name, description, repo, pic, demo }: ProjectProps) => {
  return (
    <article className={styles.Project}>
      <figure>
        <a target="_blank" href={pic} rel="noopener noreferrer">
          <Image
            className={styles.ProjectPicture}
            src={pic}
            alt={`${name} Project`}
            width={541}
            height={276}
          />
        </a>
      </figure>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.ButtonContainer}>
          <a
            className={styles.Button}
            target="_blank"
            rel="noopener noreferrer"
            href={repo}
          >
            View Code
          </a>
          {demo !== undefined ? (
            <a
              className={styles.Button}
              target="_blank"
              rel="noopener noreferrer"
              href={demo}
            >
              View Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};
