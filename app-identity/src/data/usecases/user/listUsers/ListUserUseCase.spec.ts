import { listUsersUseCaseFactory } from '@main/factories/usecases/user';
import { UsersRepository } from '@infra/typeorm/repositories';
import { fakerProviderFactory } from '@main/factories/adapters/fakerProviderFactory';
import { FakerProviderAdapters } from '@main/adapters';
import { InvalidParamError } from '@data/erros';
import { ListUserUseCase } from './ListUserUseCase';

jest.mock('@infra/typeorm/repositories');

interface StubTypes {
  sut: ListUserUseCase;
  faker: FakerProviderAdapters;
}

const makeSut = (): StubTypes => {
  const sut = listUsersUseCaseFactory();
  const faker = fakerProviderFactory();
  return { sut, faker };
};

describe('ListUserUseCase', () => {
  const { sut } = makeSut();
  test('Should be able to get users', async () => {
    jest
      .spyOn(UsersRepository.prototype, 'listUsers')
      .mockImplementationOnce((): any => {
        return [{ id: 1 }];
      });

    const promise = await sut.execute();

    expect(promise.body).toHaveLength(1);
    expect(promise.statusCode).toBe(200);
  });
});
