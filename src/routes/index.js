import { Router } from 'express'

const routerV1 = Router()
routerV1.use('/', (_req, res) => {
  res.send('WELCOME')
})

export { routerV1 }
