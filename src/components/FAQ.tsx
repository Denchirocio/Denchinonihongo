import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const faqItems = [
  { q: '¿La app es gratis?', a: 'Sí, Denchi no Nihongo es 100% gratis y sin publicidad invasiva.' },
  { q: '¿Para qué nivel es?', a: 'Está pensada para principiantes y estudiantes que se preparan para rendir el JLPT N5. Si tomás clases de japonés y querés una herramienta para repasar y reforzar lo que aprendés, Denchi es perfecta para vos.' },
  { q: '¿Funciona sin internet?', a: 'Sí, podés estudiar desde cualquier lugar sin necesitar conexión.' },
  { q: '¿Está disponible para iPhone?', a: 'Por ahora solo está en Android (Play Store). ¡Pero estamos trabajando para llegar a más plataformas!' },
  { q: '¿Van a agregar más contenido?', a: 'Sí, la app está en constante desarrollo. Seguimos sumando funciones y contenido nuevo regularmente.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faqs" className="scroll-mt-20 bg-[#fbfcfd] px-6 py-12 sm:px-12 sm:py-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto flex max-w-3xl flex-col gap-10 sm:gap-12"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-center text-3xl font-semibold text-black sm:text-4xl lg:text-[40px]"
        >
          Preguntas frecuentes
        </motion.h2>

        <motion.div variants={fadeInUp} className="flex flex-col divide-y divide-[#d9d9d9]">
          {faqItems.map((faq, i) => (
            <div key={faq.q}>
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-semibold text-black sm:text-lg">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-[#296ef2]" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-base leading-7 text-black/70 sm:text-lg">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
