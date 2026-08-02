export function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function isPositiveNumber(value) {
  return typeof value === 'number' && isFinite(value) && value > 0
}
