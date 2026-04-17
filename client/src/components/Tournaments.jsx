import styles from './Tournaments.module.css';

const rows = [
   { year:'2025', name:'Trichirappalli District Silambam Championship',place:'Trichy, Tamil Nadu', level:'district', medal:'🥇', count:'10+',  unit:'Students Won'  },
   { year:'2024', name:'District Open Silambam Tournament',      place:'[Your District], TN',      level:'district', medal:'🥇', count:'20+',  unit:'Gold Medals'  },
  { year:'2024', name:'Tamil Nadu State Silambam Championship', place:'Chennai, Tamil Nadu',      level:'state',    medal:'🥇', count:'5+',  unit:'State Medals'   },
  
  { year:'2023', name:'Vijay Televission Takkar Fest',      place:'Chennai, Tamil Nadu',   level:'state',    medal:'🥇', count:'1',  unit:'Title Winner'        },
  { year:'2018', name:'National Silambam Federation Games',      place:'Chennai',                level:'national', medal:'🥉', count:'1',  unit:'National Medals'},
 
];

const levelLabel = { national:'National', state:'State', district:'District' };

export default function Tournaments() {
  return (
    <section className={`section ${styles.section}`} id="tournaments">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-line"/>
            <span>Achievement Record</span>
          </div>
          <h2>Tournament <em>Victories</em></h2>
        </div>

        <div className={styles.headerRow}>
          <span>Year</span><span>Tournament</span>
          <span>Level</span><span>Medal</span>
          <span className={styles.right}>Won</span>
        </div>

        <div className={styles.list}>
          {rows.map((r, i) => (
            <div className={styles.row} key={i}>
              <span className={styles.year}>{r.year}</span>
              <div className={styles.info}>
                <div className={styles.tName}>{r.name}</div>
                <div className={styles.tPlace}>{r.place}</div>
              </div>
              <span>
                <span className={`${styles.badge} ${styles[r.level]}`}>
                  {levelLabel[r.level]}
                </span>
              </span>
              <span className={styles.medal}>{r.medal}</span>
              <div className={styles.wins}>
                <div className={styles.winsNum}>{r.count}</div>
                <span className={styles.winsText}>{r.unit}</span>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.note}>✦ Our Acheivements</p>
      </div>
    </section>
  );
}
