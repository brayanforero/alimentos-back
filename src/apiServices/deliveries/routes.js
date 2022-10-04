import { Router } from 'express'
import {
  addDelivery,
  closeDelivery,
  getAllDelivery,
} from './Delivery.Controller.js'
import requestDelivery from './Delivery.Request.js'
import catchValidatorError from '../../middlewares/catchValidatorError.js'
import { validateToken } from '../../auth/auth.middleware.js'

const router = Router()

router
  .get('/deliveries', validateToken, getAllDelivery)
  .post(
    '/deliveries',
    validateToken,
    requestDelivery,
    catchValidatorError,
    addDelivery
  )
  .put('/deliveries/:id', validateToken, closeDelivery)

export default router
