import React from "react";
import styles from "./ProjectsStyles.module.css";
import Viberr from "../../assets/viberr.png";
import Tetris from "../../assets/Tetris.jpg"
import ProjectCard from "../../common/ProjectCard";
import freshBurger from "../../assets/fresh-burger.png";
import Flappy from "../../assets/Flappy Bird.png";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Tetris}
          link={"https://github.com/Dan-Nicolas/Tetris"}
          h3={"Tetris"}
          p={"Game"}
        />

        <ProjectCard
          src={Flappy}
          link={"https://github.com/Dan-Nicolas/FlappyBird"}
          h3={"AI Plays Flappy Bird"}
          p={"Game"}
        />

        <ProjectCard
          src={Viberr}
          link={"https://github.com/Dan-Nicolas/FlappyBird"}
          h3={"AI Plays Flappy Bird"}
          p={"Game"}
        />

        <ProjectCard
          src={Viberr}
          link={"https://github.com/Dan-Nicolas/FlappyBird"}
          h3={"AI Plays Flappy Bird"}
          p={"Game"}
        />
      </div>
    </section>
  );
}

export default Projects;
