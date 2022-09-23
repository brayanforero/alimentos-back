import { Router } from 'express'
import routesMembers from '../apiServices/members/routes.js'

const routerV1 = Router()
routerV1.get('/', (_req, res) => {
  res.send('WELCOME')
})

routerV1.use(routesMembers)

export { routerV1 }
