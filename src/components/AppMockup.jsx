import { FileText, Ticket, FlaskConical, Search, Clock, CircleCheck, Bell } from 'lucide-react';

const tickets = [
  { id: 1042, title: 'Error al exportar reporte mensual', status: 'En curso', tone: 'blue', sla: '4 h', prio: 'Alta' },
  { id: 1039, title: 'Alta de usuarios área Ventas', status: 'En QA', tone: 'amber', sla: '1 día', prio: 'Media' },
  { id: 1035, title: 'Actualizar manual de onboarding', status: 'Cerrado', tone: 'green', sla: '—', prio: 'Baja' },
  { id: 1031, title: 'Lentitud en módulo de facturación', status: 'Nuevo', tone: 'slate', sla: '2 días', prio: 'Alta' },
];

export default function AppMockup() {
  return (
    <div className="mock" role="img" aria-label="Vista previa de la pantalla de tickets de DOCWeb">
      <div className="mock__window">
        <div className="mock__bar">
          <span className="mock__dots"><i /><i /><i /></span>
          <span className="mock__url">DOCWeb — Tickets</span>
          <Bell size={14} className="mock__bell" />
        </div>
        <div className="mock__body">
          <aside className="mock__side">
            <img src="/logo.png" alt="" width="26" height="26" />
            <span className="mock__nav"><FileText size={15} /> Documentación</span>
            <span className="mock__nav mock__nav--active"><Ticket size={15} /> Tickets</span>
            <span className="mock__nav"><FlaskConical size={15} /> Pruebas</span>
            <div className="mock__side-card">
              <small>SLA del mes</small>
              <strong>96%</strong>
              <div className="mock__bar-track"><div style={{ width: '96%' }} /></div>
            </div>
          </aside>
          <div className="mock__main">
            <div className="mock__toolbar">
              <span className="mock__search"><Search size={13} /> Buscar tickets…</span>
              <span className="mock__new">+ Nuevo</span>
            </div>
            <ul className="mock__list">
              {tickets.map((t) => (
                <li key={t.id}>
                  <span className="mock__id">#{t.id}</span>
                  <span className="mock__title">{t.title}</span>
                  <span className={`tag tag--${t.tone}`}>{t.status}</span>
                  <span className="mock__sla"><Clock size={12} /> {t.sla}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mock__float mock__float--qa">
        <CircleCheck size={20} />
        <div>
          <strong>QA aprobado</strong>
          <small>#1039 listo para cerrar</small>
        </div>
      </div>
      <div className="mock__float mock__float--tests">
        <div className="ring" style={{ '--p': 0.92 }}><span>12/13</span></div>
        <div>
          <strong>Suite “Facturación”</strong>
          <small>12 de 13 casos aprobados</small>
        </div>
      </div>
    </div>
  );
}
