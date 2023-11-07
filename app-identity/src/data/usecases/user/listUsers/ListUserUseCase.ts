import { ok } from '@data/helpers';
import { IUsersRepository } from '@data/protocols';
import { IListUserUseCase } from '@domain/usecases/users';
import { IHttpResponse } from '@presentation/protocols';

class ListUserUseCase implements IListUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<IHttpResponse> {
    const users = await this.usersRepository.listUsers();

    return ok(users);
  }
}

export { ListUserUseCase };
