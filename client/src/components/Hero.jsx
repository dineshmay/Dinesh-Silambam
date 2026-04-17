import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const stats = [
  { num: '100+', label: 'Students Trained' },
  { num: '50+',  label: 'Tournament Wins'  },
  { num: '3+',  label: 'Years Coaching'   },
  { num: 'District',label: 'Level Certified'  },
];

export default function Hero() {
  const particleRef = useRef(null);

  useEffect(() => {
    const container = particleRef.current;
    if (!container) return;
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        left:${Math.random()*100}%;
        bottom:-10px;
        width:${1+Math.random()*2.5}px;
        height:${1+Math.random()*2.5}px;
        animation-duration:${8+Math.random()*14}s;
        animation-delay:${Math.random()*12}s;
      `;
      container.appendChild(p);
    }
    return () => { container.innerHTML = ''; };
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className={styles.hero} id="home">
      <div className={styles.radial} />
      <div className={styles.particles} ref={particleRef} />

      <div className={styles.ring}>
        <svg viewBox="0 0 420 420" fill="none">
          <circle cx="210" cy="210" r="205" stroke="#C9922A" strokeWidth="0.8"/>
          <circle cx="210" cy="210" r="175" stroke="#C9922A" strokeWidth="0.4"/>
          <circle cx="210" cy="210" r="145" stroke="#C9922A" strokeWidth="0.8"/>
          <circle cx="210" cy="210" r="115" stroke="#C9922A" strokeWidth="0.4"/>
          <line x1="5"   y1="210" x2="415" y2="210" stroke="#C9922A" strokeWidth="0.4"/>
          <line x1="210" y1="5"   x2="210" y2="415" stroke="#C9922A" strokeWidth="0.4"/>
          <line x1="60"  y1="60"  x2="360" y2="360" stroke="#C9922A" strokeWidth="0.4"/>
          <line x1="360" y1="60"  x2="60"  y2="360" stroke="#C9922A" strokeWidth="0.4"/>
          <polygon points="210,20 395,115 395,305 210,400 25,305 25,115"
            stroke="#C9922A" strokeWidth="0.5" fill="none"/>
        </svg>
      </div>

      <div className={styles.inner}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}/>
            <span className={styles.eyebrowText}>Tamil Traditional Martial Art · 3000 Years of Legacy</span>
          </div>
          <h1 className={styles.h1}>
            <span className={styles.sub}>Coach</span>
            <span className={styles.name}>DINESH</span>
            <span className={styles.accent}>LAKSHMAN</span>
          </h1>
          <p className={styles.desc}>
            Carrying forward the ancient art of Silambam — training disciplined warriors
            who win on the competition floor and carry Tamil pride in their hearts.
          </p>
          <div className={styles.btns}>
            <button className="btn-fire" onClick={() => scrollTo('contact')}>Begin Training</button>
            <button className="btn-ghost" onClick={() => scrollTo('video')}>Watch Me Train ↓</button>
          </div>
        </div>

        {/* RIGHT — stat panel */}
        <div className={styles.right}>
          <div className={styles.panel}>
            <div className={styles.panelTitle}>At a Glance</div>
            <div className={styles.statsGrid}>
              {stats.map(s => (
                <div className={styles.statCard} key={s.label}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.origin}>
              Practitioner of <strong>Silambam</strong> — the ancient martial art of Tamil Nadu
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
