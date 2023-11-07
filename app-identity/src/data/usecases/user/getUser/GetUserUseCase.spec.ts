import { getUserUseCaseFactory } from '@main/factories/usecases/user';
import { UsersRepository } from '@infra/typeorm/repositories';
import { InvalidParamError } from '@data/erros';
import { fakerProviderFactory } from '@main/factories/adapters/fakerProviderFactory';
import { FakerProviderAdapters } from '@main/adapters';
import { GetUserUseCase } from './GetUserUseCase';

jest.mock('@infra/typeorm/repositories');

interface StubTypes {
  sut: GetUserUseCase;
  faker: FakerProviderAdapters;
}

const makeSut = (): StubTypes => {
  const sut = getUserUseCaseFactory();
  const faker = fakerProviderFactory();
  return { sut, faker };
};

describe('GetUserUseCase', () => {
  const { sut, faker } = makeSut();
  test('Should be able to get user', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'findByUserId')
      .mockImplementationOnce((): any => {
        return { id: 1 };
      });

    const promise = await sut.execute({
      user_id: faker.id(),
    });

    expect(promise.body).toHaveProperty('id');
    expect(promise.statusCode).toBe(200);
  });

  test('Should be able to not get user if the not user already exists', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'findByUserId')
      .mockImplementationOnce((): any => {
        return null;
      });

    const promise = await sut.execute({
      user_id: faker.id(),
    });

    expect(promise.body.error).toEqual(
      new InvalidParamError('User not already exists'),
    );
    expect(promise.statusCode).toBe(400);
  });
});
