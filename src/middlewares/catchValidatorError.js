import { validationResult } from 'express-validator'
const errorFormatter = ({ msg, param }) => {
  return `${param}: ${msg}`
}
const catchValidatorError = (_req, res, next) => {
  const errors = validationResult(_req).formatWith(errorFormatter)
  if (errors.isEmpty()) return next()

  res.status(400).json(errors.array({ onlyFirstError: true }))
}

export default catchValidatorError
