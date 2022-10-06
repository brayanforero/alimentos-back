import { checkSchema } from 'express-validator'

const requestMember = checkSchema({
  id: {
    in: ['body'],
    isInt: true,
    toInt: true,
    optional: true,
    errorMessage: 'ID is wrong',
  },
  cedula: {
    in: ['body'],
    notEmpty: true,
    isLength: {
      options: { max: 20 },
    },
    errorMessage: 'Cedula should contain min 4 and max 20 characters',
  },
  names: {
    in: ['body'],
    notEmpty: true,
    isLength: {
      options: { max: 50 },
    },
    errorMessage: 'Names should contain max 50 characters',
  },
  lastnames: {
    in: ['body'],
    notEmpty: true,
    isLength: {
      options: { max: 50 },
    },
    errorMessage: 'Lastnames should contain max 50 characters',
  },
  phone_number: {
    in: ['body'],
    notEmpty: true,
    isMobilePhone: { options: 'es-VE' },
    errorMessage:
      'Phone should be a valid Venezuelan phone number without blank space',
  },
  members_of_family: {
    in: ['body'],
    isInt: { options: { min: 0, max: 100 } },
    toInt: true,
    optional: true,
    errorMessage: 'Members of Family  is wrong',
  },
  is_worker: {
    in: ['body'],
    isBoolean: true,
    toBoolean: true,
    optional: true,
    errorMessage: 'Worker is wrong',
  },
  state: {
    in: ['body'],
    isBoolean: true,
    toBoolean: true,
    optional: true,
    errorMessage: 'State is wrong',
  },
})

export default requestMember
