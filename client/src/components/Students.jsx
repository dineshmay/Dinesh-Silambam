import styles from './Students.module.css';

const students = [
  { image: '/vidya new.jpeg', objectPosition: 'top center ', name:'Vidhyadevi M',  badge:'National Champion 2025',  text:"Started training at college, Vidhya won gold at the National Championship in just 3 years. She now represents Tamil Nadu at the national level." },
  { image: '/yugan new.jpeg', objectPosition: 'top center ', name:'Yugan S', badge:'State Champion 2025 ', text:"One of my most dedicated student. Yugan broke barriers in Mens's Silambam and secured gold at the district championship two years running." },
  { image: '/abii.jpeg', objectPosition: 'center ', name:'Abinaya M',  badge:'State Champion 2025',      text:"Zero martial arts background to State-level bronze medal in 2 years. Abi's commitment is an inspiration to every student at the academy." },
];

export default function Students() {
  return (
    <section className={`section section--alt ${styles.section}`} id="students">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-line"/>
            <span>Success Stories</span>
          </div>
          <h2>My Students <em>Speak</em></h2>
        </div>
        <div className={styles.grid}>
          {students.map(s => (
            <div className={styles.card} key={s.name}>
              <div className={styles.imageWrapper}>
                <img src={s.image} alt={s.name} className={styles.studentImage} style={{ objectPosition: s.objectPosition || 'center' }} />
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.name}>{s.name}</h4>
                <span className={styles.badge}>{s.badge}</span>
                <span className={styles.quote}>"</span>
                <p className={styles.text}>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
