import User from './User.Model.js'
import Member from '../members/Member.Model.js'
import { hash } from '../../utils/bhash.js'
export const getAllUsers = async (_req, res, _next) => {
  try {
    const { count, rows } = await User.findAndCountAll({
      attributes: ['id', 'username', 'is_master', 'state'],
      include: {
        model: Member,
        attributes: ['cedula', 'names', 'lastnames'],
      },
      where: {
        state: true,
      },
    })
    res.json({
      status: 200,
      body: { count: count, values: rows },
    })
  } catch (err) {
    res.status(500).json(err)
  }
}
export const getUserById = async (_req, res, _next) => {
  const { id } = _req.params

  try {
    const member = await User.findOne({
      attributes: ['id', 'username', 'is_master', 'state'],
      include: {
        model: Member,
        attributes: ['cedula', 'names', 'lastnames'],
      },
      where: {
        id,
        state: true,
      },
    })
    const code = member ? 200 : 404
    const body = member || 'Member not found'
    res.status(code).json({
      status: code,
      body,
    })
  } catch (err) {
    res.status(500).json(err)
  }
}
export const addUser = async (_req, res, _next) => {
  const { username, password, member_id, is_master } = _req.body

  const passwordEncrypted = await hash(password)
  try {
    const user = await User.create({
      username,
      password: passwordEncrypted,
      member_id,
      is_master,
    })
    res.status(201).json({
      status: 201,
      body: user,
    })
  } catch (err) {
    res.status(500).json(err)
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

    if (!user)
      return res.status(400).json({ status: 400, body: 'Expected id valid' })

    const { username, password, member_id, is_master } = body
    const passwordEncrypted = await hash(password)

    await user.update({
      username,
      password: passwordEncrypted,
      member_id,
      is_master,
    })
    res.status(200).json({
      status: 200,
      body: user,
    })
  } catch (err) {
    res.status(500).json(err)
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

    if (!user)
      return res.status(400).json({ status: 400, body: 'Expected id valid' })

    await user.update({ state: false })
    res.status(200).json({
      status: 200,
      body: 'User deleted',
    })
  } catch (err) {
    res.status(500).json(err)
  }
}
