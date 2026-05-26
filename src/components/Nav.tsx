import type { FC } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import styles from './Nav.module.css';

interface Props {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

const links = ['About', 'Skills', 'Experience', 'Education', 'Contact'];
const sectionIds = ['hero', 'about', 'skills', 'experience', 'education', 'contact'];

const Nav: FC<Props> = ({ theme, onToggle }) => {
  const active = useActiveSection(sectionIds);

  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo}>
        AN<span>.</span>
      </a>
      <ul className={styles.links}>
        {links.map(l => {
          const id = l.toLowerCase();
          return (
            <li key={l}>
              <a
                href={`#${id}`}
                className={active === id ? styles.activeLink : undefined}
                aria-current={active === id ? 'true' : undefined}
              >
                {l}
              </a>
            </li>
          );
        })}
        <li>
          <button className={styles.toggle} onClick={onToggle} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
