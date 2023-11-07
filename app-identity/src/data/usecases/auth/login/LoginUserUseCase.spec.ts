import { InvalidParamError } from '@data/erros';
import { UsersRepository } from '@infra/typeorm/repositories';
import { FakerProviderAdapters, HashAdapters } from '@main/adapters';
import { JwtAdapter } from '@main/adapters/token/TokenAdapter';
import { fakerProviderFactory } from '@main/factories/adapters/fakerProviderFactory';
import { loginUserUseCaseFactory } from '@main/factories/usecases/auth/loginUserUseCaseFactory';
import { LoginUserUseCase } from '..';

jest.mock('@infra/typeorm/repositories');
jest.mock('@main/adapters');

interface StubTypes {
  sut: LoginUserUseCase;
  faker: FakerProviderAdapters;
}

const makeSut = (): StubTypes => {
  const sut = loginUserUseCaseFactory();
  const faker = fakerProviderFactory();
  return { sut, faker };
};

describe('CreateUserUseCase', () => {
  const { sut, faker } = makeSut();
  test('Should return token if login success', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'findByMail')
      .mockImplementationOnce((): any => {
        return { password: faker.password() };
      });

    jest
      .spyOn(HashAdapters.prototype, 'compare')
      .mockImplementationOnce((): any => {
        return true;
      });

    jest
      .spyOn(JwtAdapter.prototype, 'generateToken')
      .mockImplementationOnce((): any => {
        return {
          token: 'any_token',
        };
      });

    const promise = await sut.execute({
      email: faker.email(),
      password: faker.password(),
    });

    expect(promise.body).toHaveProperty('token');
  });

  test('Should return error if email incorrect', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'findByMail')
      .mockImplementationOnce((): any => {
        return false;
      });

    try {
      await sut.execute({
        email: faker.email(),
        password: faker.password(),
      });
    } catch (err) {
      expect(err).toEqual(new InvalidParamError('Email or password incorrect'));
    }
  });

  test('Should return error if password incorrect', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'findByMail')
      .mockImplementationOnce((): any => {
        return true;
      });

    jest
      .spyOn(HashAdapters.prototype, 'compare')
      .mockImplementationOnce((): any => {
        return false;
      });

    try {
      await sut.execute({
        email: faker.email(),
        password: faker.password(),
      });
    } catch (err) {
      expect(err).toEqual(new InvalidParamError('Email or password incorrect'));
    }
  });
});
