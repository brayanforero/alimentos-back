import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { COOKIE_SECRET, PORT, MORGAN_MODE } from './config/default.js'
import { routerV1 } from './routes/index.js'
import { error404, errorServerInternal } from './middlewares/handleErrors.js'
const app = express()

// SETTINGS
app.set('PORT', PORT)
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  })
)

// MIDDELWARES
app.use(morgan(MORGAN_MODE))
app.use(cookieParser(COOKIE_SECRET))

// API
app.use('/v1/', routerV1)

// HANDLERS ERRORS
app.get('*', error404)
app.use(errorServerInternal)

export default app
