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
      expiresIn: '1h',
    })

    const Bearer = `Bearer ${token}`

    res
      .cookie('token', Bearer, {
        httpOnly: true,
        sameSite: true,
        secure: true,
      })
      .json({
        token,
        user,
      })
  } catch (err) {
    res.status(500).json({ err })
  }
}
