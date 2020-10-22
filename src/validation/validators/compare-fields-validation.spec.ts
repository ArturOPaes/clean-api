import { CompareFieldsValidation } from './compare-fields-validation'
import { InvalidParamError } from '@/presentation/errors'

type SutTypes = {
  sut: CompareFieldsValidation
}

const makeSut = (): SutTypes => {
  const sut = new CompareFieldsValidation('field', 'fieldToCompare')
  return {
    sut
  }
}

describe('CompareFields Validation', () => {
  test('Should return a InvalidParamError if validation fails', () => {
    const { sut } = makeSut()
    const httpResponse = sut.validate({
      field: 'any_name',
      fieldToCompare: 'wrong_value'
    })
    expect(httpResponse).toEqual(new InvalidParamError('fieldToCompare'))
  })

  test('Should not return if validation succeeds', () => {
    const { sut } = makeSut()
    const httpResponse = sut.validate({
      field: 'any_name',
      fieldToCompare: 'any_name'
    })
    expect(httpResponse).toBeFalsy()
  })
})
