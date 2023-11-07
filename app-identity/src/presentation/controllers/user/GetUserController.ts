import { IGetUser } from '@domain/usecases/users';
import { getUserUseCaseFactory } from '@main/factories/usecases/user';
import {
  IController,
  IHttpRequest,
  IHttpResponse,
} from '@presentation/protocols';

class GetUserController implements IController {
  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const getUserUseCase = getUserUseCaseFactory();

    const response = await getUserUseCase.execute(
      httpRequest.payload as IGetUser.Params,
    );

    return response;
  }
}

export { GetUserController };
