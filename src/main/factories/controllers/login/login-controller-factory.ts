import { LoginController } from '@/presentation/controllers/authentication/login/login-controller'
import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeLoginValidation } from '../login/login-validation-factory'
import { makeDbAuthentication } from '@/main/factories/controllers/usecases/account/db-authentication-factory'

export const makeLoginController = (): Controller => {
  return makeLogControllerDecorator(
    new LoginController(makeLoginValidation(), makeDbAuthentication())
  )
}
