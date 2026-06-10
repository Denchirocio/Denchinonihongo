import { CircleCheck } from 'lucide-react';
import { motion } from 'motion/react';
import ctaMascot from '../assets/images/cta-mascot.webp';
import playIcon from '../assets/images/play-icon.webp';
import { WHATSAPP_URL } from '../lib/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const checklist = ['Lecciones cortas', '100% en español', 'Sin publicidad invasiva', 'Todo a tu alcance'];

export default function CtaSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-[32px] bg-[#f3f6fe] px-6 py-10 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-12"
      >
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12"
        >
          <img src={ctaMascot} alt="" className="w-56 sm:w-64" />
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <h2 className="text-center text-3xl font-medium leading-snug text-black sm:text-4xl lg:text-left lg:text-[44px]">
              Tu práctica diaria de japonés{' '}
              <span className="font-bold text-[#2b7fff]">empieza hoy</span>
            </h2>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-lg bg-[#2375f9] px-5 py-3 text-lg font-medium text-white sm:text-xl"
            >
              <img src={playIcon} alt="" className="h-6 w-6" />
              Quiero probar la App!
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex w-full max-w-xs flex-col gap-4 rounded-lg bg-white p-4"
        >
          {checklist.map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <CircleCheck className="h-6 w-6 shrink-0 text-[#2b7fff]" />
              <p className="text-lg text-black sm:text-xl">{item}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
