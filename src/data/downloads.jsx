import { VERSION, links, driveDownloadUrl } from './links.js';

export { VERSION };

const file = (id, name) => {
  const url = driveDownloadUrl(links[id]?.drive);
  return { name, url, size: links[id]?.size || '—' };
};

export const platforms = [
  {
    id: 'mac',
    name: 'macOS',
    requirement: 'macOS 11 Big Sur o posterior',
    items: [
      {
        id: 'mac-arm64',
        title: 'Mac con Apple Silicon',
        short: 'Mac Apple Silicon',
        chips: ['M1', 'M2', 'M3', 'M4'],
        devices:
          'MacBook Air, MacBook Pro, iMac, Mac mini y Mac Studio con chip de Apple (desde fines de 2020).',
        format: 'Imagen de disco .dmg',
        file: file('mac-arm64', `DOCWeb-${VERSION}-mac-arm64.dmg`),
      },
      {
        id: 'mac-x64',
        title: 'Mac con procesador Intel',
        short: 'Mac Intel',
        chips: ['Core i3', 'i5', 'i7', 'i9'],
        devices: 'Mac con procesador Intel, fabricadas hasta 2020.',
        format: 'Imagen de disco .dmg',
        file: file('mac-x64', `DOCWeb-${VERSION}-mac-x64.dmg`),
      },
    ],
    help: {
      title: '¿Qué Mac tengo?',
      body: (
        <>
          Abrí el menú <b></b> → <b>Acerca de esta Mac</b>. Si dice <b>Chip Apple M…</b>,
          elegí Apple Silicon. Si dice <b>Procesador Intel</b>, elegí Intel.
        </>
      ),
    },
    steps: [
      'Abrí el archivo .dmg descargado.',
      'Arrastrá el ícono de DOCWeb a la carpeta Aplicaciones.',
      'La primera vez: clic derecho sobre DOCWeb → Abrir → Abrir.',
    ],
    firstOpen: (
      <>
        Si macOS dice que la app <b>“está dañada”</b> o no deja abrirla, andá a{' '}
        <b>Configuración del Sistema → Privacidad y seguridad</b> y tocá{' '}
        <b>“Abrir igualmente”</b>. También podés correr en la Terminal:{' '}
        <code>xattr -cr /Applications/DOCWeb.app</code>
      </>
    ),
  },
  {
    id: 'win',
    name: 'Windows',
    requirement: 'Windows 10 u 11 de 64 bits',
    items: [
      {
        id: 'win-installer',
        title: 'Instalador para Windows',
        short: 'Windows',
        chips: ['64 bits', 'x64'],
        devices:
          'PCs y notebooks con Windows 10 u 11. Crea accesos directos en el escritorio y en el menú Inicio.',
        format: 'Instalador .exe',
        file: file('win-installer', `DOCWeb-${VERSION}-windows-instalador.exe`),
      },
      {
        id: 'win-zip',
        title: 'Windows portable',
        short: 'Windows (portable)',
        chips: ['64 bits', 'Sin instalar'],
        devices:
          'Para equipos donde no tenés permisos de administrador. Se descomprime y se usa.',
        format: 'Archivo comprimido .zip',
        file: file('win-zip', `DOCWeb-${VERSION}-windows-x64.zip`),
      },
    ],
    help: {
      title: '¿Mi Windows es de 64 bits?',
      body: (
        <>
          Andá a <b>Configuración → Sistema → Información</b> y mirá{' '}
          <b>Tipo de sistema</b>. Casi todas las PCs de los últimos 10 años son de 64 bits.
        </>
      ),
    },
    steps: [
      'Ejecutá el instalador DOCWeb-…-instalador.exe.',
      'Seguí el asistente: Siguiente → Instalar.',
      'Abrí DOCWeb desde el escritorio o el menú Inicio.',
    ],
    firstOpen: (
      <>
        Si aparece <b>“Windows protegió su PC”</b>, tocá <b>Más información</b> →{' '}
        <b>Ejecutar de todas formas</b>. Pasa porque la demo no está firmada con un
        certificado comercial; solo ocurre la primera vez.
      </>
    ),
  },
];

export const allItems = platforms.flatMap((p) => p.items.map((i) => ({ ...i, platform: p })));
