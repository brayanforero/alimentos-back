import { Router } from 'express'
import routerAuth from '../auth/routes.js'
import routerDeliveries from '../apiServices/deliveries/routes.js'
import routesMembers from '../apiServices/members/routes.js'
import routerSetting from '../apiServices/settings/routes.js'
import routesUsers from '../apiServices/users/routes.js'
import routerPayments from '../apiServices/payments/routes.js'
import Member from '../apiServices/members/member.model.js'
import { SERVER_INTERNAL_ERROR } from '../utils/http.codes.js'
import { getNameMonth, now } from '../utils/date.js'

const routerV1 = Router()
routerV1.get('/', (_req, res) => {
  res.send('WELCOME')
})

routerV1.get('/document/:id', (req, res) => {
  const { id } = req.params

  Member.findByPk(id)
    .then((m) => {
      if (!m) return res.render('404', { layout: false })

      const [day, month, year] = now.split(' ')

      res.render('pdf', {
        member: m.dataValues,
        created: {
          day,
          month: getNameMonth(parseInt(month)),
          year,
        },
        layout: false,
      })
    })
    .catch((e) => res.status(SERVER_INTERNAL_ERROR, { body: e }))
})

routerV1.use(routerAuth)
routerV1.use(routesMembers)
routerV1.use(routesUsers)
routerV1.use(routerDeliveries)
routerV1.use(routerSetting)
routerV1.use(routerPayments)

export { routerV1 }
