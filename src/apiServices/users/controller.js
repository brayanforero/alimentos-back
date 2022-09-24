import User from './models.js'

//TODO: Finish all controllers with relationships User - Member
export const getAllUsers = async (_req, res, _next) => {
  try {
    const { count, rows } = await User.findAndCountAll({
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
    const member = await Member.findOne({
      where: {
        id,
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
export const addUser = async (_req, res, _next) => {
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

export const updateUser = async (_req, res, _next) => {
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
export const deleteUser = async (_req, res, _next) => {
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
