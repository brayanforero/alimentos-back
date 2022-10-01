import { body } from 'express-validator'
const requestSetting = [
  body('id').notEmpty().isNumeric().optional(),
  body('name').notEmpty().isString().isLength({ max: 100 }),
  body('main_phone').notEmpty().isMobilePhone('es-VE'),
  body('member_id').notEmpty().isNumeric(),
  body('is_reset').isBoolean().optional(),
  body('state').isBoolean().optional(),
]

export default requestSetting
