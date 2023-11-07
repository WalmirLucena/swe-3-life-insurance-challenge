import { updateUserUseCaseFactory } from '@main/factories/usecases/user';
import { UsersRepository } from '@infra/typeorm/repositories';
import { fakerProviderFactory } from '@main/factories/adapters/fakerProviderFactory';
import { FakerProviderAdapters } from '@main/adapters';
import { InvalidParamError } from '@data/erros';
import { UpdateUserUseCase } from './UpdateUserUseCase';

jest.mock('@infra/typeorm/repositories');

interface StubTypes {
  sut: UpdateUserUseCase;
  faker: FakerProviderAdapters;
}

const makeSut = (): StubTypes => {
  const sut = updateUserUseCaseFactory();
  const faker = fakerProviderFactory();
  return { sut, faker };
};

describe('UpdateUserUseCase', () => {
  const { sut, faker } = makeSut();
  test('Should be able to update user', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'findByUserId')
      .mockImplementationOnce((): any => {
        return { id: 1 };
      });

    jest
      .spyOn(UsersRepository.prototype, 'updateUser')
      .mockImplementationOnce((): any => {
        return { id: 1 };
      });

    const promise = await sut.execute({
      user_id: faker.id(),
      email: faker.email(),
    });

    expect(promise.body).toHaveProperty('id');
    expect(promise.statusCode).toBe(200);
  });

  test('Should return error if user not found', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'findByUserId')
      .mockImplementationOnce((): any => {
        return null;
      });

    const promise = await sut.execute({
      user_id: faker.id(),
      email: faker.email(),
    });

    expect(promise.body.error).toEqual(
      new InvalidParamError('User not already exists'),
    );
    expect(promise.statusCode).toBe(400);
  });
});
