import { motion } from 'motion/react';
import card1 from '../assets/images/card1.webp';
import card2 from '../assets/images/card2.webp';
import card3 from '../assets/images/card3.webp';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const cards = [
  {
    src: card1,
    alt: 'Repasa japonés de forma simple: tarjeta de estudio del carácter あ con la mascota de Denchi',
  },
  {
    src: card2,
    alt: 'Aprende kanji paso a paso: tarjeta de estudio にほん / 日本 / Nihon / Japón',
  },
  {
    src: card3,
    alt: 'Todo el material en un solo lugar: vocabulario, hiragana y katakana, kanji y ejercicios auditivos',
  },
];

export default function FeatureCards() {
  return (
    <section id="funciones" className="scroll-mt-20 bg-[#f4f7fe] px-6 py-16 sm:py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto flex max-w-7xl flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center"
      >
        {cards.map((card) => (
          <motion.img
            key={card.src}
            src={card.src}
            alt={card.alt}
            loading="lazy"
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            className="w-full max-w-xs sm:w-[260px] lg:w-[320px]"
          />
        ))}
      </motion.div>
    </section>
  );
}
