import { Router } from 'express'
import { addSetting, getSetting, updateSetting } from './setting.controller.js'

import catchValidatorError from '../../middlewares/catchValidatorError.js'
import requestSetting from './setting.request.js'
import { validateToken } from '../../auth/auth.middleware.js'

const router = Router()

router
  .get('/setting', validateToken, getSetting)
  .post(
    '/setting',
    validateToken,
    requestSetting,
    catchValidatorError,
    addSetting
  )
  .put(
    '/setting/:id',
    validateToken,
    requestSetting,
    catchValidatorError,
    updateSetting
  )

export default router
