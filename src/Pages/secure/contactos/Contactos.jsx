const contacts = [
  { id: 1, name: 'Ana García', email: 'ana.garcia@example.com', role: 'Diseñadora UX' },
  { id: 2, name: 'Carlos López', email: 'carlos.lopez@example.com', role: 'Desarrollador Frontend' },
  { id: 3, name: 'María Martínez', email: 'maria.martinez@example.com', role: 'Tech Lead' },
  { id: 4, name: 'Juan Rodríguez', email: 'juan.rodriguez@example.com', role: 'DevOps Engineer' },
]

export default function Contactos() {
  return (
    <section className="page">
      <h1>Contactos</h1>
      <p>Directorio del equipo (área segura).</p>
      <div className="contact-list">
        {contacts.map((contact) => (
          <div key={contact.id} className="contact-item">
            <div className="contact-avatar">
              {contact.name.charAt(0)}
            </div>
            <div className="contact-info">
              <h3>{contact.name}</h3>
              <p>{contact.role} · {contact.email}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
