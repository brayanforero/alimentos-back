import { body } from 'express-validator'
const requestUser = [
  body('id').notEmpty().isNumeric().optional(),
  body('username').notEmpty().isLength({ min: 4, max: 10 }),
  body('password').notEmpty().isLength({ min: 6, max: 10 }),
  body('is_master').isBoolean().optional(),
  body('member_id').isNumeric(),
  body('state').isBoolean().optional(),
]

export default requestUser
