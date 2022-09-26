import { body } from 'express-validator'
const request = [
  body('id').notEmpty().isNumeric().optional(),
  body('cedula').notEmpty().isLength({ min: 3, max: 20 }),
  body('names').notEmpty().isLength({ max: 50 }),
  body('lastnames').notEmpty().isLength({ max: 50 }),
  body('phone_number').notEmpty().isMobilePhone('es-VE'),
  body('members_of_family').isNumeric().optional(),
  body('is_worker').isBoolean().optional(),
  body('state').isBoolean().optional(),
]

export default request
