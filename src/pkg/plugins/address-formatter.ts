export function formatAddress(address: string, length = 6) {
  return address.substr(0, length) + '...' + address.substr(address.length - length)
}
