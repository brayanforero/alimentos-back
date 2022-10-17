import { Op } from 'sequelize'
import { NOT_FOUND, OK, SERVER_INTERNAL_ERROR } from '../../utils/http.codes.js'
import { loggerError } from '../../utils/loggers.js'
import Member from './member.model.js'

export const getAllMembers = async (_req, res, _next) => {
  try {
    const { count, rows } = await Member.findAndCountAll({
      where: {
        state: true,
      },
    })
    res.json({
      body: { count: count, values: rows },
    })
  } catch (err) {
    loggerError(err)
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}

export const getByDiMember = async (_req, res, _next) => {
  const { document_id } = _req.params

  try {
    const member = await Member.findOne({
      where: {
        cedula: document_id,
        state: true,
      },
    })
    const code = member ? OK : NOT_FOUND
    const body = member ? { values: member } : 'Member not found'
    res.status(code).json({
      status: code,
      body,
    })
  } catch (err) {
    loggerError(err)
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}

export const getLikeDiMember = async (_req, res, _next) => {
  const { q } = _req.query

  try {
    const result = await Member.findAll({
      where: {
        cedula: {
          [Op.like]: `${q}%`,
        },
        state: true,
      },
    })

    res.json({
      body: result,
    })
  } catch (err) {
    loggerError(err)
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}

export const addMember = async (_req, res, _next) => {
  const { body } = _req

  try {
    const member = await Member.create(body)
    res.status(201).json({
      status: 201,
      body: member,
    })
  } catch (err) {
    loggerError(err)
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}

export const updateMember = async (_req, res, _next) => {
  const { body } = _req
  try {
    const member = await Member.findOne({
      where: {
        id: body.id,
        state: true,
      },
    })

    if (!member)
      return res.status(400).json({ status: 400, body: 'Expected id valid' })

    await member.update(body)
    res.json({
      body: member,
    })
  } catch (err) {
    loggerError(err)
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}

export const deleteMember = async (_req, res, _next) => {
  const { id } = _req.params
  try {
    const member = await Member.findOne({
      where: {
        id,
        state: true,
      },
    })

    if (!member)
      return res.status(400).json({ status: 400, body: 'Expected id valid' })

    await member.update({ state: false })
    res.json({
      body: 'Member deleted',
    })
  } catch (err) {
    loggerError(err)
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}
