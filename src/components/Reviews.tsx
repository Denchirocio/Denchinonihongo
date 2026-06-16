import { motion } from 'motion/react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const reviews = [
  {
    text: 'Me encanta el diseño y es una app muy intuitiva.',
    author: 'Memo',
  },
  {
    text: 'Se nota que está hecha con mucho amor. Es un material de apoyo increíble, 10/10.',
    author: 'Boris',
  },
  {
    text: 'Me sirvió muchísimo en mi último viaje a Japón, recomendada!',
    author: 'Agustín',
  },
];

export default function Reviews() {
  return (
    <section className="bg-[#fbfcfd] px-6 py-12 sm:px-12 sm:py-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto flex max-w-7xl flex-col items-center gap-10 sm:gap-12"
      >
        <motion.img
          variants={fadeInUp}
          src="/reseñas.png"
          alt="Denchi con un cartel de reseñas"
          className="w-72 sm:w-96"
        />

        <motion.h2
          variants={fadeInUp}
          className="text-center text-3xl font-semibold text-black sm:text-4xl lg:text-[40px]"
        >
          Usuarios reales, aprendizaje real
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <motion.div
              key={review.author}
              variants={fadeInUp}
              whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(41, 110, 242, 0.12)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="flex flex-col gap-4 rounded-2xl border border-[#d9d9d9] bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-[#296ef2]">— {review.author}</p>
                <div aria-label="5 estrellas" className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} aria-hidden="true" className="text-xl">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-base leading-7 text-black sm:text-lg">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
