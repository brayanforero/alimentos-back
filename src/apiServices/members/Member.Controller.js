import Member from './Member.Model.js'

export const getAllMembers = async (_req, res, _next) => {
  try {
    const { count, rows } = await Member.findAndCountAll({
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
export const getByDiMember = async (_req, res, _next) => {
  const { document_id } = _req.params

  try {
    const member = await Member.findOne({
      where: {
        cedula: document_id,
        state: true,
      },
    })
    const code = member ? 200 : 404
    const body = member ? { values: member } : 'Member not found'
    res.status(code).json({
      status: code,
      body,
    })
  } catch (err) {
    res.status(500).json(err)
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
    res.status(500).json(err)
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
    res.status(200).json({
      status: 200,
      body: member,
    })
  } catch (err) {
    res.status(500).json(err)
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
    res.status(200).json({
      status: 200,
      body: 'Member deleted',
    })
  } catch (err) {
    res.status(500).json(err)
  }
}
