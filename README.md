# Ahmad Online Quran — Monorepo

Marketing site and future apps for **Ahmad Online Quran** ([ahmadonlinequran.com](https://ahmadonlinequran.com)) — online one-to-one Quran classes with **Hafez Mawlana Mufti Saiful Islam** (Dhaka, Bangladesh).

Single root `package.json` and hoisted `node_modules` for all apps.

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) for the web app.

## Workspaces

| Path | Description |
|------|-------------|
| `apps/web` | Next.js 15 marketing site (main) |
| `apps/server` | Placeholder for future API |
| `apps/mobile` | Placeholder for future mobile app |
| `packages/*` | Future shared code |

## Environment variables (web)

Copy `apps/web/.env.example` to `apps/web/.env` (or `.env.local`) and set:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes (production) | Canonical URL, e.g. `https://ahmadonlinequran.com` |
| `NEXT_PUBLIC_ZOOM_URL` | No | Optional Zoom room link |
| `NEXT_PUBLIC_GOOGLE_MEET_URL` | No | Optional Google Meet link |

## Site content (web)

Most public copy, contact, and links live in one place:

| What | File |
|------|------|
| Site name, teacher, phone, Facebook, location | `apps/web/src/config/site.ts` |
| Price | `apps/web/src/config/pricing.ts` |
| Schedule days | `apps/web/src/config/schedule.ts` |
| Brand images | `apps/web/public/brand/` (`logo.png`, `hero-section.png`, `teacher.png`) |

**WhatsApp:** +880 1760-427383 · **Facebook:** [facebook.com/ahmadonlinequran](https://www.facebook.com/ahmadonlinequran)

## Scripts (root)

- `pnpm dev` — start web dev server
- `pnpm build` — production build
- `pnpm start` — start production server
- `pnpm lint` — ESLint in web app
