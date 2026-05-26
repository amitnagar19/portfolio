import type { FC } from 'react';
import { experience } from '../data';
import { useFadeIn } from '../hooks/useFadeIn';
import SectionLabel from './SectionLabel';
import styles from './Experience.module.css';

const Experience: FC = () => {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section id="experience" ref={ref} className={`${styles.section} fade-up`}>
      <SectionLabel>Experience</SectionLabel>
      <div className={styles.timeline}>
        {experience.map((job) => (
          <div key={`${job.company}-${job.period}`} className={`${styles.item} ${job.current ? styles.current : ''}`}>
            <div className={styles.header}>
              <span className={styles.title}>{job.title}</span>
              <span className={styles.period}>{job.period}</span>
            </div>
            <div className={styles.company}>
              {job.company}{job.location ? ` · ${job.location}` : ''}
            </div>
            <ul className={styles.points}>
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
