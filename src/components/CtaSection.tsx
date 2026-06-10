import { CircleCheck } from 'lucide-react';
import ctaMascot from '../assets/images/cta-mascot.webp';
import playIcon from '../assets/images/play-icon.webp';
import { PLAY_STORE_URL } from '../lib/constants';

const checklist = ['Lecciones cortas', '100% en español', 'Sin publicidad invasiva', 'Todo a tu alcance'];

export default function CtaSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 rounded-[32px] bg-[#f3f6fe] px-6 py-10 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
          <img src={ctaMascot} alt="" className="w-40 sm:w-52 lg:w-64" />
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <p className="text-center text-3xl font-medium leading-snug text-black sm:text-4xl lg:text-left lg:text-[44px]">
              Tu práctica diaria de japonés{' '}
              <span className="font-bold text-[#2b7fff]">empieza hoy</span>
            </p>
            <a
              href={PLAY_STORE_URL}
              className="flex items-center gap-2 rounded-lg bg-[#2375f9] px-5 py-3 text-lg font-medium text-white transition-opacity hover:opacity-90 sm:text-xl"
            >
              <img src={playIcon} alt="" className="h-6 w-6" />
              Quiero probar la App!
            </a>
          </div>
        </div>
        <div className="flex w-full max-w-xs flex-col gap-4 rounded-lg bg-white p-4">
          {checklist.map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <CircleCheck className="h-6 w-6 shrink-0 text-[#2b7fff]" />
              <p className="text-lg text-black sm:text-xl">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
