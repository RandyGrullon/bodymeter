# Body Matter

PWA Next.js (App Router) para rutinas, entreno con temporizador de sesión, historial, calendario y medidas. Comparte **proyecto Firebase y cuenta** con [Eaty](../Eaty/).

## Desarrollo

1. En la raíz del repo: `pnpm install` (workspace con Eaty y Body Matter).
2. Copia [`.env.example`](.env.example) a `.env.local` y completa las variables (mismas claves Firebase que Eaty).
3. `pnpm dev` (puerto **3001**; Eaty suele usar 3000).

## Documentación

- [Firebase y enlaces con Eaty](docs/firebase-cross-app.md)

## Scripts

- `pnpm build` — producción  
- `pnpm test` — Vitest  
