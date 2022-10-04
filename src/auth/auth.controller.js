import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config/default.js'
import { UNAUTHORIZED } from '../utils/http.codes.js'

export const login = (req, res) => {
  const { user } = req

  if (!user) {
    return res.status(UNAUTHORIZED).json({ body: 'No provided credentials' })
  }

  try {
    const token = jwt.sign({ user }, SECRET_KEY, {
      expiresIn: '10m',
    })

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: true,
      signed: true,
      secure: true,
    })
    res.json({
      token,
    })
  } catch (err) {
    res.status(500).json({ err })
  }
}
