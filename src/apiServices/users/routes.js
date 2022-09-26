import { Router } from 'express'
import catchValidatorError from '../../middlewares/catchValidatorError.js'
import requestUser from './User.Request.js'
import {
  addUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from './User.Controller.js'

const router = Router()

router
  .get('/users', getAllUsers)
  .get('/users/:id', getUserById)
  .post('/users', requestUser, catchValidatorError, addUser)
  .put('/users', requestUser, catchValidatorError, updateUser)
  .delete('/users/:id', deleteUser)

export default router
