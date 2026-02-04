import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const education = [
  {
    school: 'IPSSI',
    degree: 'Master 1 — Data & IA',
    period: 'Oct. 2025 — Oct. 2026',
    program: 'Python, Data/ML, Data Engineering, MLOps, Securite SI',
    current: true,
  },
  {
    school: 'Paris YNOV Campus',
    degree: 'Bachelor Informatique',
    period: 'Juil. 2024 — Oct. 2025',
    program: 'Web avance (React/Node), APIs, NoSQL/SQL, Dev mobile, Unity',
  },
  {
    school: 'Institut F2I',
    degree: 'BTS SIO Option SLAM',
    period: 'Sept. 2022 — Juin 2024',
    program: 'Developpement web & objets (C#), bases de donnees',
    badge: 'Obtenu',
  },
  {
    school: 'Universite de Poitiers',
    degree: 'Licence Mathematiques Informatique (L1)',
    period: 'Sept. 2020 — Juin 2021',
    program: 'OCaml, Python, Cygwin',
  },
  {
    school: 'Lycee Rene Descartes',
    degree: 'Bac STMG — Option SIG',
    period: '2015 — 2018',
    badge: 'Mention AB',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="education" className="education section">
      <div className="education__container">
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="education__label">
            <span className="education__label-line" />
            Formation
          </span>
          <h2 className="education__title">
            Parcours <em>academique</em>
          </h2>
        </motion.div>

        <div className="education__grid">
          {education.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ edu, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className={`edu-card ${edu.current ? 'edu-card--current' : ''}`}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {edu.current && <div className="edu-card__current-indicator" />}
      <div className="edu-card__period">{edu.period}</div>
      <h3 className="edu-card__degree">{edu.degree}</h3>
      <span className="edu-card__school">{edu.school}</span>
      {edu.program && <p className="edu-card__program">{edu.program}</p>}
      {edu.badge && <span className="edu-card__badge">{edu.badge}</span>}
    </motion.div>
  );
}
