import Delivery from './delivery.model.js'
import Member from '../members/member.model.js'
import { v1 as uuid } from 'uuid'
import {
  CREATED,
  NOT_FOUND,
  SERVER_INTERNAL_ERROR,
} from '../../utils/http.codes.js'
import { loggerError } from '../../utils/loggers.js'

export const getAllDelivery = async (_req, res) => {
  try {
    const { count, rows } = await Delivery.findAndCountAll({
      include: [
        {
          model: Member,
          as: 'payers',
          attributes: ['cedula', 'names', 'lastnames'],
          through: {
            as: 'pay',
            attributes: [
              'id',
              'delivery_id',
              'member_id',
              'is_paid',
              'mount',
              'currency',
              'created_at',
            ],
          },
        },
      ],
    })

    res.json({
      body: { count, values: rows },
    })
  } catch (err) {
    loggerError(err)
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}

export const addDelivery = async (req, res) => {
  try {
    const count = await Delivery.count({ where: { state: true } })

    if (count > 0)
      return res.status(NOT_FOUND).json({ body: 'Exists a Delivery open' })

    const delivery = await Delivery.create({ code: uuid() })

    res.status(CREATED).json({
      body: delivery,
    })
  } catch (err) {
    loggerError(err)
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}

export const closeDelivery = async (req, res) => {
  const { id } = req.params
  try {
    const delivery = await Delivery.findByPk(id)

    if (!delivery)
      return res.status(NOT_FOUND).json({ body: 'Delivery not found' })

    delivery.update({ state: false })

    res.json({
      body: delivery,
    })
  } catch (err) {
    loggerError(err)
    res.status(SERVER_INTERNAL_ERROR).json(err)
  }
}
