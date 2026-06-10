import { motion, useReducedMotion } from 'motion/react';
import playIcon from '../assets/images/play-icon.webp';
import heroPhone from '../assets/images/hero-phone.webp';
import sparkle1 from '../assets/images/hero-sparkle-1.webp';
import sparkle2 from '../assets/images/hero-sparkle-2.webp';
import sparkle3 from '../assets/images/hero-sparkle-3.webp';
import sparkle4 from '../assets/images/hero-sparkle-4.webp';
import sparkle5 from '../assets/images/hero-sparkle-5.webp';
import sparkle6 from '../assets/images/hero-sparkle-6.webp';
import { WHATSAPP_URL } from '../lib/constants';

const BLOB_PATH =
  'M346.937 65.8029C403.712 72.6684 453.816 95.4778 504.818 121.35C566.645 152.714 662.035 163.982 674.804 232.124C688.043 302.777 586.727 341.294 558.412 407.366C534.339 463.543 561.993 534.751 524.449 582.978C482.086 637.395 415.749 674.448 346.937 679.018C275.989 683.729 210.842 646.811 151.43 607.747C89.3463 566.927 8.38548 525.102 0.486528 451.222C-7.50404 376.486 85.1616 332.322 114.588 263.159C139.854 203.771 109.453 121.27 158.643 79.4888C207.81 37.727 282.895 58.0585 346.937 65.8029Z';

const sparkles = [
  { src: sparkle1, origin: '13% 36%', duration: 2.4, delay: 0 },
  { src: sparkle2, origin: '86% 75%', duration: 2.8, delay: 0.4 },
  { src: sparkle3, origin: '90% 25%', duration: 2.2, delay: 0.8 },
  { src: sparkle4, origin: '21% 14%', duration: 3, delay: 1.2 },
  { src: sparkle5, origin: '16% 66%', duration: 2.6, delay: 0.6 },
  { src: sparkle6, origin: '83% 47%', duration: 2.4, delay: 1.6 },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 pt-10 pb-20 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:pt-16 lg:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex max-w-xl flex-col items-center gap-6 text-left lg:items-start lg:gap-8"
      >
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:gap-1 lg:text-left">
          <h1 className="flex flex-col font-medium text-black">
            <span className="text-4xl leading-tight sm:text-5xl lg:text-[64px] lg:leading-normal">
              Repasa japonés
            </span>
            <span className="text-4xl leading-tight sm:text-5xl lg:text-[64px] lg:leading-normal">
              de forma <span className="font-bold text-[#176df9]">simple</span>
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[#6b7280] sm:text-xl lg:text-[32px] lg:leading-[48px]">
            Hiragana, katakana, kanji y práctica real desde tu celular.
          </p>
        </div>
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-lg bg-[#176df9] px-5 py-3 text-lg font-medium text-white sm:text-xl lg:text-2xl"
        >
          <img src={playIcon} alt="" className="h-6 w-6 sm:h-7 sm:w-7" />
          Quiero probar la App!
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </motion.a>
      </motion.div>

      <div className="w-full max-w-md shrink-0 lg:max-w-none lg:flex-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto aspect-[676/735] w-full max-w-md lg:max-w-lg"
        >
          <motion.svg
            viewBox="0 0 676 735"
            fill="none"
            className="absolute inset-0 h-full w-full"
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.05, 1], rotate: [0, 1.5, -1.5, 0] }}
            transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path fill="#EEF3FD" d={BLOB_PATH} />
          </motion.svg>

          {sparkles.map((sparkle) => (
            <motion.img
              key={sparkle.src}
              src={sparkle.src}
              alt=""
              className="absolute inset-0 h-full w-full"
              style={{ transformOrigin: sparkle.origin }}
              animate={shouldReduceMotion ? { opacity: 0.7, scale: 1 } : { opacity: [0.35, 1, 0.35], scale: [0.8, 1, 0.8] }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: sparkle.duration,
                      delay: sparkle.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
              }
            />
          ))}

          <motion.img
            src={heroPhone}
            alt="Vista previa de la app Denchi no Nihongo en un celular"
            className="absolute inset-0 h-full w-full"
            animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
            transition={shouldReduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
