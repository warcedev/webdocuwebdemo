import { BookOpen, Timer, BadgeCheck, History, ArrowRightLeft, Lock } from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: 'El conocimiento deja de depender de una persona',
    text: 'Procesos, manuales e instructivos en un solo lugar, ordenados por departamento y fáciles de encontrar.',
  },
  {
    icon: Timer,
    title: 'Ningún pedido se pierde ni vence en silencio',
    text: 'Cada ticket tiene responsable, prioridad y SLA con vencimiento automático y notificaciones.',
  },
  {
    icon: BadgeCheck,
    title: 'Calidad antes de cerrar',
    text: 'Un gate de QA impide cerrar tickets sin revisión. Lo que se entrega, se probó.',
  },
  {
    icon: History,
    title: 'Trazabilidad completa',
    text: 'Historial de cambios, comentarios con menciones y cada ejecución de prueba con sus capturas.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Migrás sin empezar de cero',
    text: 'Importá tickets y su historial directamente desde Redmine (Atom/XML).',
  },
  {
    icon: Lock,
    title: 'Cada área ve lo suyo',
    text: 'Control de acceso por departamento: la información sensible queda donde corresponde.',
  },
];

export default function Benefits() {
  return (
    <section className="section" id="beneficios">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="eyebrow">En qué ayuda a tu empresa</span>
          <h2 className="section__title">
            Menos caos operativo.
            <br />
            Más equipos que saben qué hacer.
          </h2>
          <p className="section__lead">
            Cuando la documentación está en mails, los pedidos en chats y las pruebas en
            planillas, el trabajo se repite y los errores llegan a producción. DOCWeb
            ordena esas tres cosas en un mismo sistema.
          </p>
        </div>

        <div className="benefits">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <article className="benefit" key={title} data-reveal style={{ '--d': `${i * 60}ms` }}>
              <span className="benefit__icon"><Icon size={22} strokeWidth={2} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
