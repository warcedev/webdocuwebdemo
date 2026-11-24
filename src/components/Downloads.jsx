import { useEffect, useState } from 'react';
import { Download, Cpu, HardDrive, Monitor, HelpCircle, TriangleAlert, Copy, Check, KeyRound, Sparkles } from 'lucide-react';
import { platforms, VERSION } from '../data/downloads.jsx';
import { AppleLogo, WindowsLogo } from './Icons.jsx';

const osLogo = { mac: AppleLogo, win: WindowsLogo };

function DownloadCard({ item, recommended }) {
  const { file } = item;
  return (
    <article className={`dl-card ${recommended ? 'dl-card--rec' : ''}`}>
      {recommended && (
        <span className="dl-card__badge"><Sparkles size={13} /> Recomendado para tu equipo</span>
      )}
      <h3>{item.title}</h3>
      <div className="dl-card__chips">
        {item.chips.map((c) => <span key={c} className="chip">{c}</span>)}
      </div>
      <p className="dl-card__devices">{item.devices}</p>

      <dl className="dl-card__meta">
        <div><dt><HardDrive size={14} /> Formato</dt><dd>{item.format}</dd></div>
        <div><dt><Cpu size={14} /> Tamaño</dt><dd>{file.size}</dd></div>
      </dl>

      {file.url ? (
        <a href={file.url} target="_blank" rel="noopener noreferrer" className={`btn btn--block ${recommended ? 'btn--primary' : 'btn--light'}`}>
          <Download size={18} strokeWidth={2.4} />
          <span>Descargar</span>
        </a>
      ) : (
        <span className="btn btn--block btn--disabled">Próximamente</span>
      )}
      <code className="dl-card__file">{file.name}</code>
    </article>
  );
}

function CopyValue({ value }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    } catch {
      /* el portapapeles puede no estar disponible */
    }
  };
  return (
    <button type="button" className="copy" onClick={copy} aria-label={`Copiar ${value}`}>
      <code>{value}</code>
      {done ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

export default function Downloads({ device }) {
  const [tab, setTab] = useState('mac');
  useEffect(() => {
    if (device.os === 'win' || device.os === 'mac') setTab(device.os);
  }, [device.os]);

  const platform = platforms.find((p) => p.id === tab);

  return (
    <section className="section section--dark" id="descargas">
      <div className="section--dark__glow" aria-hidden="true" />
      <div className="container">
        <div className="section__head section__head--center" data-reveal>
          <span className="eyebrow eyebrow--dark">Descargas · versión {VERSION}</span>
          <h2 className="section__title">Elegí la versión para tu equipo</h2>
          <p className="section__lead">
            Un programa que se instala y funciona: no necesita servidor, internet, Docker
            ni base de datos. Todo viene incluido.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Sistema operativo" data-reveal>
          {platforms.map((p) => {
            const Logo = osLogo[p.id];
            return (
              <button
                key={p.id}
                role="tab"
                aria-selected={tab === p.id}
                className={`tabs__btn ${tab === p.id ? 'is-active' : ''}`}
                onClick={() => setTab(p.id)}
              >
                <Logo width={18} height={18} />
                {p.name}
              </button>
            );
          })}
        </div>

        <div className="dl-layout" key={tab}>
          <div className="dl-grid">
            {platform.items.map((item) => (
              <DownloadCard key={item.id} item={item} recommended={item.id === device.recommended} />
            ))}
          </div>

          <aside className="dl-side">
            <div className="dl-req">
              <Monitor size={18} />
              <div>
                <small>Requisitos</small>
                <strong>{platform.requirement}</strong>
                <span>Procesador de 64 bits · no requiere internet</span>
              </div>
            </div>
            <div className="dl-help">
              <HelpCircle size={18} />
              <div>
                <strong>{platform.help.title}</strong>
                <p>{platform.help.body}</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="install" key={`install-${tab}`}>
          <div className="install__steps">
            <h3>Instalación en {platform.name}</h3>
            <ol>
              {platform.steps.map((s, i) => (
                <li key={s}><span>{i + 1}</span>{s}</li>
              ))}
            </ol>
            <div className="notice">
              <TriangleAlert size={18} />
              <p>{platform.firstOpen}</p>
            </div>
          </div>

          <div className="install__login">
            <span className="install__login-icon"><KeyRound size={20} /></span>
            <h3>Ingresá a la demo</h3>
            <p>Al abrir DOCWeb, iniciá sesión con el usuario administrador:</p>
            <div className="creds">
              <span>Email</span>
              <CopyValue value="admin@docuweb.local" />
              <span>Contraseña</span>
              <CopyValue value="Admin123!" />
            </div>
            <p className="install__tip">
              Tip: en el menú <b>DOCWeb → Cargar datos de demostración</b> se crean tickets
              y documentos de ejemplo para recorrer el sistema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
