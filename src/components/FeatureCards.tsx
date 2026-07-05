import { motion } from 'motion/react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

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
        {/* Card 1 */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
          className="relative w-full max-w-xs sm:w-[260px] lg:w-[320px]"
        >
          <img src="/1.png" alt="" className="w-full" loading="lazy" />
          <div className="absolute bottom-[8%] left-0 right-0 px-4 text-center">
            <h3 className="text-xl font-bold text-black lg:text-2xl">Repasa japonés</h3>
            <p className="text-xl font-bold text-[#296ef2] lg:text-2xl">de forma simple</p>
            <p className="mx-auto mt-1 text-xs leading-snug text-[#6b7280] lg:text-sm">Lecciones cortas y prácticas para aprender a tu ritmo</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
          className="relative w-full max-w-xs sm:w-[260px] lg:w-[320px]"
        >
          <img src="/2.png" alt="" className="w-full" loading="lazy" />
          <div className="absolute top-[12%] left-0 right-0 px-4 text-center">
            <h3 className="text-xl font-bold text-black lg:text-2xl">Aprende kanji</h3>
            <p className="text-xl font-bold text-[#296ef2] lg:text-2xl">paso a paso</p>
            <p className="mx-auto mt-1 text-xs leading-snug text-[#6b7280] lg:text-sm">Domina los kanji con cards, trazos y ejemplos reales</p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
          className="relative w-full max-w-xs sm:w-[260px] lg:w-[320px]"
        >
          <img src="/3.png" alt="" className="w-full" loading="lazy" />
          <div className="absolute bottom-[8%] left-0 right-0 px-4 text-center">
            <h3 className="text-xl font-bold text-black lg:text-2xl">Todo el material</h3>
            <p className="text-xl font-bold text-[#296ef2] lg:text-2xl">en un solo lugar</p>
            <p className="mx-auto mt-1 text-xs leading-snug text-[#6b7280] lg:text-sm">Práctica desde la comodidad de tu casa, con todo en tu celular.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
