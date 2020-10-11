import { LoginController } from '../../../../presentation/controllers/authentication/login/login-controller'
import { Controller } from '../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'
import { makeLoginValidation } from '../login/login-validation-factory'
import { makeDbAuthentication } from '../usecases/db-authentication-factory'

export const makeLoginController = (): Controller => {
  return makeLogControllerDecorator(
    new LoginController(makeLoginValidation(), makeDbAuthentication())
  )
}
