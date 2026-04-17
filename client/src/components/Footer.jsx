import styles from './Footer.module.css';

const links = ['About','Training','Tournaments','Students','Contact'];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>⚔ LVSK Silambam Academy · [Dinesh Lakshman]</div>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}>
            <button className={styles.link} onClick={() => scrollTo(l)}>{l}</button>
          </li>
        ))}
      </ul>
      <div className={styles.copy}>© 2025 · Tamil Nadu · All Rights Reserved</div>
    </footer>
  );
}
