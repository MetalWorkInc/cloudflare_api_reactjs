import { Link } from 'react-router-dom'
import { ROUTES } from '../../../Core/constants/routes.js'

export default function Home() {
  return (
    <section className="page">
      <h1>Bienvenido a CloudApp</h1>
      <p>
        Aplicación React desplegada en Cloudflare Pages. Navega por las secciones
        disponibles o inicia sesión para acceder al área segura.
      </p>
      <div className="home-links">
        <Link to={ROUTES.TARJETAS} className="btn">Ver Tarjetas</Link>
        <Link to={ROUTES.POST_A} className="btn" style={{ marginLeft: '0.75rem' }}>Post A</Link>
        <Link to={ROUTES.POST_B} className="btn" style={{ marginLeft: '0.75rem' }}>Post B</Link>
      </div>
    </section>
  )
}
