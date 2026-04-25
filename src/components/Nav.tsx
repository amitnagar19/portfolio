import type { FC } from 'react';
import styles from './Nav.module.css';

interface Props {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

const links = ['About', 'Skills', 'Experience', 'Education', 'Contact'];

const Nav: FC<Props> = ({ theme, onToggle }) => (
  <nav className={styles.nav}>
    <a href="#hero" className={styles.logo}>
      AN<span>.</span>
    </a>
    <ul className={styles.links}>
      {links.map(l => (
        <li key={l}>
          <a href={`#${l.toLowerCase()}`}>{l}</a>
        </li>
      ))}
      <li>
        <button className={styles.toggle} onClick={onToggle} aria-label="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </li>
    </ul>
  </nav>
);

export default Nav;
