import { useEffect, useState, type FC } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import styles from './ScrollToTop.module.css';

const ScrollToTop: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`${styles.btn} ${visible ? styles.show : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <FiArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;
