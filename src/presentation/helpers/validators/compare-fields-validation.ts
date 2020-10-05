import { Validation } from '../../protocols/validation'
import { InvalidParamError } from '../../errors'

export class CompareFieldsValidation implements Validation {
  constructor(
    private readonly fielName: string,
    private readonly fieldToCompareName: string
  ) {
    this.fielName = fielName
    this.fieldToCompareName = fieldToCompareName
  }

  validate(input: any): Error {
    if (input[this.fielName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}
