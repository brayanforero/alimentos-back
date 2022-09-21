import { APP_URL } from '../config/default.js'
import app from '../app.js'
app.listen(app.get('PORT'), () => {
  console.log(`Server listening on ${APP_URL}:${app.get('PORT')}`)
})
