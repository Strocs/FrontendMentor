export const stringListFromObjects = (data = {}, withMap = false) => {
  if (withMap) {
    return Object.values(data)
      .map(d => d.name)
      .toString()
      .replaceAll(',', ', ')
  }

  return Object.values(data)
    .toString()
    .replaceAll(',', ', ')
}
