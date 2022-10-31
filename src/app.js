import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { COOKIE_SECRET, PORT, MORGAN_MODE } from './config/default.js'
import { routerV1 } from './routes/index.js'
import { error404, errorServerInternal } from './middlewares/handleErrors.js'
import exphbs from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

// SETTINGS
app.set('PORT', PORT)
app.use(express.static(path.join(__dirname, 'public')))

// VIEWS

app.set('views', path.join(__dirname, 'views'))
app.engine(
  '.hbs',
  exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
  }).engine
)
app.set('view engine', '.hbs')

// MIDDELWARES
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(cors())
app.use(morgan(MORGAN_MODE))
app.use(cookieParser(COOKIE_SECRET))

// API
app.use('/v1/', routerV1)

// HANDLERS ERRORS
app.use(error404)
app.use(errorServerInternal)

export default app
