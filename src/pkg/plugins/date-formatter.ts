export function useDateFormatter() {
  function formatDatetimeWithoutTimeZone(date: Date) {
    return date.toLocaleString('uk', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // Use 24-hour format
    })
  }

  return {
    formatDatetimeWithoutTimeZone
  }
}
