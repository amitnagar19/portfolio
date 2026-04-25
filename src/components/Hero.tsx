import type { FC } from 'react';
import { meta } from '../data';
import profilePic from '../assets/profile_pic.jpeg';
import styles from './Hero.module.css';

const Hero: FC = () => (
  <section id="hero" className={styles.hero}>
    <div className={styles.heroContent}>
      <div className={styles.tag}>
        <span className={styles.dot} />
        Available for opportunities
      </div>
      <h1 className={styles.name}>{meta.name}</h1>
      <p className={styles.sub}>
        <strong>{meta.title}</strong> specializing in {meta.subtitle}.{' '}
        7+ years building high-quality web products. Based in <strong>{meta.location}</strong>.
      </p>
      <div className={styles.actions}>
        <a href="#contact" className={`${styles.btn} ${styles.primary}`}>Get in touch</a>
        <a href={meta.github} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.ghost}`}>GitHub</a>
        <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.ghost}`}>LinkedIn</a>
        <a href="/Amit_Nagar_CV.pdf" download className={`${styles.btn} ${styles.ghost}`}>Download CV</a>
      </div>
    </div>
    <div className={styles.heroPhoto}>
      <img src={profilePic} alt={meta.name} className={styles.photo} />
    </div>
  </section>
);

export default Hero;
