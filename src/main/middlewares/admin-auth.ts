import { adaptMiddleware } from '../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '../factories/middlewares/make-auth-middleware-factory'

export const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
