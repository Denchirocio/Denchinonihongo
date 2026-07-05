import logoMark from '../assets/images/logo-mark.svg';
import { WHATSAPP_URL } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6 lg:px-12">
        <div className="flex items-end gap-2">
          <div className="flex items-end gap-1">
            <span className="font-['Fredoka'] text-xl text-black">Denchi</span>
            <img src={logoMark} alt="" className="h-[22px] w-[34px]" />
          </div>
          <p className="text-sm text-black/50">Todos los derechos reservados.</p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-black hover:underline"
        >
          ¡Hablemos!
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
      </div>
    </footer>
  );
}
