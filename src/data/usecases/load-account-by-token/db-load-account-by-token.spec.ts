import { Decrypter } from '../../protocols/criptography/decrypter'
import {DbLoadAccountByToken} from './db-load-account-by-token'

const makeDescrypter = (): Decrypter => {
  class DecrypterStub implements Decrypter {
    async decrypt(value: string): Promise<string> {
      return new Promise((resolve) => resolve('any_value'))
    }

  }
  return new DecrypterStub()
}

interface SutTypes {
  sut: DbLoadAccountByToken
  descrypterStub: Decrypter
}

const makeSut = (): SutTypes => {
  const descrypterStub = makeDescrypter()
  const sut = new DbLoadAccountByToken(descrypterStub)

  return { sut, descrypterStub}

}

describe('DbLoadAccountByToken', () => {
  test('Should call Decrypter with correct values', async () => {   
    const {sut, descrypterStub } = makeSut()
    const descryptSpy = jest.spyOn(descrypterStub, 'decrypt')
    await sut.load('any_token', 'any_role')
    expect(descryptSpy).toHaveBeenCalledWith('any_token')
  })

  test('Should return null if Decrypter returns null', async () => {   
    const {sut, descrypterStub } = makeSut()
    jest.spyOn(descrypterStub, 'decrypt').mockReturnValueOnce(new Promise(resolve => resolve(null)))
    const account = await sut.load('any_token')
    expect(account).toBe(null)
  })
})