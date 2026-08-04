import { useFetch } from '../../../Core/hooks/useFetch.js'
import { getContacts } from '../../../Apis/contacts.js'

export default function Contactos() {
  const { data, loading, error } = useFetch(() => getContacts())

  if (loading) return <p>Cargando...</p>
  if (error) return <p className="page">Error al cargar los contactos. Error: {error}</p>  

  return (
    <section className="page">
      <h1>Contactos</h1>
      <p>Directorio del equipo (área segura).</p>
      <div className="contact-list">
        {data?.map((contact) => (
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
