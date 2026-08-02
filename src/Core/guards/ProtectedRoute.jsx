import { Navigate } from 'react-router-dom'
import { checkSession } from '../middlewares/authCheck.js'
import { ROUTES } from '../constants/routes.js'

export default function ProtectedRoute({ children }) {
  if (!checkSession()) {
    return <Navigate to={ROUTES.HOME} replace />
  }
  return children
}
