import { APP_URL, MODE } from '../config/default.js'
import app from '../app.js'
import Store from '../database/store.js'
import { logger, loggerError } from '../utils/loggers.js'

app.listen(app.get('PORT'), async () => {
  console.log(`Server listening on ${APP_URL}:${app.get('PORT')}`)

  if (MODE !== 'production') {
    try {
      await Store.authenticate()
      logger('Connection has been established successfully.')
    } catch (error) {
      loggerError('Unable to connect to the database:', { ...error })
    }
  }
})
