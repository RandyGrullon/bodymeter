# Body Matter

PWA Next.js (App Router) para rutinas, entreno con temporizador, historial, calendario y medidas corporales.

**Eaty** (nutrición) es un [repositorio y despliegue aparte](https://github.com/RandyGrullon/Eaty). Ambas apps pueden usar el **mismo proyecto Firebase** (Auth, Firestore, Storage) para una sola cuenta de usuario.

## Requisitos

- Node 20+
- [pnpm](https://pnpm.io/)

## Desarrollo local

```bash
pnpm install
cp .env.example .env.local   # mismas claves Firebase que en el proyecto Eaty
pnpm dev                      # http://localhost:3001
```

Para desarrollar Eaty y Body Matter a la vez, clona cada repo en **carpetas distintas** y ejecuta `pnpm dev` en cada una (por ejemplo puertos 3000 y 3001). No hace falta monorepo ni workspace compartido.

## Vercel y dominios

1. Crea **dos proyectos** en Vercel: uno conectado al repo de Eaty y otro al de Body Matter.
2. Asigna un **dominio** distinto a cada proyecto (por ejemplo `eaty.tudominio.com` y `gym.tudominio.com`).
3. En **Body Matter**, en Variables de entorno, define `NEXT_PUBLIC_EATY_ORIGIN` con la URL pública de Eaty (sin barra final).
4. En **Eaty**, define `NEXT_PUBLIC_BODYMATTER_ORIGIN` con la URL pública de Body Matter.
5. En Firebase Console → Authentication → Settings → **Authorized domains**, añade ambos dominios de producción además de `localhost`.

Opcional: para compartir la cookie de sesión entre subdominios del mismo dominio raíz, usa el mismo valor de `SERVER_SESSION_COOKIE_DOMAIN` en ambas apps (ver `docs/firebase-cross-app.md`).

## Documentación

- [Firebase, sesión y enlaces con Eaty](docs/firebase-cross-app.md)

## Scripts

- `pnpm build` — producción
- `pnpm dev` — desarrollo (puerto 3001)
- `pnpm test` — Vitest
