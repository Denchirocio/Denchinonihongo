import { Fragment } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import storyIllustration from '../assets/images/story-illustration.webp';
import { fadeInUp, fadeIn, staggerContainer, viewportOnce } from '../lib/animations';

const timelineSteps = [
  {
    emoji: '💡',
    title: 'Idea',
    description:
      'Crear una forma diferente de repasar japonés: simple, rápida, y al alcance de tu mano',
  },
  {
    emoji: '✏️',
    title: 'Diseño',
    description:
      'Creamos el diseño con mucho detalle pensando en cada cosa que deberíamos tener.',
  },
  {
    emoji: '🖥️',
    title: 'Desarrollo',
    description: 'Comenzamos el desarrollo con mucha paciencia y emoción.',
  },
  {
    emoji: '🧪',
    title: 'Testing',
    description:
      'Juntamos personas con diferentes roles para probar nuestra app y mejorarla.',
  },
  {
    emoji: '🚀',
    title: 'Lanzamiento',
    description:
      'Lanzamos Denchi no Nihongo en PlayStore para aquellas personas que quieran probarla.',
  },
];

export default function OriginStory() {
  return (
    <section className="bg-[#fbfcfd] px-6 py-12 sm:px-12 sm:py-16">
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
                <span className="font-semibold">usar demasiadas apps distintas</span>: una para
                hiragana, otra para kanji, otra para vocabulario…
              </p>
              <p>
                Entonces pensé en{' '}
                <span className="font-semibold">
                  crear un espacio simple y práctico donde cualquier persona pudiera repasar
                  japonés
                </span>{' '}
                todos los días, en un solo lugar.
              </p>
              <p>
                Y la mejor parte? <span className="font-semibold">compartirla con todos de forma gratuita.</span>
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-[#d9d9d9] bg-white p-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eaf2fd]">
                <Heart className="h-6 w-6 fill-[#4b85f4] text-[#4b85f4]" />
              </div>
              <div className="flex flex-col gap-1 text-base sm:text-lg lg:text-xl">
                <p className="text-black">Más que una aplicación, tu compañera de estudio.</p>
                <p className="font-semibold text-[#4b85f4]">¡Sigamos aprendiendo japonés juntos!</p>
              </div>
            </div>
          </motion.div>
          <motion.img
            src={storyIllustration}
            alt="Mascota de Denchi estudiando japonés"
            className="w-full max-w-md lg:max-w-lg"
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
            {timelineSteps.map((step, i) => (
              <Fragment key={step.title}>
                <motion.div
                  variants={fadeInUp}
                  className="flex items-start gap-4 lg:w-[150px] lg:flex-col lg:items-center lg:gap-4 lg:text-center"
                >
                  <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-2xl border border-[#d9d9d9] bg-white text-3xl lg:h-[72px] lg:w-[72px] lg:text-4xl">
                    {step.emoji}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-[#4b85f4] lg:text-xl">{step.title}</h3>
                    <p className="text-sm leading-6 text-black lg:text-base">{step.description}</p>
                  </div>
                </motion.div>
                {i < timelineSteps.length - 1 && (
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
