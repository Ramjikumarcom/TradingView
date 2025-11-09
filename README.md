# AXIOM Pro (Frontend)


A polished Next.js app that showcases a DeFi trading experience with:
- Full-bleed hero background video (first viewport)
- Split hero: text over video, then panels/gallery in second viewport
- Rewards, Architecture, FAQ, CTA sections
- Auth modal (Sign Up/Login) with email validation, Google/Phantom entry points
- Clean Footer

![App Screenshot](https://github.com/<your-username>/<repo-name>/raw/main/public/preview.png)

## Tech Stack
- Next.js 16 (App Router, Turbopack)
- React 18 (Client Components)
- Tailwind CSS
- Radix UI (Dialog for auth modal)

## Getting Started

### Prerequisites
- Node.js 18+ and pnpm (recommended) or npm/yarn

### Install
```bash
pnpm install
# or
npm install
```

### Development
```bash
pnpm dev
# or
npm run dev
```
App runs at http://localhost:3000

### Build & Start
```bash
pnpm build
pnpm start
# or
npm run build && npm start
```

## Project Structure
```
axiom-clone/
├─ src/
│  ├─ app/
│  │  └─ page.tsx                 # page composition and section order
│  └─ components/
│     └─ organisms/
│        ├─ BackgroundVideo.tsx   # first-viewport video wrapper (with overlay slot)
│        ├─ Header.tsx            # header with Login/Sign Up/Live Trading buttons
│        ├─ HeroText.tsx          # top-viewport hero text over video
│        ├─ Hero.tsx              # second-viewport hero (panels/gallery)
│        ├─ Rewards.tsx
│        ├─ Architecture.tsx
│        ├─ FAQ.tsx
│        ├─ CTA.tsx
│        ├─ Footer.tsx
│        └─ AuthModal.tsx         # Radix Dialog, email validation, Google/Phantom hooks
├─ public/
│  └─ hero.mp4                    # optional: local background video (see below)
└─ README.md
```

## Key Features & How To Configure

### 1) Background Video (first viewport)
- Component: `src/components/organisms/BackgroundVideo.tsx`
- By default the example uses a remote Pexels URL. For reliability and autoplay:
  1. Download your video to `public/hero.mp4`.
  2. Change the `src` inside `BackgroundVideo.tsx` to `src="/hero.mp4"`.
- The overlay content is passed as children and is top-aligned with padding.

### 2) Split Hero
- First viewport: `HeroText` is rendered inside `BackgroundVideo`.
- Second viewport: `Hero` (panels/gallery) is rendered as the next section.
- Order is defined in `src/app/page.tsx`.

### 3) Auth Modal
- Component: `src/components/organisms/AuthModal.tsx`
- Triggered from `Header.tsx` via Login/Sign Up/Live Trading.
- Modes: `signup` and `login`.
- Email input has basic live validation (frontend only).
- Buttons for Google and Phantom:
  - Google: placeholder—wire to your provider (e.g., NextAuth) in `handleGoogle()`.
  - Phantom: attempts `window.solana.connect()` if Phantom is installed; otherwise prompts install.
- Optional illustration: provide an image at `public/auth-illustration.png` and pass `illustrationSrc` from `Header.tsx` (already wired for Live Trading).

### 4) Rewards/Architecture/FAQ/CTA/Footer
- Styled with a consistent glass/gradient theme.
- Rewards width is ~80vw on desktop (see `w-[92vw] md:w-[80vw]`). Adjust to taste.

## Scripts
- `dev`: start local dev server
- `build`: create production build
- `start`: run production server

Example (pnpm):
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

## Environment & Providers
- No required env vars by default.
- For Google OAuth (NextAuth) you’ll typically need:
  - `GOOGLE_CLIENT_ID`
  - `GOOGLE_CLIENT_SECRET`
  - `NEXTAUTH_URL` and `NEXTAUTH_SECRET`
- Phantom requires the Phantom browser extension or in-app browser on mobile.

## Deployment
- Any Next.js-compatible platform (Vercel recommended).
- Ensure the video file (if local) is in `public/` so it’s served statically.

## Contributing
- Fork and open a PR. Keep components in `src/components/organisms/` tidy and cohesive.
- Prefer small, focused changes. Update this README when you add noteworthy features.

## License
This project is for demo/education. Add your preferred license if you intend to distribute.
