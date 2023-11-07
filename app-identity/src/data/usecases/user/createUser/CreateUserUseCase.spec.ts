import { InvalidParamError } from '@data/erros';
import { UsersRepository } from '@infra/typeorm/repositories';
import { FakerProviderAdapters, HashAdapters } from '@main/adapters';
import { fakerProviderFactory } from '@main/factories/adapters/fakerProviderFactory';
import { createUserUseCaseFactory } from '@main/factories/usecases/user';
import { CreateUserUseCase } from '..';

jest.mock('@infra/typeorm/repositories');
jest.mock('@main/adapters');

interface StubTypes {
  sut: CreateUserUseCase;
  faker: FakerProviderAdapters;
}

const makeSut = (): StubTypes => {
  const sut = createUserUseCaseFactory();
  const faker = fakerProviderFactory();
  return { sut, faker };
};

describe('CreateUserUseCase', () => {
  const { sut, faker } = makeSut();
  test('Should create a new user', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'findByMail')
      .mockImplementationOnce((): any => {
        return null;
      });

    jest
      .spyOn(HashAdapters.prototype, 'hash')
      .mockImplementationOnce((): any => {
        return 'hashPassword';
      });

    jest
      .spyOn(UsersRepository.prototype, 'store')
      .mockImplementationOnce((): any => {
        return {
          id: faker.id(),
          email: faker.email(),
          password: faker.password(),
          createdAt: faker.createdAt(),
          updatedAt: faker.updatedAt(),
        };
      });

    const promise = await sut.execute({
      email: faker.email(),
      password: faker.password(),
      name: faker.email(),
      birthdate: new Date(),
      phone_number: faker.string(),
      city: faker.string(),
      cpf: faker.string(),
      state: faker.string(),
      cep: faker.string(),
      address: faker.string(),
      address_number: faker.string(),
    });

    expect(promise.body).toHaveProperty('id');
  });

  test('Should not create a new user if the user already exists', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'findByMail')
      .mockImplementationOnce((): any => {
        return {
          id: faker.id(),
        };
      });

    try {
      await sut.execute({
        email: faker.email(),
        password: faker.password(),
        name: faker.email(),
        birthdate: new Date(),
        phone_number: faker.string(),
        city: faker.string(),
        cpf: faker.string(),
        state: faker.string(),
        cep: faker.string(),
        address: faker.string(),
        address_number: faker.string(),
      });
    } catch (err) {
      expect(err).toEqual(new InvalidParamError('User already exists'));
    }
  });
});
