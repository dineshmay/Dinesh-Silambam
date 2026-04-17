import { useRef, useState } from 'react';
import styles from './VideoSection.module.css';

const highlights = [
  'Advanced staff rotations (silambam kolu)',
  'Footwork patterns — meiyal and kudippu',
  'Tournament-grade attack and defence sequences',
  'Traditional performance demonstrations',
];

export default function VideoSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleOverlayClick = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      // Explicitly unmute and set volume to max to ensure sound works!
      v.muted = false;
      v.volume = 1.0;
      v.play().catch(e => console.log('Playback prevented:', e));
    }
  };

  return (
    <section className={`section section--alt ${styles.section}`} id="video">
      <div className="section-inner">
        <div className={styles.layout}>

          {/* VIDEO PLAYER */}
          <div>
            <div className={styles.wrap}>
              
              <video
                ref={videoRef}
                className={styles.video}
                src="/my video-1.mp4"   // ✅ Place video in /public folder
                preload="metadata"
                playsInline
                controls={playing} // Show native controls once it starts playing
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
              />

              {!playing && (
                <div className={styles.overlay} onClick={handleOverlayClick}>
                  <div className={styles.playBtn}>
                    <svg viewBox="0 0 24 24">
                      <polygon points="5,3 19,12 5,21"/>
                    </svg>
                  </div>
                  <span className={styles.overlayLabel}>
                    Click to Play
                  </span>
                </div>
              )}

              {/* Frame corners */}
              <span className={`${styles.corner} ${styles.tl}`}/>
              <span className={`${styles.corner} ${styles.tr}`}/>
              <span className={`${styles.corner} ${styles.bl}`}/>
              <span className={`${styles.corner} ${styles.br}`}/>
            </div>
          </div>

          {/* TEXT */}
          <div className={styles.text}>
            <div className="section-header">
              <div className="section-eyebrow">
                <span className="eyebrow-line"/>
                <span>See the Art</span>
              </div>
              <h2>Watch Me<br/><em>Perform</em></h2>
            </div>

            <p>
              This is not just a sport — it is a living tradition. Watch a demonstration of the techniques, footwork, and fluid precision that I teach to every one of my students.
            </p>

            <p>
              From the foundational vadivu stances to advanced rotational strikes, every movement carries thousands of years of Tamil martial wisdom.
            </p>

            <ul className={styles.highlights}>
              {highlights.map(h => (
                <li key={h}>
                  <span className={styles.dot}/>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}