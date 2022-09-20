import * as dotenv from 'dotenv'
import app from '../app.js'
import { APP_URL } from '../config/default.js'
dotenv.config()

app.listen(app.get('PORT'), () => {
  console.log(`Server listening on ${APP_URL}:${app.get('PORT')}`)
})
