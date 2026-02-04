import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Certifications.css';

const certifications = [
  {
    title: 'TOP Scorer — Microsoft .NET Challenge France 2024',
    issuer: 'SoftFluent',
    date: 'Sept. 2024',
    link: 'https://editx.eu/it-challenges/222',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    ),
    color: '#f59e0b',
  },
  {
    title: 'EF SET English Certificate — C1 Advanced',
    issuer: 'EF Education First',
    date: 'Score 68/100',
    link: 'https://cert.efset.org/xTRvj6',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><path d="m2 12 20 0"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    color: '#6e8cff',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Nov. 2021',
    link: 'https://www.freecodecamp.org/certification/fcc5e80601c-042d-4cbb-87a3-e080702dd745/responsive-web-design',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 8-4 4-4-4"/><path d="m16 16-4-4-4 4"/>
      </svg>
    ),
    color: '#5ce0d8',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Certifications() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="certifications" className="certifications section">
      <div className="certifications__container">
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="certifications__label">
            <span className="certifications__label-line" />
            Certifications
          </span>
          <h2 className="certifications__title">
            Reconnaissances <em>officielles</em>
          </h2>
        </motion.div>

        <div className="certifications__list">
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="cert-card"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="cert-card__icon" style={{ color: cert.color, borderColor: `${cert.color}30`, background: `${cert.color}10` }}>
        {cert.icon}
      </div>
      <div className="cert-card__content">
        <h3 className="cert-card__title">{cert.title}</h3>
        <div className="cert-card__meta">
          <span className="cert-card__issuer">{cert.issuer}</span>
          <span className="cert-card__dot">&middot;</span>
          <span className="cert-card__date">{cert.date}</span>
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card__link">Voir le certificat</a>
        </div>
      </div>
    </motion.div>
  );
}
