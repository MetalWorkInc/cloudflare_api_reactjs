export const CONFIG = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || '',
  USE_API: import.meta.env.VITE_USE_API === 'true',
  SESSION_KEY: 'app_session',
  APP_NAME: 'Cloudflare React App',
}
