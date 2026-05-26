import type { FC, ReactNode } from 'react';
import styles from './SectionLabel.module.css';

const SectionLabel: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.label}>{children}</div>
);

export default SectionLabel;
