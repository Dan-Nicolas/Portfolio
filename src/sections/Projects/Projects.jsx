import React from "react";
import styles from "./ProjectsStyles.module.css";
import Tetris from "../../assets/Tetris.jpg";
import ProjectCard from "../../common/ProjectCard";
import Flappy from "../../assets/Flappy Bird.png";
import TwentyFour from "../../assets/2048.png";
import ISS from "../../assets/iss.jpg";
import Budget from "../../assets/budget.png";

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
          p={"AI learns to play"}
        />

        <ProjectCard
          src={TwentyFour}
          link={"https://github.com/Dan-Nicolas/2048"}
          h3={"2048"}
          p={"Classic Game of 2048"}
        />

        <ProjectCard
          src={ISS}
          link={"https://github.com/Dan-Nicolas/Where-is-the-ISS"}
          h3={"Where is the ISS?"}
          p={"ISS Tracker"}
        />

        <ProjectCard
          src={Budget}
          link={"https://github.com/Dan-Nicolas/Personal-Finance-Tracker"}
          h3={"Personal Finance Tracker"}
          p={"Track Expenses and Income"}
        />
      </div>
    </section>
  );
}

export default Projects;
