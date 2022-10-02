import { checkSchema } from 'express-validator'

const requestSetting = checkSchema({
  id: {
    in: ['body'],
    isInt: true,
    toInt: true,
    optional: true,
    errorMessage: 'ID is wrong',
  },
  name: {
    in: ['body'],
    notEmpty: true,
    isString: true,
    isLength: {
      options: { max: 100 },
    },
    errorMessage: 'Name should be a string contain max 100 characters',
  },
  main_phone: {
    in: ['body'],
    notEmpty: true,
    isMobilePhone: { options: 'es-VE' },
    errorMessage:
      'Main Phone should be a valid Venezuelan phone number without blank space',
  },
  member_id: {
    in: ['body'],
    isInt: true,
    toInt: true,
    errorMessage: 'Member ID is wrong',
  },
  is_reset: {
    in: ['body'],
    isBoolean: true,
    toBoolean: true,
    optional: true,
    errorMessage: 'Reset is wrong',
  },
  state: {
    in: ['body'],
    isBoolean: true,
    toBoolean: true,
    optional: true,
    errorMessage: 'State is wrong',
  },
})

export default requestSetting
