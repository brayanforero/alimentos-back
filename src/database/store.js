import { Sequelize } from 'sequelize'
import {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  MODE,
  DB_PORT,
} from '../config/default.js'

const Store = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  logging: MODE === 'dev' ? console.log : false,
  dialect: 'mysql',
})

export default Store
