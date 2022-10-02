import { checkSchema } from 'express-validator'

const requestUser = checkSchema({
  id: {
    in: ['body'],
    isInt: true,
    toInt: true,
    optional: true,
    errorMessage: 'ID is wrong',
  },
  username: {
    in: ['body'],
    isLength: {
      options: { min: 4, max: 10 },
    },
    errorMessage: 'Username should contain min 3 and max 10 characters',
  },
  password: {
    in: ['body'],
    notEmpty: true,
    isLength: {
      options: { min: 6, max: 10 },
    },
    errorMessage: 'Password should contain min 6 and max 10 characters',
  },
  is_master: {
    in: ['body'],
    isBoolean: true,
    toBoolean: true,
    optional: true,
    errorMessage: 'Master is wrong',
  },
  member_id: {
    in: ['body'],
    isInt: true,
    toInt: true,
    errorMessage: 'Member ID is wrong',
  },
  state: {
    in: ['body'],
    isBoolean: true,
    toBoolean: true,
    optional: true,
    errorMessage: 'State is wrong',
  },
})

export default requestUser
