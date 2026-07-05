import { Fragment } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import storyIllustration from '../assets/images/story-illustration.webp';
import { fadeInUp, fadeIn, staggerContainer, viewportOnce } from '../lib/animations';

const stepEmojis = ['💡', '✏️', '🖥️', '🧪', '🚀'];
const steps = ['Idea', 'Diseño', 'Desarrollo', 'Testing', 'Lanzamiento'];
const stepsDesc = [
  'Crear una forma diferente de repasar japonés: simple, rápida, y al alcance de tu mano',
  'Creamos el diseño con mucho detalle pensando en cada cosa que deberíamos tener.',
  'Comenzamos el desarrollo con mucha paciencia y emoción.',
  'Juntamos personas con diferentes roles para probar nuestra app y mejorarla.',
  'Lanzamos Denchi no Nihongo en PlayStore para aquellas personas que quieran probarla.',
];

export default function OriginStory() {
  return (
    <section id="historia" className="scroll-mt-20 bg-[#fbfcfd] px-6 py-12 sm:px-12 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 sm:gap-20">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6 lg:max-w-2xl lg:gap-8"
          >
            <h2 className="flex flex-col text-center sm:text-left">
              <span className="text-4xl font-medium text-black sm:text-5xl lg:text-[64px]">
                Así nació
              </span>
              <span className="text-4xl font-semibold text-black sm:text-5xl lg:text-[64px]">
                Denchi no Nihongo
              </span>
            </h2>
            <div className="flex flex-col gap-4 text-base leading-7 text-black sm:text-lg lg:text-2xl lg:leading-8">
              <p>
                Denchi no Nihongo nació cuando noté que aprender japonés significaba{' '}
                <span className="font-semibold">usar demasiadas apps distintas</span>: una para hiragana, otra para kanji, otra para vocabulario…
              </p>
              <p>
                Entonces pensé en{' '}
                <span className="font-semibold">
                  crear un espacio simple y práctico donde cualquier persona pudiera repasar japonés
                </span>{' '}
                todos los días, en un solo lugar.
              </p>
              <p>
                Y la mejor parte? <span className="font-semibold">compartirla con todos de forma gratuita.</span>
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-[#d9d9d9] bg-white p-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eaf2fd]">
                <Heart aria-hidden="true" className="h-6 w-6 fill-[#296ef2] text-[#296ef2]" />
              </div>
              <div className="flex flex-col gap-1 text-base sm:text-lg lg:text-xl">
                <p className="text-black">Más que una aplicación, tu compañera de estudio.</p>
                <p className="font-semibold text-[#296ef2]">¡Sigamos aprendiendo japonés juntos!</p>
              </div>
            </div>
          </motion.div>
          <motion.img
            src={storyIllustration}
            alt="Mascota de Denchi estudiando japonés"
            className="w-full max-w-md lg:max-w-lg"
            loading="lazy"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-10 lg:gap-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-center text-3xl font-semibold text-black sm:text-4xl lg:text-[40px]"
          >
            Nuestro proceso
          </motion.h2>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
            {steps.map((stepTitle, i) => (
              <Fragment key={stepTitle}>
                <motion.div
                  variants={fadeInUp}
                  className="flex items-start gap-4 lg:w-[150px] lg:flex-col lg:items-center lg:gap-4 lg:text-center"
                >
                  <div
                    aria-hidden="true"
                    className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl border border-[#d9d9d9] bg-white text-3xl lg:h-[72px] lg:w-[72px] lg:text-4xl"
                  >
                    {stepEmojis[i]}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-[#296ef2] lg:text-xl">{stepTitle}</h3>
                    <p className="text-sm leading-6 text-black lg:text-base">{stepsDesc[i]}</p>
                  </div>
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:mt-9 lg:block lg:h-px lg:flex-1 lg:bg-[#d9d9d9]" />
                )}
              </Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
