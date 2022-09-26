import { body } from 'express-validator'
const requestUser = [
  body('id').notEmpty().isNumeric().optional(),
  body('username').notEmpty().isLength({ min: 4, max: 20 }),
  body('password').notEmpty().isLength({ min: 6, max: 10 }),
  body('is_master').isBoolean().optional(),
  body('state').isBoolean().optional(),
]

export default requestUser
