import { motion } from 'motion/react';
import heroIllustration from '../assets/images/hero-illustration.webp';
import playIcon from '../assets/images/play-icon.webp';
import { PLAY_STORE_URL } from '../lib/constants';

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-10 pb-20 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:pt-16 lg:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex max-w-xl flex-col items-start gap-6 text-left lg:gap-8"
      >
        <div className="flex flex-col gap-4 lg:gap-1">
          <div className="flex flex-col font-medium text-black">
            <p className="text-4xl leading-tight sm:text-5xl lg:text-[64px] lg:leading-normal">
              Repasa japonés
            </p>
            <p className="text-4xl leading-tight sm:text-5xl lg:text-[64px] lg:leading-normal">
              de forma <span className="font-bold text-[#2375f9]">simple</span>
            </p>
          </div>
          <p className="text-lg leading-relaxed text-[#6b7280] sm:text-xl lg:text-[32px] lg:leading-[48px]">
            Hiragana, katakana, kanji y práctica real desde tu celular.
          </p>
        </div>
        <motion.a
          href={PLAY_STORE_URL}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-lg bg-[#2375f9] px-5 py-3 text-lg font-medium text-white sm:text-xl lg:text-2xl"
        >
          <img src={playIcon} alt="" className="h-6 w-6 sm:h-7 sm:w-7" />
          Quiero probar la App!
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        className="w-full max-w-md shrink-0 lg:max-w-none lg:flex-1"
      >
        <motion.img
          src={heroIllustration}
          alt="Vista previa de la app Denchi no Nihongo en un celular"
          className="mx-auto w-full max-w-sm lg:max-w-md"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
