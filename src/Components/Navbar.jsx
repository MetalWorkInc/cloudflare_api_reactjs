import { NavLink } from 'react-router-dom'
import { ROUTES } from '../Core/constants/routes.js'
import { useAuth } from '../Core/hooks/useAuth.js'

export default function Navbar() {
  const { isAuthenticated, login, logout } = useAuth()

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to={ROUTES.HOME} className="navbar-brand">
          ⚡ CloudApp
        </NavLink>
        <nav className="navbar-links">
          <NavLink to={ROUTES.HOME} end>Inicio</NavLink>
          <NavLink to={ROUTES.TARJETAS}>Tarjetas</NavLink>
          <NavLink to={ROUTES.POST_A}>Post A</NavLink>
          <NavLink to={ROUTES.POST_B}>Post B</NavLink>
          {isAuthenticated && (
            <>
              <NavLink to={ROUTES.DASHBOARD}>Dashboard</NavLink>
              <NavLink to={ROUTES.CONTACTOS}>Contactos</NavLink>
            </>
          )}
        </nav>
        <div className="navbar-auth">
          {isAuthenticated ? (
            <button className="btn btn-outline" onClick={logout}>
              Cerrar sesión
            </button>
          ) : (
            <button className="btn" onClick={() => login()}>
              Iniciar sesión
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
