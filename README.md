# Portfolio

Personal portfolio of José Antonio González Llambia, built with Astro and Tailwind CSS 4. It is exported as a static site that ships zero client-side JavaScript.

## Development

Requires [pnpm](https://pnpm.io) (version pinned in `package.json`).

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm check    # astro check (types)
pnpm build    # static output to ./dist
```

Featured projects are edited in `src/constants/projects.ts`.

## Deploy

Deployed on Vercel. `vercel.json` pins the Astro framework preset; the output directory is `dist`.
