import { IUsersRepository } from '@data/protocols';
import { UsersRepository } from '@infra/typeorm/repositories';

function usersRepositoryFactory(): IUsersRepository {
  return new UsersRepository();
}

export { usersRepositoryFactory };
