import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = ['Video', 'About', 'Training', 'Tournaments', 'Students', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.brand}>
        <div className={styles.emblem}>⚔</div>
        <span className={styles.logo}>Silambam Coach</span>
      </div>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}>
            <button className={styles.link} onClick={() => scrollTo(l)}>{l}</button>
          </li>
        ))}
      </ul>
      <button className={styles.cta} onClick={() => scrollTo('Contact')}>Enroll Now</button>
    </nav>
  );
}
