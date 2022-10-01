import { Router } from 'express'
import { addSetting, getSetting, updateSetting } from './Setting.Controller.js'

import catchValidatorError from '../../middlewares/catchValidatorError.js'
import requestSetting from './Setting.Request.js'

const router = Router()

router
  .get('/setting', getSetting)
  .post('/setting', requestSetting, catchValidatorError, addSetting)
  .put('/setting/:id', requestSetting, catchValidatorError, updateSetting)

export default router
