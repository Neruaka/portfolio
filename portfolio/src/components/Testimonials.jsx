import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Sa capacite d'adaptation et son enthousiasme l'ont rendu operationnel et autonome plus rapidement que la plupart des etudiants. C'est avec beaucoup de professionnalisme qu'il a assume ses responsabilites.",
    author: 'Edouard Lemarechal',
    role: 'Professeur d\'Anglais, F2I',
  },
  {
    quote: "Frederick est doue en developpement logiciel, a de tres bonnes capacites d'abstraction, et est passionne du domaine. Je vous le recommande vivement !",
    author: 'Stephane Halimi',
    role: 'Formateur Informatique & IA',
  },
  {
    quote: "Il m'a aide a apprendre les bases de la programmation web. Un collegue serieux et motive comme on en trouve rarement !",
    author: 'Ryan PINA-SILASSE',
    role: 'Software Engineer',
  },
  {
    quote: "C'est une personne calme et tres disciplinee dans son travail. Il a su mettre a contribution ses competences pour un travail impeccable.",
    author: 'Armel Satchivi',
    role: 'CEO Polymate',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function TestimonialCard({ testimonial, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="testimonial-card"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <svg className="testimonial-card__quote-icon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/>
      </svg>

      <blockquote className="testimonial-card__text">
        {testimonial.quote}
      </blockquote>

      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar">
          {testimonial.author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="testimonial-card__name">{testimonial.author}</div>
          <div className="testimonial-card__role">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="testimonials" className="testimonials section">
      <div className="testimonials__container">
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="testimonials__label">
            <span className="testimonials__label-line" />
            Recommandations
          </span>
          <h2 className="testimonials__title">
            Ce qu'ils <em>disent</em>
          </h2>
        </motion.div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
