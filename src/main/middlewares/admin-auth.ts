import { adaptMiddleware } from '@/main/adapters/express-middleware-adapter'
import { makeAuthMiddleware } from '@/main/factories/middlewares/make-auth-middleware-factory'

export const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
