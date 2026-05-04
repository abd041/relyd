# Deel landing clone (Next.js)

Pixel-close recreation of [deel-clone-omega.vercel.app](https://deel-clone-omega.vercel.app/) using **Next.js App Router**, **Tailwind CSS v4**, and section components driven by [`src/content/landing.ts`](src/content/landing.ts).

## Prerequisites

- Node.js 20+

## Commands

```bash
cd deel-landing
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Assets

- Local: `public/assets/` (SVG icons + `general-purple.png` from Deel CDN, captured for offline use).
- Remote images allowed via `next.config.ts` for `website-media.deel.com` if you extend with more `next/image` URLs.

## Audit

See [`AUDIT.md`](AUDIT.md) for section inventory and design notes.
