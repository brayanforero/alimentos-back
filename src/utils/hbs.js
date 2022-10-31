export const formatDoc = (number) => {
  const numberToExport = new Intl.NumberFormat('es-ES').format(number)
  return numberToExport
}

export const capitalize = (str) => {
  const arr = str.toLowerCase().split(' ')

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  const strFormatted = arr.join(' ')

  return strFormatted
}
