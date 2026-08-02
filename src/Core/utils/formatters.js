export function formatNumber(value) {
  if (typeof value !== 'number') return String(value)
  return new Intl.NumberFormat('es-ES').format(value)
}

export function formatDate(dateString) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium' }).format(date)
}

export function truncate(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trimEnd()}…`
}

export function capitalize(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}
