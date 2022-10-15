import { QueryTypes } from 'sequelize'
import Store from '../../database/store.js'
import { BAD_REQUEST, SERVER_INTERNAL_ERROR } from '../../utils/http.codes.js'
import { loggerError } from '../../utils/loggers.js'
import Delivery from '../deliveries/delivery.model.js'

export const addPay = async (req, res) => {
  const { delivery_id, member_id, pay } = req.body

  try {
    const delivery = await Delivery.findByPk(delivery_id)

    if (!delivery) {
      return res.status(BAD_REQUEST).json({ body: 'Delivery not exists' })
    }
    const sql =
      'INSERT INTO delivery_member (delivery_id, member_id, is_paid, mount, currency) VALUES(?,?,?,?,?)'
    const result = await Store.query(sql, {
      replacements: [
        delivery_id,
        member_id,
        pay.is_paid,
        pay.mount,
        pay.currency,
      ],
      type: QueryTypes.INSERT,
    })

    await delivery.update({
      peoples: delivery.peoples + 1,
    })

    res.json({
      body: 'Pay added',
    })
  } catch (err) {
    loggerError(err)
    res.status(SERVER_INTERNAL_ERROR).json({
      body: 'Has been a error saving your data, check your information are not repeat',
    })
  }
}
