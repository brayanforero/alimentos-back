import { Router } from 'express'
import requestMember from './member.request.js'
import catchValidatorError from '../../middlewares/catchValidatorError.js'
import {
  addMember,
  deleteMember,
  getAllMembers,
  getByDiMember,
  getLikeDiMember,
  updateMember,
} from './member.controller.js'
import { validateToken } from '../../auth/auth.middleware.js'

const router = Router()

router
  .get('/members', validateToken, getAllMembers)
  .get('/members/search', validateToken, getLikeDiMember)
  .get('/members/:document_id', validateToken, getByDiMember)
  .post(
    '/members',
    validateToken,
    requestMember,
    catchValidatorError,
    addMember
  )
  .put(
    '/members',
    validateToken,
    requestMember,
    catchValidatorError,
    updateMember
  )
  .delete('/members/:id', validateToken, deleteMember)

export default router
