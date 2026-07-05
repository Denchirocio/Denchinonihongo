import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const reviews = [
  { text: 'Me encanta el diseño y es una app muy intuitiva.', author: 'Memo' },
  { text: 'Se nota que está hecha con mucho amor. Es un material de apoyo increíble, 10/10.', author: 'Boris' },
  { text: 'Me sirvió muchísimo en mi último viaje a Japón, recomendada!', author: 'Agustín' },
];

function ReviewCard({ review }: { review: { text: string; author: string } }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="font-semibold text-[#296ef2]">— {review.author}</p>
        <div aria-label="5 estrellas" className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true" className="text-xl">⭐</span>
          ))}
        </div>
      </div>
      <p className="text-base leading-7 text-black sm:text-lg">"{review.text}"</p>
    </>
  );
}

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    setCurrentIndex(Math.round(scrollLeft / offsetWidth));
  };

  const goTo = (i: number) => {
    scrollRef.current?.scrollTo({ left: i * (scrollRef.current.offsetWidth), behavior: 'smooth' });
    setCurrentIndex(i);
  };

  return (
    <section id="resenas" className="scroll-mt-20 bg-[#fbfcfd] px-6 py-12 sm:px-12 sm:py-16">
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
          className="w-full max-w-xs sm:w-96"
        />

        <motion.h2
          variants={fadeInUp}
          className="text-center text-3xl font-semibold text-black sm:text-4xl lg:text-[40px]"
        >
          Usuarios reales, aprendizaje real
        </motion.h2>

        {/* Mobile: carrusel swipeable */}
        <motion.div variants={fadeInUp} className="flex w-full flex-col gap-4 sm:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="scroll-hide w-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
          >
            <div className="flex">
              {reviews.map((review) => (
                <div
                  key={review.author}
                  className="flex w-full shrink-0 snap-center flex-col gap-4 rounded-2xl border border-[#d9d9d9] bg-white p-6"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2" role="tablist" aria-label="Reseñas">
            {reviews.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Reseña ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-8 bg-[#296ef2]' : 'w-3 bg-[#c4c4c4]'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Desktop: grilla */}
        <div className="hidden w-full sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <motion.div
              key={review.author}
              variants={fadeInUp}
              whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(41, 110, 242, 0.12)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="flex flex-col gap-4 rounded-2xl border border-[#d9d9d9] bg-white p-6"
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
