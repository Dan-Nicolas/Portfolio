import heroImg from "../../assets/Self.png";
import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import LightLinkedIn from "../../assets/linkedin-light.svg";
import DarkLinkedIn from "../../assets/linkedin-dark.svg";
import LightGithub from "../../assets/github-light.svg";
import DarkGithub from "../../assets/github-dark.svg";
import LightInstagram from "../../assets/instagram-light.svg";
import DarkInstagram from "../../assets/instagram-dark.svg";
import Resume from "../../assets/Resume1.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const LinkedInIcon = theme === "light" ? LightLinkedIn : DarkLinkedIn;
  const GitHubIcon = theme === "light" ? LightGithub : DarkGithub;
  const InstagramIcon = theme === "light" ? LightInstagram : DarkInstagram;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Daniel Nicolas"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Daniel <br /> Nicolas
        </h1>
        <h2>Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/daniel-nicolas-337595246/"
            target="_blank"
          >
            <img src={LinkedInIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/Dan-Nicolas" target="_blank">
            <img src={GitHubIcon} alt="GitHub Icon" />
          </a>
          <a
            href="https://www.instagram.com/dan_.nicolas?igsh=a3RrbjMwYTZvemJ5&utm_source=qr"
            target="_blank"
          >
            <img src={InstagramIcon} alt="Instagram Icon" />
          </a>
        </span>
        <p className={styles.description}>
          {" "}
          Hi, I’m Dan, I’m working towards becoming a
          software engineer/developer and am eager to contribute my skills in
          coding, problem-solving, and backend development to the tech industry.
        </p>

        <a href={Resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
