# Gym + Eaty (workspace local)

Esta carpeta agrupa **dos proyectos independientes**, cada uno en su propia carpeta y con su propio repositorio en GitHub.

| Carpeta | Proyecto | Repo |
|--------|----------|------|
| **`Eaty/`** | Nutrición (Next.js) | [github.com/RandyGrullon/Eaty](https://github.com/RandyGrullon/Eaty) |
| **`BodyMatter/`** | Entrenos y medidas (Next.js) | [github.com/RandyGrullon/bodymeter](https://github.com/RandyGrullon/bodymeter) |

## Desarrollo

```bash
# Eaty (suele usar el puerto 3000)
cd Eaty
pnpm install
cp .env.example .env.local   # si aplica
pnpm dev

# Body Matter (puerto 3001 por defecto en package.json)
cd BodyMatter
pnpm install
cp .env.example .env.local
pnpm dev
```

Ambas pueden usar el **mismo proyecto Firebase**; revisa `BodyMatter/docs/firebase-cross-app.md`.

## Repo Git de esta carpeta

El remoto `origin` de **esta** raíz corresponde a **bodymeter** (Body Matter). La carpeta `Eaty/` está en `.gitignore` para no mezclar el historial del otro repo: en Eaty trabaja con `git` dentro de `Eaty/`.

## Vercel

En el proyecto de Vercel de **Body Matter**, define el **Root Directory** como `BodyMatter` si el repositorio conectado es el monorepo que incluye esta estructura. Si el remoto de GitHub solo contiene el contenido de `BodyMatter/` en la raíz del repo, no hace falta.

El proyecto **Eaty** en Vercel usa la raíz del repo Eaty con normalidad.
