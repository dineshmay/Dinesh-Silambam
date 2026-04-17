import { useState } from 'react';
import styles from './Contact.module.css';
import emailjs from 'emailjs-com';

const WA_NUMBER  = '919344885110';   // ← replace
const IG_HANDLE  = 'dinesshz';     // ← replace

export default function Contact() {
  const [form,    setForm]    = useState({ name:'', contact:'', message:'' });
  const [status,  setStatus]  = useState('idle'); // idle | sending | success | error
  const [errMsg,  setErrMsg]  = useState('');

  const handleChange = (e) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

 

const handleSubmit = async () => {
  const { name, contact, message } = form;

  if (!name.trim() || !contact.trim() || !message.trim()) {
    setErrMsg('Please fill in all fields.');
    setStatus('error');
    return;
  }

  setStatus('sending');
  setErrMsg('');

  try {
    await emailjs.send(
      'service_8q10ac5',   // 👈 replace
      'template_ye3trfh',  // 👈 replace
      {
        name: name,
        phone: contact,
        message: message,
      },
      'cX0CG-zN8ZaCUoC5l'    // 👈 replace
    );

    setStatus('success');
  } catch (error) {
    console.error(error);
    setErrMsg('Failed to send message.');
    setStatus('error');
  }
};

  const resetForm = () => {
    setForm({ name:'', contact:'', message:'' });
    setStatus('idle'); setErrMsg('');
  };

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className="section-inner">
        <div className={styles.wrap}>

          {/* LEFT */}
          <div className={styles.left}>
            <div className="section-eyebrow" style={{marginBottom:'0.75rem'}}>
              <span className="eyebrow-line"/>
              <span>Begin Your Journey</span>
            </div>
            <h2>Enroll or<br/><em>Connect</em></h2>
            <p className={styles.intro}>Whether you are a beginner, a competitive athlete, or want your child trained in this ancient Tamil art — I would love to hear from you.</p>

            <div className={styles.contactList}>
              <div className={styles.cItem}>
                <div className={styles.cIcon}>📍</div>
                <div><div className={styles.cLabel}>Location</div><div className={styles.cValue}>[Trichy], Tamil Nadu</div></div>
              </div>
              <a className={styles.cItem} href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener">
                <div className={styles.cIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.94a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.73.98.99-3.63-.23-.37A9.93 9.93 0 0 1 2.06 12C2.06 6.52 6.52 2.06 12 2.06S21.94 6.52 21.94 12 17.48 21.94 12 21.94zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.34z" fill="#25D366"/>
                  </svg>
                </div>
                <div><div className={styles.cLabel}>WhatsApp</div><div className={styles.cValue}>+91 9344885110</div></div>
              </a>
              <div className={styles.cItem}>
                <div className={styles.cIcon}>✉</div>
                <div><div className={styles.cLabel}>Email</div><div className={styles.cValue}>lvsksilambamschool@gmail.com</div></div>
              </div>
              <a className={styles.cItem} href={`https://instagram.com/${IG_HANDLE}`} target="_blank" rel="noopener">
                <div className={styles.cIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <defs><linearGradient id="igc" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#F9CE34"/><stop offset="40%" stopColor="#EE2A7B"/><stop offset="100%" stopColor="#4F5BD5"/></linearGradient></defs>
                    <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#igc)" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="4" stroke="url(#igc)" strokeWidth="2" fill="none"/>
                    <circle cx="17.5" cy="6.5" r="1.2" fill="url(#igc)"/>
                  </svg>
                </div>
                <div><div className={styles.cLabel}>Instagram</div><div className={styles.cValue}>@{IG_HANDLE}</div></div>
              </a>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className={styles.right}>
            <div className="section-eyebrow" style={{marginBottom:'1.5rem'}}>
              <span className="eyebrow-line"/>
              <span>Send a Message</span>
            </div>

            {status === 'success' ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✦</span>
                <p className={styles.successTitle}>Message Sent!</p>
                <p className={styles.successSub}>Thank you for reaching out. I will get back to you soon.</p>
                <button className={styles.resetBtn} onClick={resetForm}>Send Another</button>
              </div>
            ) : (
              <>
                {status === 'error' && (
                  <div className={styles.errorBox}>{errMsg}</div>
                )}
                <div className={styles.formRow}>
                  <label className={styles.label}>Your Name</label>
                  <input className={styles.input} name="name" value={form.name}
                    onChange={handleChange} placeholder="Enter your full name"/>
                </div>
                <div className={styles.formRow}>
                  <label className={styles.label}>Phone / Email</label>
                  <input className={styles.input} name="contact" value={form.contact}
                    onChange={handleChange} placeholder="How can I reach you?"/>
                </div>
                <div className={styles.formRow}>
                  <label className={styles.label}>Message</label>
                  <textarea className={styles.textarea} name="message" value={form.message}
                    onChange={handleChange} placeholder="Tell me about your interest — age, experience, goals..."/>
                </div>
                <button
                  className={styles.submit}
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message ✦'}
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
