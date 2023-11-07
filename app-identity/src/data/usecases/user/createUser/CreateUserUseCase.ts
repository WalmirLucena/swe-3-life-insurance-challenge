import { InvalidParamError } from '@data/erros';
import { badRequest, created } from '@data/helpers';
import { IHashProvider, IUsersRepository } from '@data/protocols';
import { IPasswordStrengthProvider } from '@data/protocols/providers/IPasswordStrengthProvider';
import { ProtectedUserModel } from '@domain/models';
import {
  ICreateUser,
  ICreateUserUseCase,
} from '@domain/usecases/users/ICreateUserUseCase';

class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    private userReposity: IUsersRepository,
    private hashProvider: IHashProvider,
    private passwordStrength: IPasswordStrengthProvider,
  ) {}

  async execute({
    username,
    password,
  }: ICreateUser.Params): Promise<ICreateUser> {
    const userExists = await this.userReposity.findByUsername(username);
    if (userExists) {
      return badRequest(new InvalidParamError('User already exists'));
    }

    const checkPassword = await this.passwordStrength.checker(password);

    if (!checkPassword) {
      return badRequest(
        new InvalidParamError(
          'The password provided does not meet the minimum security criteria.',
        ),
      );
    }

    const hashPassword = await this.hashProvider.hash(password);

    const result = await this.userReposity.store({
      username,
      password: hashPassword,
    });

    return created({
      data: { userId: result.id, username: result.username, role: result.role },
    });
  }
}

export { CreateUserUseCase };
