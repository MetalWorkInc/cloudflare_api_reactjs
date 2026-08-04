import { name , version } from '../../../package.json';

export const environment = {
  APP_NAME: name,
  APP_VERSION: version,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || '',
  USE_API: import.meta.env.VITE_USE_API === 'true',
  SESSION_KEY: import.meta.env.VITE_SESSION_KEY || '',
  X_API_VAR: import.meta.env.VITE_API_HEADER_VAR_NAME || '',
  X_API_VAR_VALUE: import.meta.env.VITE_X_API_VAR_VALUE || '',
}
