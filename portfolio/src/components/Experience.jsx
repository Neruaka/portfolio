import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const experiences = [
  {
    role: 'Apprenti Concepteur Developpeur d\'Applications',
    company: 'Diocese de Paris',
    period: 'Aout 2024 — Present',
    type: 'Alternance',
    description: 'Migration d\'applications internes Access / Power Apps vers une architecture web moderne.',
    details: [
      'Stack : React / Node.js / .NET/C# / PostgreSQL / SQL Server',
      'Authentification JWT et gestion des roles',
      'Analyse fonctionnelle (Merise / UML, contraintes RGPD)',
      'Power Platform : Azure AD / Teams / SharePoint, support N1/N2',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'C#', '.NET', 'JWT'],
  },
  {
    role: 'Developpeur Web',
    company: 'SDS France',
    period: 'Janv. 2024 — Fevr. 2024',
    type: 'Stage',
    description: 'Creation d\'un site vitrine complet avec CMS PHP leger.',
    details: [
      'Redaction cahier des charges et maquettes',
      'Automatisation avec scripts VBA',
      'Documentation d\'installation et transfert de competences',
    ],
    tags: ['HTML', 'SCSS', 'PHP', 'MySQL', 'VBA'],
  },
  {
    role: 'Stagiaire Developpeur Web',
    company: 'Polymate SAS',
    period: 'Mai 2022 — Juin 2022',
    type: 'Stage',
    description: 'Realisation d\'un site web de suivi de contacts.',
    details: [
      'Collaboration avec l\'equipe produit/design',
      'Stack LAMP (HTML/CSS/JS/PHP/SQL)',
      'Utilisation de Git pour la gestion de version',
    ],
    tags: ['PHP', 'SQL', 'Git', 'Responsive'],
  },
  {
    role: 'Administrateur Reseau',
    company: 'STAE',
    period: 'Juil. 2021 — Sept. 2021',
    type: 'Alternance',
    description: 'Gestion du parc informatique et administration reseau.',
    details: [
      'Mise a jour des droits Active Directory',
      'Inventaire postes/serveurs',
      'Scripts d\'automatisation Excel (VBA)',
    ],
    tags: ['Active Directory', 'Windows Server', 'VBA'],
  },
  {
    role: 'Stagiaire Developpeur Web',
    company: 'Polymate SAS',
    period: 'Mars 2019 — Mai 2019',
    type: 'Stage',
    description: 'Creation from scratch du site de la societe.',
    details: [
      'HTML5, CSS3, JavaScript',
      'Design avec Photoshop',
      'Outils : VS Code, GitHub/GitLab',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Photoshop'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function ExperienceCard({ exp, index }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="exp-card"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="exp-card__timeline">
        <div className="exp-card__dot" />
        {index < experiences.length - 1 && <div className="exp-card__line" />}
      </div>

      <div className="exp-card__content">
        <div className="exp-card__header">
          <div>
            <div className="exp-card__meta">
              <span className="exp-card__type">{exp.type}</span>
              <span className="exp-card__period">{exp.period}</span>
            </div>
            <h3 className="exp-card__role">{exp.role}</h3>
            <span className="exp-card__company">{exp.company}</span>
          </div>
        </div>

        <p className="exp-card__desc">{exp.description}</p>

        <ul className="exp-card__details">
          {exp.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>

        <div className="exp-card__tags">
          {exp.tags.map((tag) => (
            <span key={tag} className="exp-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="experience" className="experience section">
      <div className="experience__container">
        <motion.div
          ref={headerRef}
          className="experience__header"
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="experience__label">
            <span className="experience__label-line" />
            Parcours
          </span>
          <h2 className="experience__title">
            Experience <em>professionnelle</em>
          </h2>
        </motion.div>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
