// ─────────────────────────────────────────────────────────────────────────
//  Enlaces de descarga (Google Drive)
//
//  Pegá en `drive` el enlace de "Compartir" de cada archivo, con acceso
//  "Cualquier persona con el enlace". Sirve el formato normal de Drive:
//    https://drive.google.com/file/d/XXXXXXXX/view?usp=sharing
//  La página lo convierte sola en un enlace de descarga directa.
//  Mientras un enlace esté vacío, su botón muestra "Próximamente".
// ─────────────────────────────────────────────────────────────────────────

export const VERSION = '1.0.0';

export const links = {
  'mac-arm64': {
    drive: 'https://drive.google.com/file/d/15pU1oSY97yFa-fkfboKvYoUc9l69F3vP/view?usp=drive_link',
    size: '127 MB' }, // DOCWeb-1.0.0-mac-arm64.dmg
  'mac-x64': {
    drive: 'https://drive.google.com/file/d/1AE2K1hCLwUBR-gEAvUfmaMUNVwb0UJ8b/view?usp=drive_link',
    size: '134 MB' }, // DOCWeb-1.0.0-mac-x64.dmg
  'win-installer': {
    drive: 'https://drive.google.com/file/d/1tDHT25ckQZVrQa9yRJ5kV7Ni1yT_UdWD/view?usp=drive_link',
    size: '114 MB' }, // DOCWeb-1.0.0-windows-instalador.exe
  'win-zip': {
    drive: 'https://drive.google.com/file/d/1mty0msvEhIW6XTI3UF_bao0-UX46fQwz/view?usp=drive_link',
    size: '144 MB' }, // DOCWeb-1.0.0-windows-x64.zip
};

// Convierte un enlace de Drive en descarga directa. Para archivos grandes
// Drive muestra un aviso de "no se pudo analizar en busca de virus";
// confirm=t lo saltea y la descarga arranca directo.
export function driveDownloadUrl(link) {
  if (!link) return null;
  const id =
    link.match(/\/file\/d\/([\w-]+)/)?.[1] ||
    link.match(/[?&]id=([\w-]+)/)?.[1];
  return id
    ? `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`
    : link;
}
