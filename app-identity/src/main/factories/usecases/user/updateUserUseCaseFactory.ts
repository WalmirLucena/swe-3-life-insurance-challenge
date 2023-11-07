import { UpdateUserUseCase } from '@data/usecases/user';
import { usersRepositoryFactory } from '@main/factories/repositories';

function updateUserUseCaseFactory(): UpdateUserUseCase {
  return new UpdateUserUseCase(usersRepositoryFactory());
}

export { updateUserUseCaseFactory };
