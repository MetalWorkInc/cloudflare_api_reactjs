import { Link } from 'react-router-dom'
import { ROUTES } from '../../Core/constants/routes.js'

export default function NotFound() {
  return (
    <section className="page">
      <h1>404</h1>
      <p>La página que buscas no existe o fue movida.</p>
      <Link to={ROUTES.HOME} className="btn">
        Volver al inicio
      </Link>
    </section>
  )
}