import dayjs from 'dayjs'

const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

export const now = dayjs().format('DD MM YYYY')

export const getNameMonth = (number = 1) => {
  return months.at(number - 1)
}
