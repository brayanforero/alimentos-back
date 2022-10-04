import { body } from 'express-validator'

const requestAuth = [
  body('username')
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 4, max: 10 })
    .withMessage('Username should contain min 4 max 10 characters'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6, max: 10 })
    .withMessage('Password should contain min 6 max 10 characters'),
]

export default requestAuth
