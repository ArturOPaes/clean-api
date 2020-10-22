import { Validation } from '@/presentation/protocols/validation'
import { InvalidParamError } from '@/presentation/errors'

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
