import { Validation } from './validation'
import { InvalidParamError } from '../../errors'

export class CompareFieldsValidation implements Validation {
  private readonly fielName: string
  private readonly fieldToCompareName: string

  constructor(fielName: string, fieldToCompareName: string) {
    this.fielName = fielName
    this.fieldToCompareName = fieldToCompareName
  }

  validate(input: any): Error {
    if (input[this.fielName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}
