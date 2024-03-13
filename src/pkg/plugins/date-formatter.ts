export function useDateFormatter() {
  function formatDatetimeWithoutTimeZone(date: Date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    return `${year}-${formatNumber(month)}-${formatNumber(day)}T${formatNumber(
      hours
    )}:${formatNumber(minutes)}`
  }

  function formatDateWithoutTimeZone(date: Date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return `${year}-${formatNumber(month)}-${formatNumber(day)}`
  }

  function formatNumber(val: number): number | string {
    return val < 10 ? `0${val}` : val
  }

  function parseDateWithoutTimeZone(date?: string) {
    if (!date) {
      return undefined
    }

    const res = new Date(date.replace('-', '/'))
    return !isNaN(res.getDate()) ? res : undefined
  }

  return {
    formatDatetimeWithoutTimeZone,
    formatDateWithoutTimeZone,
    parseDateWithoutTimeZone
  }
}
