import {
  BAD_REQUEST,
  CREATED,
  NOT_FOUND,
  SERVER_INTERNAL_ERROR,
} from '../../utils/http.codes.js'

import Setting from './setting.model.js'

export const getSetting = async (_req, res) => {
  try {
    const setting = await Setting.findOne({
      where: { state: true },
      include: 'master',
    })

    res.json({ body: setting })
  } catch (err) {
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}

export const addSetting = async (_req, res) => {
  const { body } = _req
  try {
    const count = await Setting.count({ where: { state: true } })

    if (count > 0)
      return res.status(BAD_REQUEST).json({ body: 'Exists a configuration' })

    const settingCreated = await Setting.create(body)
    res.status(CREATED).json({ body: settingCreated })
  } catch (err) {
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}

export const updateSetting = async (_req, res) => {
  const { id } = _req.params
  const { body } = _req
  try {
    const setting = await Setting.findByPk(id)

    if (!setting)
      return res.status(NOT_FOUND).json({ body: 'Configuration not found' })

    await setting.update(body)
    res.json({ body: setting })
  } catch (err) {
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}
