export const APP_URL = process.env.APP_URL || 'http://localhost'
export const PORT = process.env.PORT || 4000
export const MODE = process.env.ENV
export const COOKIE_SECRET = process.env.COOKIE_SECRET || 'elojodeagamoto'
export const MORGAN_MODE = MODE === 'production' ? 'combined' : 'dev'
