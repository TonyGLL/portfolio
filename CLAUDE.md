# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is pnpm (version pinned via `packageManager`; `pnpm-workspace.yaml` sets `allowBuilds` for dependency install scripts — `sharp` and `unrs-resolver` are intentionally disabled).

- `pnpm dev` — dev server (Turbopack) at http://localhost:3000
- `pnpm build` — production build; `output: "export"` in `next.config.ts` emits a fully static site to `out/` (no server features: no API routes, no server-side image optimization — `images.unoptimized` is set)
- `pnpm lint` — ESLint (native flat config using `eslint-config-next/core-web-vitals` + `/typescript`)

There is no test suite.

## Architecture

Single-page personal portfolio (Next.js 16 App Router, React 19, Tailwind CSS 4, TypeScript strict). Path alias `@/*` → `src/*`.

- `src/app/page.tsx` composes the page: `Hero` → `About` → `Projects` → `Contact` (components live in `src/app/components/`).
- `src/app/layout.tsx` sets metadata/Open Graph, `lang="en"`, loads Inter via `next/font` (exposed as `--font-inter`), and the centered `max-w-6xl` container.
- Project cards are data-driven: add/edit entries in `src/constants/projects.ts` (`PROJECTS: Project[]`); `Projects.tsx` renders them. Hero, About (skills list, bio) and Contact content is hard-coded in the components.
- Images (`public/`) are imported as modules (`import img from '../../../public/x.png'`) and rendered with `next/image`.

### Styling

Tailwind 4 is CSS-first: there is no `tailwind.config.js`. Theme tokens (`primary`, `subtle`, `muted-text`, `shadow-card*`, font) live in the `@theme` block of `src/app/globals.css`, which also holds the small `.pill` component class. Use Tailwind utilities in components; add new tokens to `@theme`.
