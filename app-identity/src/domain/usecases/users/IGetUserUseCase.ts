import { UserModel } from '@domain/models';
import { IHttpResponse } from '@presentation/protocols';

interface IGetUserUseCase {
  execute({ user_id }: IGetUser.Params): Promise<IHttpResponse>;
}

interface IGetUser extends IHttpResponse {
  body: IGetUser.Result;
}

namespace IGetUser {
  export type Params = {
    user_id: number;
  };

  export type Result = {
    user: UserModel;
  };
}

export { IGetUserUseCase, IGetUser };
