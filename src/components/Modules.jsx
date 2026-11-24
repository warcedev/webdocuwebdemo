import { FileText, Ticket, FlaskConical, Check, Image, Paperclip, FileDown, X } from 'lucide-react';

function DocsVisual() {
  return (
    <div className="mv mv--docs">
      <div className="mv-doc">
        <div className="mv-doc__head">
          <FileText size={16} />
          <strong>Procedimiento de alta de clientes</strong>
        </div>
        <div className="mv-doc__tags">
          <span className="tag tag--blue">Comercial</span>
          <span className="tag tag--green">Procesos</span>
          <span className="tag tag--slate">v3</span>
        </div>
        <div className="mv-lines"><i /><i /><i style={{ width: '70%' }} /></div>
        <div className="mv-doc__img"><Image size={18} /> diagrama-flujo.png</div>
        <div className="mv-lines"><i /><i style={{ width: '55%' }} /></div>
        <div className="mv-doc__att"><Paperclip size={13} /> contrato-modelo.pdf</div>
      </div>
      <div className="mv-doc mv-doc--back" />
    </div>
  );
}

function TicketsVisual() {
  const states = ['Nuevo', 'En curso', 'En QA', 'Cerrado'];
  return (
    <div className="mv mv--tickets">
      <div className="mv-flow">
        {states.map((s, i) => (
          <div key={s} className={`mv-flow__step ${i <= 2 ? 'is-done' : ''} ${i === 2 ? 'is-current' : ''}`}>
            <span className="mv-flow__dot">{i < 2 ? <Check size={12} strokeWidth={3} /> : i + 1}</span>
            <small>{s}</small>
          </div>
        ))}
      </div>
      <div className="mv-ticket">
        <div className="mv-ticket__row">
          <span className="mock__id">#1039</span>
          <span className="tag tag--amber">En QA</span>
          <span className="tag tag--red">Severidad alta</span>
        </div>
        <strong>Alta de usuarios área Ventas</strong>
        <div className="mv-sla">
          <div className="mv-sla__label"><span>SLA</span><span>vence en 1 día</span></div>
          <div className="mv-sla__track"><div /></div>
        </div>
        <div className="mv-comment">
          <span className="avatar">LP</span>
          <p><b>@marcos</b> ya lo probé en staging, queda tu OK de QA 👍</p>
        </div>
      </div>
    </div>
  );
}

function TestsVisual() {
  const cases = [
    ['Login con usuario válido', true],
    ['Generar factura A', true],
    ['Anular factura emitida', false],
    ['Exportar libro IVA', true],
  ];
  return (
    <div className="mv mv--tests">
      <div className="mv-run">
        <div className="mv-run__head">
          <div>
            <small>Ejecución #24 · Suite Facturación</small>
            <strong>3 de 4 pasaron</strong>
          </div>
          <span className="mv-run__pdf"><FileDown size={14} /> PDF</span>
        </div>
        <ul>
          {cases.map(([c, ok]) => (
            <li key={c}>
              <span className={`mv-run__icon ${ok ? 'ok' : 'ko'}`}>
                {ok ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
              </span>
              {c}
              {!ok && <span className="mv-run__shot"><Image size={12} /> captura</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const modules = [
  {
    icon: FileText,
    color: 'blue',
    kicker: 'Documentación',
    title: 'Todo lo que tu equipo necesita saber, en un solo lugar',
    text: 'Un repositorio vivo de procesos, manuales e instructivos con editor de texto enriquecido.',
    features: [
      'Editor con formato, imágenes y archivos adjuntos',
      'Clasificación por tags y por departamento',
      'Cada usuario ve solo la documentación de su área',
    ],
    Visual: DocsVisual,
  },
  {
    icon: Ticket,
    color: 'orange',
    kicker: 'Tickets',
    title: 'Pedidos con dueño, prioridad y fecha de vencimiento',
    text: 'Un flujo de trabajo claro, al estilo Redmine, pensado para que nada quede en el aire.',
    features: [
      'Estados, prioridad, severidad y SLA con vencimiento automático',
      'Gate de QA obligatorio antes de cerrar',
      'Comentarios con menciones, adjuntos y notificaciones',
      'Importación directa desde Redmine y reportes',
    ],
    Visual: TicketsVisual,
  },
  {
    icon: FlaskConical,
    color: 'green',
    kicker: 'Casos de prueba',
    title: 'Pruebas organizadas, con evidencia y listas para presentar',
    text: 'Prepará, ejecutá y documentá tus pruebas sin planillas sueltas.',
    features: [
      'Suites y sub-suites con pasos y resultado esperado',
      'Vinculables a tickets propios o de Redmine',
      'Historial permanente de ejecuciones con capturas',
      'Export a PDF con portada, índice y resultados',
    ],
    Visual: TestsVisual,
  },
];

export default function Modules() {
  return (
    <section className="section section--tint" id="modulos">
      <div className="container">
        <div className="section__head section__head--center" data-reveal>
          <span className="eyebrow">Tres módulos, una plataforma</span>
          <h2 className="section__title">Lo que incluye DOCWeb</h2>
        </div>

        <div className="modules">
          {modules.map(({ icon: Icon, color, kicker, title, text, features, Visual }, i) => (
            <article className={`module ${i % 2 ? 'module--flip' : ''}`} key={kicker}>
              <div className="module__copy" data-reveal>
                <span className={`module__kicker module__kicker--${color}`}>
                  <Icon size={16} strokeWidth={2.4} /> {kicker}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul className="checklist">
                  {features.map((f) => (
                    <li key={f}><Check size={16} strokeWidth={3} /> {f}</li>
                  ))}
                </ul>
              </div>
              <div className={`module__visual module__visual--${color}`} data-reveal style={{ '--d': '120ms' }}>
                <Visual />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
