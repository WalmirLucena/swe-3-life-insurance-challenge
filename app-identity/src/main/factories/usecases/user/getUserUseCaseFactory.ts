import { GetUserUseCase } from '@data/usecases/user';
import { usersRepositoryFactory } from '@main/factories/repositories';

function getUserUseCaseFactory(): GetUserUseCase {
  return new GetUserUseCase(usersRepositoryFactory());
}

export { getUserUseCaseFactory };
