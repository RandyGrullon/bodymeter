# Eaty y Body Matter (mismo Firebase)

## Dominios autorizados

En Firebase Console → Authentication → Settings → **Authorized domains**, añade:

- El dominio de Eaty (ej. `eaty.tudominio.com` y `localhost` para desarrollo).
- El dominio de Body Matter (ej. `bodymatter.tudominio.com` y `localhost`).

## Variables de entorno

- **Eaty**: `NEXT_PUBLIC_BODYMATTER_ORIGIN` apuntando a la URL pública de Body Matter.
- **Body Matter**: `NEXT_PUBLIC_EATY_ORIGIN` apuntando a Eaty.

En local, por defecto: Eaty `http://localhost:3000`, Body Matter `http://localhost:3001` (`pnpm dev` en cada carpeta).

## Cookie de sesión entre subdominios

Ambas apps usan la misma cookie HttpOnly `eaty_session` tras `POST /api/auth/session`.

Para que una sola sesión sirva en **dos subdominios** del mismo sitio, define en **ambas** apps (mismo valor):

`SERVER_SESSION_COOKIE_DOMAIN=.tudominio.com`

Sin esta variable, cada host guarda su propia cookie (comportamiento habitual en local con puertos distintos).

## Datos

Firestore y Storage siguen las mismas rutas por `uid` (`workouts`, `routines`, `bodyMeasurements`, `users/{uid}/gym/…`). Las reglas de seguridad no dependen del host; validan `request.auth.uid`.
