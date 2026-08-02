import { CONFIG } from '../Core/constants/config.js'
import { addHeaders, handleResponseError } from '../Core/interceptors/http.interceptor.js'
import { logEvent } from '../Core/middlewares/logger.js'

export async function apiFetch(endpoint, options = {}) {
  const url = `${CONFIG.API_BASE_URL}${endpoint}`
  const requestOptions = addHeaders(options)

  logEvent('REQUEST', { url, method: requestOptions.method || 'GET' })

  const response = await fetch(url, requestOptions)

  if (!response.ok) {
    handleResponseError(response)
  }

  const data = await response.json()
  logEvent('RESPONSE', { url, status: response.status })
  return data
}
