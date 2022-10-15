import { Router } from 'express'
import { addPay } from './payments.controller.js'

const router = Router()

router.post('/payments', addPay)

export default router
