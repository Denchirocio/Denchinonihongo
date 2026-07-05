import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import playIcon from '../assets/images/play-icon.webp';
import { PLAY_STORE_URL } from '../lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Funciones', href: '#funciones' },
    { label: 'Historia', href: '#historia' },
    { label: 'Reseñas', href: '#resenas' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-12">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 whitespace-nowrap text-black">
          <span lang="ja" className="text-2xl font-medium lg:text-[32px]">でんち</span>
          <span className="hidden text-base font-normal text-black/60 sm:inline">|</span>
          <span className="hidden text-base font-normal text-black/60 sm:inline">
            Energía para estudiar
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-black/70 transition-colors hover:text-[#296ef2]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-lg border border-[#176df9] px-3 py-2 text-sm font-normal text-[#176df9] transition-colors hover:bg-[#176df9]/5 sm:px-5 sm:text-base"
          >
            <img src={playIcon} alt="" className="h-5 w-5" />
            <span className="hidden md:inline">Descargar app</span>
            <span className="md:hidden">Descargar</span>
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            className="rounded-lg p-2 text-black transition-colors hover:bg-black/5 md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-[#d9d9d9] bg-white md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-base font-medium text-black/70 transition-colors hover:text-[#296ef2]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
