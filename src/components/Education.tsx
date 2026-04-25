import type { FC } from 'react';
import { education } from '../data';
import { useFadeIn } from '../hooks/useFadeIn';
import SectionLabel from './SectionLabel';
import styles from './Education.module.css';

const Education: FC = () => {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section id="education" ref={ref} className={`${styles.section} fade-up`}>
      <SectionLabel>Education</SectionLabel>
      <div className={styles.grid}>
        {education.map(({ degree, school, focus, period }) => (
          <div key={degree} className={styles.card}>
            <div className={styles.degree}>{degree}</div>
            <div className={styles.school}>{school}</div>
            <div className={styles.detail}>Focus: {focus} · {period}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
