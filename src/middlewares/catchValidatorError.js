import { validationResult } from 'express-validator'
const errorFormatter = ({ msg }) => {
  return `${msg}`
}
const catchValidatorError = (_req, res, next) => {
  const errors = validationResult(_req).formatWith(errorFormatter)
  if (errors.isEmpty()) return next()

  res.status(400).json({ body: errors.array({ onlyFirstError: true }) })
}

export default catchValidatorError
