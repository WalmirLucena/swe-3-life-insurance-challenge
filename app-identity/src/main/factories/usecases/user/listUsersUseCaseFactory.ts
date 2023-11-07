import { ListUserUseCase } from '@data/usecases/user';
import { usersRepositoryFactory } from '@main/factories/repositories';

function listUsersUseCaseFactory(): ListUserUseCase {
  return new ListUserUseCase(usersRepositoryFactory());
}

export { listUsersUseCaseFactory };
