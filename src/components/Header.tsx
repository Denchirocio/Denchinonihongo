import playIcon from '../assets/images/play-icon.webp';
import { PLAY_STORE_URL } from '../lib/constants';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-12">
        <div className="flex items-center gap-2 whitespace-nowrap text-black">
          <span className="text-2xl font-medium lg:text-[32px]">でんち</span>
          <span className="hidden text-base font-normal text-black/60 sm:inline">|</span>
          <span className="hidden text-base font-normal text-black/60 sm:inline">
            Energía para estudiar
          </span>
        </div>
        <a
          href={PLAY_STORE_URL}
          className="flex shrink-0 items-center gap-2 rounded-lg border border-[#2375f9] px-3 py-2 text-sm font-normal text-[#2375f9] transition-colors hover:bg-[#2375f9]/5 sm:px-5 sm:text-lg"
        >
          <img src={playIcon} alt="" className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="hidden md:inline">Descargar Denchi no Nihongo</span>
          <span className="md:hidden">Descargar</span>
        </a>
      </div>
    </header>
  );
}
