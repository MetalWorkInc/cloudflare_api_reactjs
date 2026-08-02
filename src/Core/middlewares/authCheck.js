import { CONFIG } from '../constants/config.js'

export function checkSession() {
  return Boolean(sessionStorage.getItem(CONFIG.SESSION_KEY))
}

export function createSession(token = 'demo-token') {
  sessionStorage.setItem(CONFIG.SESSION_KEY, token)
}

export function destroySession() {
  sessionStorage.removeItem(CONFIG.SESSION_KEY)
}
