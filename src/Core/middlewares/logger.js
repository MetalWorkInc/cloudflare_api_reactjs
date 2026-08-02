const isDev = import.meta.env.DEV

export function logEvent(type, payload = {}) {
  if (isDev) {
    console.log(`[${new Date().toISOString()}] [${type}]`, payload)
  }
}
