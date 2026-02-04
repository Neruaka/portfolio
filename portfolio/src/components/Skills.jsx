import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const skillCategories = [
  {
    title: 'Developpement Web',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Node.js / Express', level: 85 },
      { name: 'API REST / MVC', level: 85 },
      { name: 'React Native', level: 70 },
      { name: 'C# / .NET', level: 75 },
    ],
  },
  {
    title: 'Data & Bases de Donnees',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'Merise / UML', level: 80 },
      { name: 'Python (Data)', level: 70 },
      { name: 'SQL Avance', level: 85 },
      { name: 'MongoDB / NoSQL', level: 65 },
    ],
  },
  {
    title: 'DevOps & Outils',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M19 3v4"/><path d="M21 5h-4"/>
      </svg>
    ),
    skills: [
      { name: 'Docker', level: 65 },
      { name: 'Git / GitHub', level: 90 },
    ],
  },
  {
    title: 'Transversal',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    skills: [
      { name: 'Gestion de Projet', level: 80 },
      { name: 'Anglais C1', level: 85 },
      { name: 'Securite / RGPD', level: 70 },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function SkillBar({ name, level, delay, inView }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ category, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="skill-category"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="skill-category__header">
        <span className="skill-category__icon">{category.icon}</span>
        <h3 className="skill-category__title">{category.title}</h3>
      </div>
      <div className="skill-category__list">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={0.2 + i * 0.08}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="skills" className="skills section">
      <div className="skills__container">
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="skills__label">
            <span className="skills__label-line" />
            Competences
          </span>
          <h2 className="skills__title">
            Stack <em>technique</em>
          </h2>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <SkillCategory key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
