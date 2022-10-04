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
import { validateToken } from '../../auth/auth.middleware.js'

const router = Router()

router
  .get('/users', validateToken, getAllUsers)
  .get('/users/:id', validateToken, getUserById)
  .post('/users', validateToken, requestUser, catchValidatorError, addUser)
  .put('/users', validateToken, requestUser, catchValidatorError, updateUser)
  .delete('/users/:id', validateToken, deleteUser)

export default router
