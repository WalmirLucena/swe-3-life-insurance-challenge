import { IUpdateUser } from '@domain/usecases/users';
import { updateUserUseCaseFactory } from '@main/factories/usecases/user';
import {
  IController,
  IHttpRequest,
  IHttpResponse,
} from '@presentation/protocols';

class UpdateUserController implements IController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const updateUserUseCase = updateUserUseCaseFactory();

    const params = {
      ...request.body,
      ...request.query,
      payload: {
        ...request.payload,
      },
    };

    const response = await updateUserUseCase.execute(
      params as IUpdateUser.Params,
    );

    return response;
  }
}

export { UpdateUserController };
