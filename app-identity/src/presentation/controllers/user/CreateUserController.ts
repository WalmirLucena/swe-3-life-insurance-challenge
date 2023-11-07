import { ICreateUser } from '@domain/usecases/users/ICreateUserUseCase';
import { createUserUseCaseFactory } from '@main/factories/usecases/user';
import { IController, IHttpRequest, IHttpResponse } from '../../protocols';

class CreateUserController implements IController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const createUserUseCase = createUserUseCaseFactory();

    const params = {
      ...request.body,
      ...request.payload,
    };

    const response = await createUserUseCase.execute(
      params as ICreateUser.Params,
    );

    return response;
  }
}

export { CreateUserController };
