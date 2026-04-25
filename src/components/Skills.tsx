import type { FC } from 'react';
import { skills } from '../data';
import { useFadeIn } from '../hooks/useFadeIn';
import SectionLabel from './SectionLabel';
import styles from './Skills.module.css';

const Skills: FC = () => {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section id="skills" ref={ref} className={`${styles.section} fade-up`}>
      <SectionLabel>Skills</SectionLabel>
      <div className={styles.grid}>
        {skills.map(({ category, items }) => (
          <div key={category} className={styles.row}>
            <span className={styles.category}>{category}</span>
            <div className={styles.tags}>
              {items.map(item => (
                <span key={item} className={styles.tag}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
