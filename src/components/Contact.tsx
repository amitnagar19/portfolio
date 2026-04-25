import type { FC } from 'react';
import { meta } from '../data';
import { useFadeIn } from '../hooks/useFadeIn';
import SectionLabel from './SectionLabel';
import styles from './Contact.module.css';

const cards = [
  { icon: '✉️', label: 'Email', value: meta.email, href: `mailto:${meta.email}` },
  { icon: '💼', label: 'LinkedIn', value: 'amit-nagar-01921a8a', href: meta.linkedin },
  { icon: '⌨️', label: 'GitHub', value: 'amitnagar1', href: meta.github },
  { icon: '📞', label: 'Phone', value: meta.phone, href: `tel:${meta.phone.replace(/\s/g, '')}` },
];

const Contact: FC = () => {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section id="contact" ref={ref} className={`${styles.section} fade-up`}>
      <SectionLabel>Contact</SectionLabel>
      <div className={styles.grid}>
        {cards.map(({ icon, label, value, href }) => (
          <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.info}>
              <div className={styles.label}>{label}</div>
              <div className={styles.value}>{value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
