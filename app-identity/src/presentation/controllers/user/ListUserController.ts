import { listUsersUseCaseFactory } from '@main/factories/usecases/user';
import { IController, IHttpResponse } from '@presentation/protocols';

class ListUserController implements IController {
  async handle(): Promise<IHttpResponse> {
    const listUsersUseCase = listUsersUseCaseFactory();

    const response = await listUsersUseCase.execute();

    return response;
  }
}

export { ListUserController };
