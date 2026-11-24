import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { Logo } from './Icons.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="brand" aria-label="DOCWeb, inicio">
          <Logo size={34} />
          <span>DOCWeb</span>
        </a>
        <nav className="nav__links" aria-label="Secciones">
          <a href="#beneficios">Beneficios</a>
          <a href="#modulos">Módulos</a>
          <a href="#descargas">Descargas</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <a href="#descargas" className="btn btn--primary btn--sm">
          <Download size={16} strokeWidth={2.4} />
          <span>Descargar demo</span>
        </a>
      </div>
    </header>
  );
}
