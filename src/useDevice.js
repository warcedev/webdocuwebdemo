import { useEffect, useState } from 'react';

// Detecta el sistema y, en Mac, si es Apple Silicon o Intel.
// arch queda en null cuando el navegador no lo deja saber (p. ej. Safari).
function archFromWebGL() {
  try {
    const gl = document.createElement('canvas').getContext('webgl');
    const ext = gl && gl.getExtension('WEBGL_debug_renderer_info');
    const r = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : '';
    if (/Apple M\d/i.test(r)) return 'arm64';
    if (/Intel|AMD|Radeon|NVIDIA/i.test(r)) return 'x64';
  } catch {
    /* sin WebGL */
  }
  return null;
}

export function useDevice() {
  const [device, setDevice] = useState({ os: null, arch: null });

  useEffect(() => {
    const ua = navigator.userAgent;
    let os = null;
    if (/iPhone|iPad|Android/i.test(ua)) os = 'mobile';
    else if (/Windows/i.test(ua)) os = 'win';
    else if (/Macintosh|Mac OS X/i.test(ua)) os = 'mac';

    if (os !== 'mac') {
      setDevice({ os, arch: os === 'win' ? 'x64' : null });
      return;
    }
    const uad = navigator.userAgentData;
    if (uad?.getHighEntropyValues) {
      uad
        .getHighEntropyValues(['architecture'])
        .then((v) =>
          setDevice({
            os,
            arch: v.architecture === 'arm' ? 'arm64' : v.architecture === 'x86' ? 'x64' : archFromWebGL(),
          }),
        )
        .catch(() => setDevice({ os, arch: archFromWebGL() }));
    } else {
      setDevice({ os, arch: archFromWebGL() });
    }
  }, []);

  let recommended = null;
  if (device.os === 'win') recommended = 'win-installer';
  else if (device.os === 'mac' && device.arch) recommended = `mac-${device.arch}`;

  return { ...device, recommended };
}
