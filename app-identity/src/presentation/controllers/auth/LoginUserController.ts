import { ILogin } from '@domain/usecases/auth';
import { loginUserUseCaseFactory } from '@main/factories/usecases/auth/loginUserUseCaseFactory';
import {
  IController,
  IHttpRequest,
  IHttpResponse,
} from '@presentation/protocols';

class LoginUserController implements IController {
  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const loginUserUseCase = loginUserUseCaseFactory();

    const response = await loginUserUseCase.execute(
      httpRequest.body as ILogin.Params,
    );

    return response;
  }
}

export { LoginUserController };
