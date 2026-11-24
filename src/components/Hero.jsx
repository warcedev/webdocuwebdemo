import { ArrowRight, Download, WifiOff, ShieldCheck, Zap } from 'lucide-react';
import { allItems, VERSION } from '../data/downloads.jsx';
import { AppleLogo, WindowsLogo } from './Icons.jsx';
import AppMockup from './AppMockup.jsx';

function PrimaryCta({ device }) {
  const item = allItems.find((i) => i.id === device.recommended);
  if (item?.file.url) {
    const OsLogo = item.platform.id === 'mac' ? AppleLogo : WindowsLogo;
    return (
      <div className="hero__cta-group">
        <a href={item.file.url} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
          <OsLogo width={20} height={20} />
          <span>Descargar para {item.short}</span>
        </a>
        <p className="hero__cta-meta">
          v{VERSION} · {item.file.size} ·{' '}
          <a href="#descargas">ver otros sistemas</a>
        </p>
      </div>
    );
  }
  return (
    <div className="hero__cta-group">
      <a href="#descargas" className="btn btn--primary btn--lg">
        <Download size={20} strokeWidth={2.4} />
        <span>Descargar la demo</span>
      </a>
      <p className="hero__cta-meta">
        {device.os === 'mac'
          ? 'Elegí la versión para tu Mac: Apple Silicon o Intel'
          : 'Disponible para Mac (Apple Silicon e Intel) y Windows'}
      </p>
    </div>
  );
}

export default function Hero({ device }) {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--dark">
            <span className="eyebrow__dot" /> Demo v{VERSION} disponible para Mac y Windows
          </span>
          <h1 className="hero__title">
            Tu empresa,
            <br />
            <span className="hero__title-accent">documentada</span> y bajo control.
          </h1>
          <p className="hero__lead">
            DOCWeb reúne la documentación interna, los tickets con SLA y los casos de
            prueba en una sola plataforma. Menos información perdida, menos idas y
            vueltas, y entregas revisadas por QA antes de cerrarse.
          </p>

          <div className="hero__actions">
            <PrimaryCta device={device} />
            <a href="#modulos" className="btn btn--ghost btn--lg">
              <span>Conocer DOCWeb</span>
              <ArrowRight size={18} />
            </a>
          </div>

          <ul className="hero__pills">
            <li><WifiOff size={15} /> Funciona sin internet</li>
            <li><ShieldCheck size={15} /> Datos solo en tu equipo</li>
            <li><Zap size={15} /> Listo en 2 minutos</li>
          </ul>
        </div>

        <div className="hero__visual">
          <AppMockup />
        </div>
      </div>
    </section>
  );
}
