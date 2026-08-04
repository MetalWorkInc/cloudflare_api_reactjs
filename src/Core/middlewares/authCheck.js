import { environment } from '../constants/config.js'

export function checkSession() {
  return Boolean(sessionStorage.getItem(environment.SESSION_KEY))
}

export function createSession(token) {
  sessionStorage.setItem(environment.SESSION_KEY, token)
}

export function destroySession() {
  sessionStorage.removeItem(environment.SESSION_KEY)
}
