import { Router } from 'express'
import {
  addDelivery,
  closeDelivery,
  getAllDelivery,
} from './Delivery.Controller.js'
import requestDelivery from './Delivery.Request.js'
import catchValidatorError from '../../middlewares/catchValidatorError.js'

const router = Router()

router
  .get('/deliveries', getAllDelivery)
  .post('/deliveries', requestDelivery, catchValidatorError, addDelivery)
  .put('/deliveries/:id', closeDelivery)

export default router
