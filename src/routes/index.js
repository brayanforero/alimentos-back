import { Router } from 'express'
import routesMembers from '../apiServices/members/routes.js'
import routesUsers from '../apiServices/users/routes.js'

const routerV1 = Router()
routerV1.get('/', (_req, res) => {
  res.send('WELCOME')
})

routerV1.use(routesMembers)
routerV1.use(routesUsers)

export { routerV1 }
