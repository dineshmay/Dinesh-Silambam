import styles from './Training.module.css';

const methods = [
  { num:'01', icon:'🎯', title:'Personal Assessment',   body:'Every student begins with a full assessment of their fitness, flexibility, and goals. No two training plans are the same — I build yours around you.' },
  { num:'02', icon:'🌱', title:'Foundation First',       body:'Solid stances, precise footwork, and strong body balance are built before advancing to weapon techniques. The foundation is everything.' },
  { num:'03', icon:'⚡', title:'Technique Drilling',     body:'Systematic repetition of strikes, blocks, spins and combinations using the silambam staff — adapted to each student\'s body type and strengths.' },
  { num:'04', icon:'🏆', title:'Tournament Prep',        body:'Mock competitions, rule-based sparring and mental conditioning prepare my students to not just participate — but to win.' },
  { num:'05', icon:'📜', title:'Cultural Roots',         body:'Students learn the history, tradition and cultural depth of Silambam as a Tamil martial art — connecting every technique to its heritage.' },
  { num:'06', icon:'🧘', title:'Mind & Discipline',      body:'Respect, focus and perseverance are taught alongside physical technique. My students grow in character as much as skill.' },
];

export default function Training() {
  return (
    <section className={`section section--alt ${styles.section}`} id="training">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-line"/>
            <span>My Approach</span>
          </div>
          <h2>How I <em>Train</em> You</h2>
        </div>
        <div className={styles.grid}>
          {methods.map(m => (
            <div className={styles.card} key={m.num}>
              <span className={styles.bgNum}>{m.num}</span>
              <div className={styles.icon}>{m.icon}</div>
              <h3 className={styles.title}>{m.title}</h3>
              <p className={styles.body}>{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
