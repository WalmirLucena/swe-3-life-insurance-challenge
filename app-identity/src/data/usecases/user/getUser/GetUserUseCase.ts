import { InvalidParamError } from '@data/erros';
import { badRequest, ok } from '@data/helpers';
import { IUsersRepository } from '@data/protocols';
import { IGetUser, IGetUserUseCase } from '@domain/usecases/users';
import { IHttpResponse } from '@presentation/protocols';

class GetUserUseCase implements IGetUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ user_id }: IGetUser.Params): Promise<IHttpResponse> {
    const user = await this.usersRepository.findByUserId(user_id);

    if (!user) {
      return badRequest(new InvalidParamError('User not already exists'));
    }

    return ok(user);
  }
}

export { GetUserUseCase };
