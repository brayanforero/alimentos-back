import { Router } from 'express'
import requestMember from './request.js'
import catchValidatorError from '../../middlewares/catchValidatorError.js'
import {
  addMember,
  deleteMember,
  getAllMembers,
  getByDiMember,
  updateMember,
} from './controller.js'

const router = Router()

router
  .get('/members', getAllMembers)
  .get('/members/:document_id', getByDiMember)
  .post('/members', requestMember, catchValidatorError, addMember)
  .put('/members', requestMember, catchValidatorError, updateMember)
  .delete('/members/:id', deleteMember)

export default router
