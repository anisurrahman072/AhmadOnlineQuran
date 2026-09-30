# Ahmad Online Quran — Web

Next.js 15 marketing site for [ahmadonlinequran.com](https://ahmadonlinequran.com).

**Instructor:** Hafez Mawlana Mufti Saiful Islam · **Location:** Dhaka, Bangladesh · **WhatsApp:** +880 1760-427383

## Development

From the repo root:

```bash
pnpm install
pnpm dev
```

Or from this directory:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
pnpm start
```

## Configuration

- **`.env`** — set `NEXT_PUBLIC_SITE_URL=https://ahmadonlinequran.com` for production SEO and canonical URLs (see `.env.example`).
- **`src/config/site.ts`** — site name, teacher names (English/Bangla), location, phone, Facebook.
- **`src/config/pricing.ts`** / **`src/config/schedule.ts`** — pricing and class schedule.

Brand assets: `public/brand/` (logo, hero graphic, teacher photo).

## Stack

Next.js App Router, Tailwind CSS v4, Framer Motion, shadcn/ui components.
