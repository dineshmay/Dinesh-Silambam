import styles from './About.module.css';

const credentials = [
  'Certified Silambam Coach — Tamil Nadu Silambam Association',
  'District-level certified referee and competition judge',
  'Trained under Master [Logeshwaran], [Trichy]',
  'Guest instructor at [Thiakesar Alai Hr.Sec School] since [2022]',
  'Featured in [Newspaper / Vijay TV] for cultural contributions',
];

export default function About() {
  return (
    <section className={`section ${styles.section}`} id="about">
      <div className="section-inner">
        <div className={styles.grid}>

          {/* Photo */}
          <div className={styles.photoWrap}>
            <div className={styles.photoFrame}>
              <img src="/my photo-1.jpeg" alt="My Photo" className={styles.photo} />
              <span className={`${styles.fc} ${styles.tl}`}/>
              <span className={`${styles.fc} ${styles.br}`}/>
              <div className={styles.badge}>
                <span className={styles.badgeNum}>3+</span>
                <span className={styles.badgeLabel}>Years<br/>Coaching</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={styles.text}>
            <div className="section-header" style={{marginBottom:'2rem'}}>
              <div className="section-eyebrow">
                <span className="eyebrow-line"/>
                <span>The Coach</span>
              </div>
              <h2>My Story &<br/><em>My Mission</em></h2>
            </div>
            <p>Born and raised in Tamil Nadu, I have devoted my life to mastering and teaching Silambam — the ancient art of staff fighting practised for over 3,000 years in Tamil culture.</p>
            <p>Under my Guru's guidance, I trained rigorously for many years before earning my certification and founding my own academy. Today I coach students from beginners to national-level competitors — each with a personalised training plan.</p>
            <p>My mission is to preserve the cultural heritage of this art form and pass it on to the next generation with discipline, authenticity, and pride.</p>

            <div className={styles.creds}>
              <div className={styles.credTitle}>
                Credentials
                <span className={styles.credLine}/>
              </div>
              <ul className={styles.credList}>
                {credentials.map(c => (
                  <li key={c}>
                    <span className={styles.mark}>◆</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
