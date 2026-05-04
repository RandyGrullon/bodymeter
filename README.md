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

## Vercel (un proyecto por app)

### Eaty

1. En Vercel: **Add New Project** → importa [RandyGrullon/Eaty](https://github.com/RandyGrullon/Eaty).
2. Rama de producción: `main` (o la que uses).
3. **Root Directory**: deja la raíz `/` (el `package.json` de Eaty está en la raíz del repo).

Subes cambios con Git **dentro de** `Eaty/`: `git push origin main`.

### Body Matter

En el repo [RandyGrullon/bodymeter](https://github.com/RandyGrullon/bodymeter) hay dos formas válidas:

**Opción A — Rama lista para Vercel (recomendada):** rama `vercel/bodymatter-root`, con la app Next en la **raíz** del árbol (sin subcarpeta).

1. Importa el mismo repo **bodymeter** en Vercel.
2. En **Settings → Git → Production Branch**, elige `vercel/bodymatter-root` (o crea un proyecto fijado a esa rama).
3. **Root Directory**: `/` (por defecto).

Para volver a publicar esa rama después de cambios en `BodyMatter/` en `main`:

```bash
git subtree split --prefix=BodyMatter -b export/bodymatter-root
git push -f origin export/bodymatter-root:vercel/bodymatter-root
```

**Opción B — Rama `main`:** conecta Vercel a `main` y en **Root Directory** pon `BodyMatter`.

Los pushes de la carpeta local `BodyMatter/` van con el flujo normal de este repo: `git add`, `commit`, `git push origin main`. Si usas la opción A, ejecuta además los dos comandos de `subtree` de arriba cuando quieras actualizar el despliegue de esa rama.
