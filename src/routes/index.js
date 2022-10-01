import { Router } from 'express'
import routerDeliveries from '../apiServices/deliveries/routes.js'
import routesMembers from '../apiServices/members/routes.js'
import routerSetting from '../apiServices/settings/routes.js'
import routesUsers from '../apiServices/users/routes.js'

const routerV1 = Router()
routerV1.get('/', (_req, res) => {
  res.send('WELCOME')
})

routerV1.use(routesMembers)
routerV1.use(routesUsers)
routerV1.use(routerDeliveries)
routerV1.use(routerSetting)

export { routerV1 }
