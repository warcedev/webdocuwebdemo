import { Plus } from 'lucide-react';

const faqs = [
  {
    q: '¿Necesito conexión a internet o un servidor?',
    a: 'No. La demo trae todo lo necesario adentro y funciona de forma local en tu equipo, incluso sin conexión.',
  },
  {
    q: '¿Dónde se guardan mis datos?',
    a: (
      <>
        En tu propio equipo, y no se pierden al cerrar o actualizar la app. En Mac:{' '}
        <code>~/Library/Application Support/DOCWeb</code>. En Windows:{' '}
        <code>%APPDATA%\DOCWeb</code>. Desde el menú <b>DOCWeb → Abrir carpeta de datos</b>{' '}
        podés verlos.
      </>
    ),
  },
  {
    q: '¿Cómo veo el sistema con información de ejemplo?',
    a: (
      <>
        Usá <b>DOCWeb → Cargar datos de demostración</b>. Se crean tickets, documentos y
        usuarios de ejemplo marcados con <code>[DEMO]</code> (contraseña de los usuarios demo:{' '}
        <code>Demo1234!</code>).
      </>
    ),
  },
  {
    q: '¿Puedo volver a empezar de cero?',
    a: (
      <>
        Sí: <b>DOCWeb → Restablecer todos los datos</b> deja la app como recién instalada.
      </>
    ),
  },
  {
    q: '¿Por qué mi sistema muestra un aviso de seguridad al abrirla?',
    a: 'Porque la demo no está firmada con un certificado comercial de Apple o Microsoft. Es normal y solo pasa la primera vez; en la sección de descargas tenés los pasos para abrirla.',
  },
  {
    q: '¿Funciona en una PC con Windows sobre ARM?',
    a: 'La versión de Windows es de 64 bits (x64). Windows 11 sobre ARM puede ejecutarla mediante emulación, aunque el rendimiento puede ser menor.',
  },
  {
    q: '¿Cómo se usa DOCWeb con todo mi equipo?',
    a: 'La demo es para una sola persona. Para uso compartido, DOCWeb se instala en un servidor de tu empresa con Docker en un solo paso y cada persona entra desde el navegador.',
  },
];

export default function Faq() {
  return (
    <section className="section" id="preguntas">
      <div className="container faq-layout">
        <div className="section__head" data-reveal>
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="section__title">¿Dudas antes de descargar?</h2>
          <p className="section__lead">Lo que más nos preguntan sobre la demo.</p>
        </div>
        <div className="faq" data-reveal>
          {faqs.map(({ q, a }) => (
            <details key={q}>
              <summary>
                {q}
                <Plus size={18} className="faq__icon" />
              </summary>
              <div className="faq__a">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
