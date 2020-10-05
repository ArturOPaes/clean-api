import { Validation } from '../../protocols/validation'
import { MissingParamError } from '../../errors'

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
