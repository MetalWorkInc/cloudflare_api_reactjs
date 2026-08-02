import { useState, useCallback } from 'react'
import { checkSession, createSession, destroySession } from '../middlewares/authCheck.js'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(checkSession)

  const login = useCallback((token = 'demo-token') => {
    createSession(token)
    setIsAuthenticated(true)
  }, [])

  const logout = useCallback(() => {
    destroySession()
    setIsAuthenticated(false)
  }, [])

  return { isAuthenticated, login, logout }
}
