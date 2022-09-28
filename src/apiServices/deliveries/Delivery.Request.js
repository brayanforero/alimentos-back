import { body } from 'express-validator'
const requestDelivery = [
  body('id').notEmpty().isNumeric().optional(),
  body('code').notEmpty().isUUID().optional(),
  body('peoples').notEmpty().isNumeric().optional(),
  body('unities').isNumeric().optional(),
]

export default requestDelivery
