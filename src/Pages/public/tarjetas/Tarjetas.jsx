import { useFetch } from '../../../Core/hooks/useFetch.js'
import { dataService } from '../../../Core/services/dataService.js'
import CardComponent from '../../../Components/Card.jsx'

export default function Tarjetas() {
  const { data: tarjetas, loading, error } = useFetch(dataService.getTarjetas)

  if (loading) return <p className="page">Cargando tarjetas…</p>
  if (error) return <p className="page">Error: {error}</p>

  return (
    <section className="page">
      <h1>Tarjetas</h1>
      <p>Colección de recursos y temáticas destacadas.</p>
      <div className="grid">
        {tarjetas.map((card) => (
          <CardComponent
            key={card.id}
            title={card.title}
            description={card.description}
            tag={card.tag}
          />
        ))}
      </div>
    </section>
  )
}
