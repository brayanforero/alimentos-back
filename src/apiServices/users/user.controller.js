import User from './user.model.js'
import Member from '../members/member.model.js'
import { hashGenerate } from '../../utils/bhash.js'
import {
  CREATED,
  NOT_FOUND,
  OK,
  SERVER_INTERNAL_ERROR,
} from '../../utils/http.codes.js'

export const getAllUsers = async (_req, res, _next) => {
  try {
    const { count, rows } = await User.findAndCountAll({
      attributes: ['id', 'username', 'is_master', 'state'],
      include: {
        model: Member,
        as: 'member',
        attributes: ['cedula', 'names', 'lastnames'],
      },
      where: {
        state: true,
      },
    })
    res.json({
      body: { count: count, values: rows },
    })
  } catch (err) {
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}
export const getUserById = async (_req, res, _next) => {
  const { id } = _req.params

  try {
    const member = await User.findOne({
      attributes: ['id', 'username', 'is_master', 'state'],
      include: {
        model: 'member',
        attributes: ['cedula', 'names', 'lastnames'],
      },
      where: {
        id,
        state: true,
      },
    })
    const code = member ? OK : NOT_FOUND
    const body = member || 'Member not found'
    res.status(code).json({
      body,
    })
  } catch (err) {
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}
export const addUser = async (_req, res, _next) => {
  const { username, password, member_id, is_master } = _req.body

  const passwordEncrypted = hashGenerate(password)
  try {
    const user = await User.create({
      username,
      password: passwordEncrypted,
      member_id,
      is_master,
    })
    res.status(CREATED).json({
      body: user,
    })
  } catch (err) {
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}

export const updateUser = async (_req, res, _next) => {
  const { body } = _req
  try {
    const user = await User.findOne({
      where: {
        id: body.id,
        state: true,
      },
    })

    if (!user) return res.status(NOT_FOUND).json({ body: 'Expected id valid' })

    const { username, password, member_id, is_master } = body
    const passwordEncrypted = hashGenerate(password)

    await user.update({
      username,
      password: passwordEncrypted,
      member_id,
      is_master,
    })
    res.json({
      body: user,
    })
  } catch (err) {
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}
export const deleteUser = async (_req, res, _next) => {
  const { id } = _req.params
  try {
    const user = await User.findOne({
      where: {
        id,
        state: true,
      },
    })

    if (!user) return res.status(NOT_FOUND).json({ body: 'Expected id valid' })

    await user.update({ state: false })
    res.json({
      body: 'User deleted',
    })
  } catch (err) {
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}
