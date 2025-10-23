export function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function isNonEmpty(v: string) {
  return v.trim().length > 0;
}