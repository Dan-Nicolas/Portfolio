import styles from "./SkillsStyles.module.css";
import lightCheckMark from "../../assets/checkmark-light.svg";
import darkCheckMark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? lightCheckMark : darkCheckMark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"HTML"} />
        <SkillList src={checkMarkIcon} skill={"CSS"} />
        <SkillList src={checkMarkIcon} skill={"JavaSCript"} />
        <SkillList src={checkMarkIcon} skill={"Java"} />
        <SkillList src={checkMarkIcon} skill={"Python"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"React"} />
        <SkillList src={checkMarkIcon} skill={"Angular"} />
        <SkillList src={checkMarkIcon} skill={"Vue"} />
        <SkillList src={checkMarkIcon} skill={"Pandas"} />
        <SkillList src={checkMarkIcon} skill={"Numpy"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"HTML"} />
        <SkillList src={checkMarkIcon} skill={"CSS"} />
        <SkillList src={checkMarkIcon} skill={"JavaSCript"} />
        <SkillList src={checkMarkIcon} skill={"Java"} />
        <SkillList src={checkMarkIcon} skill={"Python"} />
      </div>
    </section>
  );
}

export default Skills;
