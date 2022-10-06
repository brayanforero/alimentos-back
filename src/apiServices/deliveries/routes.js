import { Router } from 'express'
import {
  addDelivery,
  closeDelivery,
  getAllDelivery,
} from './delivery.controller.js'
import requestDelivery from './delivery.request.js'
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
