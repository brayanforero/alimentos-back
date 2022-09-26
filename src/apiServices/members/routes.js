import { Router } from 'express'
import requestMember from './Member.Request.js'
import catchValidatorError from '../../middlewares/catchValidatorError.js'
import {
  addMember,
  deleteMember,
  getAllMembers,
  getByDiMember,
  updateMember,
} from './Member.Controller.js'

const router = Router()

router
  .get('/members', getAllMembers)
  .get('/members/:document_id', getByDiMember)
  .post('/members', requestMember, catchValidatorError, addMember)
  .put('/members', requestMember, catchValidatorError, updateMember)
  .delete('/members/:id', deleteMember)

export default router
