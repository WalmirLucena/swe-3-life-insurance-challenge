import { ProtectedUserModel } from '@domain/models';
import { IHttpResponse } from '@presentation/protocols';

interface ICreateUserUseCase {
  execute(user: ICreateUser.Params): Promise<IHttpResponse>;
}

interface ICreateUser extends IHttpResponse {
  body?: ICreateUser.Result;
}

namespace ICreateUser {
  export type Params = {
    password: string;
    username: string;
  };

  export type Result = {
    user: ProtectedUserModel;
  };
}

export { ICreateUserUseCase, ICreateUser };
