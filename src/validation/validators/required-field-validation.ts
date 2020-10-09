import { Validation } from '../../presentation/protocols/validation'
import { MissingParamError } from '../../presentation/errors'

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fielName: string) {
    this.fielName = fielName
  }

  validate(input: any): Error {
    if (!input[this.fielName]) {
      return new MissingParamError(this.fielName)
    }
  }
}
