import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const projects = [
  {
    title: 'Refonte Gestion des Convois Funeraires',
    context: 'Alternance — Diocese de Paris',
    period: 'Janv. 2025 — Present',
    description: 'Refonte complete d\'une application Access vers une architecture web moderne avec gestion des roles et securite.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'MVC', 'Merise'],
    featured: true,
    color: '#6e8cff',
  },
  {
    title: 'Loup-Garou Mobile',
    context: 'Paris YNOV Campus',
    period: 'Fevr. 2025 — Juin 2025',
    description: 'Jeu mobile multijoueur temps reel. Role de Chef de projet : planification, GitHub issues/PR, coordination equipe.',
    tags: ['React Native', 'Supabase', 'WebSocket'],
    featured: true,
    color: '#9b7aff',
  },
  {
    title: 'PlanteFlic',
    context: 'Projet personnel',
    period: 'Mai 2025 — Juin 2025',
    description: 'Application de suivi d\'arrosage de plantes avec internationalisation FR/EN et authentification.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'i18n'],
    featured: true,
    color: '#5ce0d8',
  },
  {
    title: 'Replique Leboncoin',
    context: 'Institut F2I',
    period: 'Fevr. 2024 — Mars 2024',
    description: 'Reproduction fonctionnelle du site Leboncoin avec gestion des sessions et annonces.',
    tags: ['PHP', 'MySQLi', 'HTML/CSS'],
    color: '#f59e0b',
  },
  {
    title: 'Plateforme de QCM Multi-Niveaux',
    context: 'Institut F2I',
    period: 'Dec. 2023 — Janv. 2024',
    description: 'Systeme de quiz avec niveaux progressifs, scoring et securite.',
    tags: ['PHP', 'SQL'],
    color: '#ef4444',
  },
  {
    title: 'Calculatrice de Bureau',
    context: 'Institut F2I',
    period: 'Oct. 2023 — Nov. 2023',
    description: 'Application desktop developpee en C# avec Windows Forms, architecture POO.',
    tags: ['C#', 'Windows Forms', 'POO'],
    color: '#8b5cf6',
  },
  {
    title: 'Chat Local PHP',
    context: 'Projet personnel',
    period: 'Janv. 2022',
    description: 'Messagerie locale en temps reel avec WAMP.',
    tags: ['PHP', 'MySQL', 'WAMP'],
    color: '#10b981',
  },
  {
    title: 'Bot Discord',
    context: 'Projet personnel',
    period: 'Mars 2021 — Juil. 2021',
    description: 'Bot Discord polyvalent avec commandes personnalisees et integration d\'APIs externes.',
    tags: ['Node.js', 'Discord.js', 'APIs'],
    color: '#6366f1',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="project-card__glow"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.color}15, transparent 60%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="project-card__inner">
        <div className="project-card__header">
          <span className="project-card__period">{project.period}</span>
          <span className="project-card__context">{project.context}</span>
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="project-card__tag"
              style={{
                borderColor: isHovered ? `${project.color}40` : undefined,
                color: isHovered ? project.color : undefined,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="project-card__accent-line"
        style={{ background: project.color }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="projects section">
      <div className="projects__container">
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="projects__label">
            <span className="projects__label-line" />
            Portfolio
          </span>
          <h2 className="projects__title">
            Projets <em>selectionnes</em>
          </h2>
        </motion.div>

        <div className="projects__grid">
          <AnimatePresence>
            {visibleProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {!showAll && projects.length > 6 && (
          <motion.div
            className="projects__more"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <button className="projects__more-btn" onClick={() => setShowAll(true)}>
              Voir tous les projets
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
