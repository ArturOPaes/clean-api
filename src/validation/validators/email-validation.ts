import { Validation } from '@/presentation/protocols/validation'
import { InvalidParamError } from '@/presentation/errors'
import { EmailValidator } from '@/validation/protocols/email-validator'

export class EmailValidation implements Validation {
  constructor(
    private readonly fielName: string,
    private readonly emailValidator: EmailValidator
  ) {
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
