import { RequiredFieldValidation } from './required-field-validation'
import { MissingParamError } from '@/presentation/errors'

type SutTypes = {
  sut: RequiredFieldValidation
}

const makeSut = (): SutTypes => {
  const sut = new RequiredFieldValidation('field')
  return {
    sut
  }
}

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const { sut } = makeSut()
    const httpResponse = sut.validate({ name: 'any_name' })
    expect(httpResponse).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation succeeds', () => {
    const { sut } = makeSut()
    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
