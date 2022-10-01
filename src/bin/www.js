import { APP_URL, MODE } from '../config/default.js'
import app from '../app.js'
import Store from '../database/store.js'

app.listen(app.get('PORT'), async () => {
  console.log(`Server listening on ${APP_URL}:${app.get('PORT')}`)

  if (MODE !== 'production') {
    try {
      await Store.authenticate()
      console.log('Connection has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', { ...error })
    }
  }
})
