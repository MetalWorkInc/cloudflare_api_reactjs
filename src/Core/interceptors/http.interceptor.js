import { logEvent } from '../middlewares/logger.js'
import { environment } from '../constants/config.js'
import { CONTENT_TYPE_JSON, HEADER_CONTENT_TYPE } from '../../lib/utils.js'

export function addHeaders(options = {}) {
  return {
    ...options,
    headers: {
      [HEADER_CONTENT_TYPE]: CONTENT_TYPE_JSON,
      [environment.X_API_VAR]: environment.X_API_VAR_VALUE,
      Accept: CONTENT_TYPE_JSON,
      ...(options.headers || {}),
    },
  }
}

export function handleResponseError(response) {
  logEvent('HTTP_ERROR', { status: response.status, url: response.url })
  throw new Error(`HTTP error ${response.status}: ${response.statusText}`)
}
