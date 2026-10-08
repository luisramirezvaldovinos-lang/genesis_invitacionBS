# Invitación de Génesis 🦄✨

Invitación digital para celebrar el Baby Shower de Génesis.

## Publicación gratuita en GitHub Pages

1. Crea un repositorio público llamado `genesis-invitation`.
2. Sube todo el contenido de este proyecto a la rama `main`.
3. En GitHub abre **Settings → Pages** y selecciona **GitHub Actions** como fuente.
4. El workflow `.github/workflows/deploy.yml` construirá y publicará la invitación automáticamente.
5. La URL quedará con este formato:
   `https://TU-USUARIO.github.io/genesis-invitation/`

## Desarrollo local

```bash
npm install
npm run dev
```

## Datos de la invitación

La información editable está centralizada en `src/config/invitation.js`.

Las fotografías, si se agregan, deben colocarse en `public/images/` y referenciarse desde la configuración como `./images/nombre.jpg`.
