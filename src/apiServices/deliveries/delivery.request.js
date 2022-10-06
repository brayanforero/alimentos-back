import { checkSchema } from 'express-validator'

const requestDelivery = checkSchema({
  id: {
    in: ['params'],
    isInt: true,
    toInt: true,
    optional: true,
    errorMessage: 'ID is wrong',
  },
  code: {
    in: ['body'],
    notEmpty: true,
    isUUID: { options: '1' },
    optional: true,
    errorMessage: "Code isn't a valid UUID",
  },
  peoples: {
    in: ['body'],
    isInt: { options: { min: 0 } },
    toInt: true,
    optional: true,
    errorMessage: 'People is wrong',
  },
  unities: {
    in: ['body'],
    isInt: { options: { min: 0 } },
    toInt: true,
    optional: true,
    errorMessage: 'Unities is wrong',
  },
})

export default requestDelivery
