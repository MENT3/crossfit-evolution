export const formatDate = (
  value: Date | string,
  options = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  } as const
): string => {
  const date = value instanceof Date ? value : new Date(value)
  return date.toLocaleString('fr-FR', options)
}
