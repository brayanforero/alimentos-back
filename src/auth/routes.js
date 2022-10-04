import { Router } from 'express'
import catchValidatorError from '../middlewares/catchValidatorError.js'
import { validateToken, validateUser } from './auth.middleware.js'
import requestAuth from './auth.request.js'
import { login } from './auth.controller.js'

const router = Router()

router
  .get('/auth/check', validateToken)
  .post('/auth', requestAuth, catchValidatorError, validateUser, login)

export default router
