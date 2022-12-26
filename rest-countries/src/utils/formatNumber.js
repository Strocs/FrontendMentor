export const formatNumber = data => {
  return Intl.NumberFormat()
    .format(data)
    .replaceAll('.', ',')
}
