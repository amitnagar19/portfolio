import type { FC } from 'react';
import type { IconType } from 'react-icons';
import {
  SiJavascript, SiTypescript, SiHtml5, SiSass,
  SiReact, SiRedux, SiNodedotjs, SiExpress, SiReactquery,
  SiMui, SiStyledcomponents,
  SiJest, SiCypress, SiSelenium,
  SiGit, SiDocker, SiJenkins, SiWebpack, SiGulp, SiNetlify, SiLinux,
  SiMongodb, SiMysql, SiJira,
  SiGithub, SiAnthropic,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { skills } from '../data';
import { useFadeIn } from '../hooks/useFadeIn';
import SectionLabel from './SectionLabel';
import styles from './Skills.module.css';

interface SkillIconDef {
  icon: IconType;
  color: string;
}

const iconMap: Record<string, SkillIconDef> = {
  'JavaScript (ES6+)':   { icon: SiJavascript,       color: '#F7DF1E' },
  'TypeScript':          { icon: SiTypescript,        color: '#3178C6' },
  'HTML5':               { icon: SiHtml5,             color: '#E34F26' },
  'CSS3 / SASS':         { icon: SiSass,              color: '#CC6699' },
  'React':               { icon: SiReact,             color: '#61DAFB' },
  'Redux':               { icon: SiRedux,             color: '#764ABC' },
  'Redux-Saga':          { icon: SiRedux,             color: '#999' },
  'Node.js':             { icon: SiNodedotjs,         color: '#339933' },
  'Express.js':          { icon: SiExpress,           color: '#888' },
  'Tanstack Query':      { icon: SiReactquery,        color: '#FF4154' },
  'Material UI':         { icon: SiMui,               color: '#007FFF' },
  'Styled Components':   { icon: SiStyledcomponents,  color: '#DB7093' },
  'Jest':                { icon: SiJest,              color: '#C21325' },
  'Cypress':             { icon: SiCypress,           color: '#69D3A7' },
  'Selenium':            { icon: SiSelenium,          color: '#43B02A' },
  'Git':                 { icon: SiGit,               color: '#F05032' },
  'Docker':              { icon: SiDocker,            color: '#2496ED' },
  'Jenkins':             { icon: SiJenkins,           color: '#D24939' },
  'Webpack':             { icon: SiWebpack,           color: '#8DD6F9' },
  'Gulp':                { icon: SiGulp,              color: '#CF4647' },
  'Netlify':             { icon: SiNetlify,           color: '#00C7B7' },
  'Linux':               { icon: SiLinux,             color: '#FCC624' },
  'MongoDB':             { icon: SiMongodb,           color: '#47A248' },
  'MySQL':               { icon: SiMysql,             color: '#4479A1' },
  'JIRA':                { icon: SiJira,              color: '#0052CC' },
  'GitHub Copilot':      { icon: SiGithub,            color: '#888' },
  'Claude Code':         { icon: SiAnthropic,         color: '#D4A574' },
};

const fallback: SkillIconDef = { icon: VscCode, color: '#8888a8' };

const Skills: FC = () => {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section id="skills" ref={ref} className={`${styles.section} fade-up`}>
      <SectionLabel>Skills</SectionLabel>
      {skills.map(({ category, items }) => (
        <div key={category} className={styles.group}>
          <h3 className={styles.category}>{category}</h3>
          <ul className={styles.grid}>
            {items.map(item => {
              const def = iconMap[item] ?? fallback;
              const Icon = def.icon;
              return (
                <li key={item} className={styles.card}>
                  <Icon className={styles.icon} style={{ color: def.color }} />
                  <span className={styles.name}>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
