import { Validation } from '../../protocols/validation'
import { InvalidParamError } from '../../errors'
import { EmailValidator } from '../../protocols/email-validator'

export class EmailValidation implements Validation {
  private readonly fielName: string
  private readonly emailValidator: EmailValidator

  constructor(fielName: string, emailValidator: EmailValidator) {
    this.fielName = fielName
    this.emailValidator = emailValidator
  }

  validate(input: any): Error {
    const isValid = this.emailValidator.isValid(input[this.fielName])
    if (!isValid) {
      return new InvalidParamError(this.fielName)
    }
  }
}
