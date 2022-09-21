import * as dotenv from 'dotenv'
dotenv.config()

export const APP_URL = process.env.APP_URL || 'http://localhost'
export const PORT = process.env.PORT || 4000
export const MODE = process.env.ENV
export const COOKIE_SECRET = process.env.COOKIE_SECRET || 'elojodeagamoto'
export const MORGAN_MODE = MODE === 'production' ? 'combined' : 'dev'

export const DB_HOST = process.env.MYSQL_ADDON_HOST || '127.0.0.1'
export const DB_NAME = process.env.MYSQL_ADDON_DB || 'clap'
export const DB_USER = process.env.MYSQL_ADDON_USER || 'root'
export const DB_PORT = process.env.MYSQL_ADDON_PORT || '3306'
export const DB_PASSWORD = process.env.MYSQL_ADDON_PASSWORD || ''
