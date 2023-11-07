import { InvalidParamError, UnauthorizedError } from '@data/erros';
import { badRequest, ok, unauthorized, updated } from '@data/helpers';
import { IUsersRepository, UserRoles } from '@data/protocols';
import { IUpdateUser, IUpdateUserUseCase } from '@domain/usecases/users';
import { IHttpResponse } from '@presentation/protocols';

class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: IUpdateUser.Params): Promise<IHttpResponse> {
    const user = await this.usersRepository.findByUserId(data.id_patch);

    if (data.payload.role !== UserRoles.admin) {
      return unauthorized(
        new UnauthorizedError('You do not have permissions.'),
      );
    }
    if (!user) {
      return badRequest(new InvalidParamError('User not already exists'));
    }

    await this.usersRepository.updateUser(
      {
        role: data.role,
      },
      data.id_patch,
    );

    return ok({
      data: {
        user_id: data.id_patch,
        username: user.username,
        role: data.role,
      },
    });
  }
}

export { UpdateUserUseCase };
