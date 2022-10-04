import jwt from 'jsonwebtoken'
import User from '../apiServices/users/User.Model.js'
import { SECRET_KEY } from '../config/default.js'
import { hashVerify } from '../utils/bhash.js'
import { OK, SERVER_INTERNAL_ERROR, UNAUTHORIZED } from '../utils/http.codes.js'

export const validateUser = async (req, res, next) => {
  const { body } = req

  try {
    const user = await User.findOne({ where: { username: body.username } })
    if (!user) {
      return res
        .status(UNAUTHORIZED)
        .json({ body: 'Username or password wrong' })
    }
    const match = hashVerify(body.password, user.password)
    if (!match) {
      return res.status(UNAUTHORIZED).json({ body: 'Bad Credentials' })
    }

    req.user = {
      id: user.id,
      username: user.username,
      is_master: user.is_master,
      state: user.state,
    }
    next()
  } catch (err) {
    res.sendStatus(SERVER_INTERNAL_ERROR)
  }
}

export const validateToken = async (req, res, _next) => {
  const bearerToken = req.headers['authorization']
  const token = bearerToken.split(' ').at(1)

  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    next()
  } catch (err) {
    res.status(SERVER_INTERNAL_ERROR).json({ body: err })
  }
}
