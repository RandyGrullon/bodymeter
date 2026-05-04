# bodymeter

Repositorio de **Body Matter** (PWA de entrenos, Next.js).

La app **Eaty** (nutrición) vive en su propio repositorio: [github.com/RandyGrullon/Eaty](https://github.com/RandyGrullon/Eaty). Ambas comparten el mismo proyecto Firebase.

## Desarrollo local

```bash
cd BodyMatter
pnpm install
cp .env.example .env.local   # mismas claves Firebase que Eaty
pnpm dev                      # http://localhost:3001
```

Para trabajar con Eaty y Body Matter a la vez, clona también el repo Eaty en otra carpeta y ejecuta `pnpm dev` en cada uno (puertos 3000 y 3001).
