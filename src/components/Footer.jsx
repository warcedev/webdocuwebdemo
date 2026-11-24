import { Download } from 'lucide-react';
import { Logo } from './Icons.jsx';
import { VERSION } from '../data/downloads.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta" data-reveal>
          <div>
            <h2>Probalo hoy en tu equipo.</h2>
            <p>Instalación en minutos, sin configurar nada.</p>
          </div>
          <a href="#descargas" className="btn btn--primary btn--lg">
            <Download size={20} strokeWidth={2.4} />
            <span>Descargar demo</span>
          </a>
        </div>
        <div className="footer__bottom">
          <a href="#top" className="brand brand--light">
            <Logo size={28} />
            <span>DOCWeb</span>
          </a>
          <p>Documentación, tickets y control de calidad · Demo v{VERSION}</p>
          <p>© {new Date().getFullYear()} DOCWeb</p>
        </div>
      </div>
    </footer>
  );
}
