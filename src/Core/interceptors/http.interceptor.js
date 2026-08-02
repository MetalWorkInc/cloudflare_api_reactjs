import { logEvent } from '../middlewares/logger.js'

export function addHeaders(options = {}) {
  return {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(options.headers || {}),
    },
  }
}

export function handleResponseError(response) {
  logEvent('HTTP_ERROR', { status: response.status, url: response.url })
  throw new Error(`HTTP error ${response.status}: ${response.statusText}`)
}
