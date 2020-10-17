import { AccountModel } from '../../../domain/models/account'
import { Decrypter } from '../../protocols/criptography/decrypter'
import { DbLoadAccountByToken } from './db-load-account-by-token'
import { LoadAccountByTokenRepository } from '../../protocols/db/account/load-account-by-token-repository'

const makeDescrypter = (): Decrypter => {
  class DecrypterStub implements Decrypter {
    async decrypt(value: string): Promise<string> {
      return new Promise((resolve) => resolve('any_value'))
    }

  }
  return new DecrypterStub()
}

const makeFakeAccount = (): AccountModel => ({
  id: 'valid_id',
  name: 'valid_name',
  email: 'valid_email@mail.com',
  password: 'hashed_password'
})

const makeLoadAccountByTokenRepository = (): LoadAccountByTokenRepository => {
  class LoadAccountByTokenRepositoryStub implements LoadAccountByTokenRepository {
    async loadByToken(token: string, role?: string): Promise<AccountModel> {
      return new Promise((resolve) => resolve(makeFakeAccount()))
    }

  }
  return new LoadAccountByTokenRepositoryStub()
}

interface SutTypes {
  sut: DbLoadAccountByToken
  descrypterStub: Decrypter
  loadAccountByTokenRepositoryStub: LoadAccountByTokenRepository
}

const makeSut = (): SutTypes => {
  const descrypterStub = makeDescrypter()
  const loadAccountByTokenRepositoryStub = makeLoadAccountByTokenRepository()
  const sut = new DbLoadAccountByToken(descrypterStub, loadAccountByTokenRepositoryStub)

  return { sut, descrypterStub, loadAccountByTokenRepositoryStub}

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

  test('Should call loadAccountByTokenRepository with correct values', async () => {   
    const {sut, loadAccountByTokenRepositoryStub } = makeSut()
    const loadByTokenSpy = jest.spyOn(loadAccountByTokenRepositoryStub, 'loadByToken')
    await sut.load('any_token', 'any_role')
    expect(loadByTokenSpy).toHaveBeenCalledWith('any_token', 'any_role')
  })

  test('Should return null if loadAccountByTokenRepository returns null', async () => {   
    const {sut, loadAccountByTokenRepositoryStub } = makeSut()
    jest.spyOn(loadAccountByTokenRepositoryStub, 'loadByToken').mockReturnValueOnce(new Promise(resolve => resolve(null)))
    const account = await sut.load('any_token')
    expect(account).toBe(null)
  })

  test('Should return an account on success', async () => {   
    const {sut } = makeSut()
    const account = await sut.load('any_token')
    expect(account).toEqual(makeFakeAccount())
  })
})