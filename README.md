# Denchi no Nihongo — Landing Page

Landing page de marketing para la app **Denchi no Nihongo**, construida a partir del diseño de Figma.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) para iconos

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Este proyecto está listo para desplegarse en [Vercel](https://vercel.com/) importando el repositorio: Vercel detecta automáticamente el framework Vite (`npm run build`, carpeta de salida `dist`).

## Pendientes

- Reemplazar `WHATSAPP_URL` en [`src/lib/constants.ts`](src/lib/constants.ts) por el link de Google Play cuando la app esté publicada.
