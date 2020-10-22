import { SignUpController } from '@/presentation/controllers/authentication/signup/signup-controller'
import { Controller } from '@/presentation/protocols'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '../usecases/account/db-authentication-factory'
import { makeDbAddAccount } from '../usecases/account/db-add-account-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'

export const makeSignUpController = (): Controller => {
  return makeLogControllerDecorator(
    new SignUpController(
      makeDbAddAccount(),
      makeSignUpValidation(),
      makeDbAuthentication()
    )
  )
}
