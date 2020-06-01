import { Validation } from './validation'
import { MissingParamError } from '../../errors'

export class RequiredFieldValidation implements Validation {
  private readonly fielName: string

  constructor(fielName: string) {
    this.fielName = fielName
  }

  validate(input: any): Error {
    if (!input[this.fielName]) {
      return new MissingParamError(this.fielName)
    }
  }
}
