# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is pnpm (version pinned via `packageManager`; `pnpm-workspace.yaml` sets `allowBuilds` for dependency install scripts — `sharp` and `unrs-resolver` are intentionally disabled).

- `pnpm dev` — dev server at http://localhost:4321
- `pnpm build` — static build to `dist/` (zero client JS; no server features)
- `pnpm check` — `astro check` type checking

There is no test suite and no linter.

## Architecture

Single-page personal portfolio (Astro 7, Tailwind CSS 4 via `@tailwindcss/vite`, TypeScript strict). Path alias `@/*` → `src/*`. Deployed on Vercel (`vercel.json` pins the `astro` framework preset).

- `src/pages/index.astro` composes the page: `Hero` → `About` → `Projects` → `Contact` (components live in `src/components/*.astro`).
- `src/layouts/Layout.astro` sets `<head>` metadata/Open Graph, `lang="en"`, imports global CSS (which loads self-hosted Inter via `@fontsource-variable/inter`), and the centered `max-w-6xl` container.
- Project cards are data-driven: add/edit entries in `src/constants/projects.ts` (`PROJECTS: Project[]`); `Projects.astro` renders them. Hero, About (skills list, bio) and Contact content is hard-coded in the components.
- Images live in `public/` and are referenced by plain `<img src="/x.webp">` (Astro image optimization needs `sharp`, which is disabled — optimize assets by hand, keep them small).

### Styling

Tailwind 4 is CSS-first: there is no `tailwind.config.js`. Theme tokens (`primary`, `subtle`, `muted-text`, `shadow-card*`, font) live in the `@theme` block of `src/styles/global.css`, which also holds the small `.pill` component class. Use Tailwind utilities in components; add new tokens to `@theme`.
