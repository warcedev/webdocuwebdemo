# DOCWeb — página de descargas de la demo

Landing en React + Vite que presenta DOCWeb y ofrece los instaladores de la app
de escritorio para **Mac Apple Silicon**, **Mac Intel** y **Windows** (instalador
y portable). Detecta el sistema del visitante y le recomienda la descarga correcta.

## Desarrollo

```bash
npm install
npm run dev           # http://localhost:5173
npm run build         # genera dist/ para subir a cualquier hosting estático
```

## Enlaces de descarga (Google Drive)

Los instaladores **no** están dentro del sitio (pesan 115–145 MB cada uno); los
botones apuntan a Google Drive. Para cambiarlos editá solo
`src/data/links.js`:

1. En Drive: clic derecho en el archivo → **Compartir** → Acceso general:
   **Cualquier persona con el enlace** → **Copiar enlace**.
2. Pegá el enlace en `drive` de la versión correspondiente (y actualizá
   `size` / `VERSION` si cambió).

La página convierte el enlace de "Compartir" en descarga directa (saltea el
aviso de Drive de "no se pudo analizar en busca de virus"). Si un enlace está
vacío, ese botón muestra "Próximamente".

## Estructura

- `src/data/links.js` — **enlaces de Drive, tamaños y versión**.
- `src/data/downloads.jsx` — sistemas, equipos compatibles, pasos de instalación.
- `src/useDevice.js` — detección de Mac Apple Silicon / Intel / Windows.
- `src/components/` — secciones de la página.
- `src/styles.css` — estilos (paleta azul de DOCWeb).
- `public/logo.png`, `public/favicon.png` — logo.
# webdocuwebdemo
