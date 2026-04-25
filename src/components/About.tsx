import type { FC } from 'react';
import { meta } from '../data';
import { useFadeIn } from '../hooks/useFadeIn';
import SectionLabel from './SectionLabel';
import styles from './About.module.css';

const About: FC = () => {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section id="about" ref={ref} className={`${styles.section} fade-up`}>
      <SectionLabel>About</SectionLabel>
      <p className={styles.text}>
        Software engineer with <strong>7+ years of experience</strong> building performant,
        user-facing web applications. Deep expertise in <strong>React and TypeScript</strong>,
        with a proven track record delivering complex products in fast-paced cross-functional teams.
        Passionate about <strong>clean architecture</strong>, developer experience, and creating
        interfaces that users love.{' '}
        {meta.location} — fluent English, native Hindi, basic German.
      </p>
    </section>
  );
};

export default About;
