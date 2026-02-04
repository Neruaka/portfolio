import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const techStack = [
  'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Python',
  'C# / .NET', 'Docker', 'Git', 'APIs REST', 'MongoDB',
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="about__container">
        <motion.div
          className="about__header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="about__label">
            <span className="about__label-line" />
            A propos
          </span>
          <h2 className="about__title">
            Construire des solutions <em>qui comptent</em>
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text-col"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="about__paragraph">
              Actuellement en Master 1 Data & IA a l'IPSSI, je suis en alternance au
              Diocese de Paris ou je concois et developpe des applications web modernes
              en remplacement de systemes Access vieillissants.
            </p>
            <p className="about__paragraph">
              Mon approche : cadrer le besoin avec rigueur, architecturer proprement
              (MVC, Merise, UML), et industrialiser la livraison — tests, CI/CD, Docker,
              conformite RGPD.
            </p>
            <p className="about__paragraph">
              En parallele, j'explore l'IA appliquee avec Python : Machine Learning,
              Computer Vision, et Data Engineering. Mon objectif est de combiner mes
              competences Full-Stack avec l'intelligence des donnees.
            </p>
          </motion.div>

          <motion.div
            className="about__highlights"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about__highlight-card glass-card-about">
              <div className="about__highlight-number">4+</div>
              <div className="about__highlight-label">Annees d'experience</div>
            </div>
            <div className="about__highlight-card glass-card-about">
              <div className="about__highlight-number">8+</div>
              <div className="about__highlight-label">Projets livres</div>
            </div>
            <div className="about__highlight-card glass-card-about">
              <div className="about__highlight-number">10+</div>
              <div className="about__highlight-label">Technologies maitrisees</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about__tech"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="about__tech-title">Stack technique</span>
          <div className="about__tech-list">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                className="about__tech-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
