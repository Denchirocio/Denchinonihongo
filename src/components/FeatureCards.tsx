import type { ReactNode } from 'react';
import { BookOpen, Ear, Languages, CircleCheck } from 'lucide-react';
import card1Illustration from '../assets/images/card1-illustration.webp';
import card1Deco from '../assets/images/card1-deco.webp';
import card2Mascot from '../assets/images/card2-mascot.webp';
import card3Mascot from '../assets/images/card3-mascot.webp';
import lightningSticker from '../assets/images/lightning-sticker.webp';
import nihonKanji from '../assets/images/nihon-kanji.webp';

function FeatureCard({ children, illustrationClassName }: { children: ReactNode; illustrationClassName?: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-6 rounded-2xl bg-white p-6 sm:w-[320px] sm:p-8">
      <div className={`relative flex h-56 w-full items-center justify-center ${illustrationClassName ?? ''}`}>
        {children}
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-2xl font-medium text-black sm:text-[32px]">Repasa japonés</p>
          <p className="text-2xl font-semibold text-[#2b7fff] sm:text-[32px]">de forma simple</p>
        </div>
        <p className="text-center text-base text-[#6b7280] sm:text-xl">
          Lecciones cortas y prácticas para aprender a tu ritmo
        </p>
      </div>
    </div>
  );
}

const categories = [
  { label: 'Vocabulario', icon: BookOpen, done: false },
  { label: 'Hiragana & Katakana', icon: Languages, done: false },
  { label: 'Kanji', icon: () => <span className="text-2xl leading-none">日</span>, done: true },
  { label: 'Auditivos', icon: Ear, done: false },
];

export default function FeatureCards() {
  return (
    <section className="bg-[#f4f7fe] px-6 py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:items-stretch">
        <FeatureCard>
          <img
            src={card1Illustration}
            alt="Tarjeta de estudio con el carácter あ"
            className="h-full w-full object-contain"
          />
          <img
            src={card1Deco}
            alt=""
            className="absolute -right-2 -top-4 w-24 -rotate-[5deg] sm:-right-4 sm:w-28"
          />
          <img
            src={lightningSticker}
            alt=""
            className="absolute bottom-2 left-2 w-12 sm:w-14"
          />
        </FeatureCard>

        <FeatureCard>
          <div className="relative flex h-44 w-44 -rotate-[6deg] flex-col items-center justify-center gap-1 rounded-2xl border border-[#dbdbdb] bg-white p-4 shadow-sm">
            <span className="text-sm font-semibold text-[#2b7fff]">にほん</span>
            <img src={nihonKanji} alt="日本" className="h-16 w-auto" />
            <span className="text-sm font-semibold text-[#2b7fff]">Nihon</span>
            <span className="absolute bottom-2 right-2 text-xs text-[#6b7280]">Japón</span>
          </div>
          <img
            src={card2Mascot}
            alt=""
            className="absolute bottom-0 left-0 w-20 sm:w-24"
          />
        </FeatureCard>

        <FeatureCard illustrationClassName="!h-auto">
          <div className="flex w-full flex-col gap-2.5 py-2">
            {categories.map(({ label, icon: Icon, done }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-lg border border-[#dbdbdb] bg-white p-2.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eaf2fd]">
                  <Icon className="h-6 w-6 text-[#2375f9]" />
                </div>
                <p className="text-base font-medium text-black sm:text-xl">{label}</p>
                {done && (
                  <CircleCheck className="ml-auto h-6 w-6 shrink-0 fill-[#e4f1e9] text-[#2a6d3a]" />
                )}
              </div>
            ))}
          </div>
          <img
            src={card3Mascot}
            alt=""
            className="absolute -bottom-6 -right-4 w-24 sm:w-28"
          />
        </FeatureCard>
      </div>
    </section>
  );
}
