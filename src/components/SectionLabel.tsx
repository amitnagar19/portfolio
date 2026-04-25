import type { FC } from 'react';
import styles from './SectionLabel.module.css';

const SectionLabel: FC<{ children: string }> = ({ children }) => (
  <div className={styles.label}>{children}</div>
);

export default SectionLabel;
