import { LoginUserUseCase } from '@data/usecases/auth/login/LoginUserUseCase';
import {
  hashAdaptersFactory,
  tokenAdaptersFactory,
} from '@main/factories/adapters';
import { usersRepositoryFactory } from '@main/factories/repositories';

function loginUserUseCaseFactory(): LoginUserUseCase {
  return new LoginUserUseCase(
    usersRepositoryFactory(),
    hashAdaptersFactory(),
    tokenAdaptersFactory(),
  );
}

export { loginUserUseCaseFactory };
