import { InvalidParamError } from '@data/erros';
import { badRequest, created, unauthorized } from '@data/helpers';
import {
  IHashProvider,
  ITokenProvider,
  IUsersRepository,
} from '@data/protocols';
import { UserModel } from '@domain/models';
import { ILogin, ILoginUserUseCase } from '@domain/usecases/auth';
import { constants } from '@main/config';

class LoginUserUseCase implements ILoginUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
    private jwtProvider: ITokenProvider,
  ) {}

  async execute({ username, password }: ILogin.Params): Promise<ILogin> {
    const userExists: UserModel = await this.usersRepository.findByUsername(
      username,
    );
    if (!userExists) {
      return unauthorized(new InvalidParamError('Email or password incorrect'));
    }

    const passwordAuthenticate = await this.hashProvider.compare(
      password,
      userExists.password,
    );
    if (!passwordAuthenticate) {
      return unauthorized(new InvalidParamError('Email or password incorrect'));
    }

    const generatedToken = this.jwtProvider.generateToken(
      constants.secret,
      constants.expiresIn,
      {
        user_id: userExists.id,
        role: userExists.role,
      },
    );
    const responseObj = {
      data: {
        user: {
          user_id: userExists.id,
          username: userExists.username,
          role: userExists.role,
        },
        token: generatedToken.token,
      },
    };

    return created(responseObj);
  }
}
export { LoginUserUseCase };
