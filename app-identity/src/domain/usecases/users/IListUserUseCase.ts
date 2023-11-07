import { ProtectedUserModel } from '@domain/models';
import { IHttpResponse } from '@presentation/protocols';

interface IListUserUseCase {
  execute(): Promise<IHttpResponse>;
}

interface IListUser extends IHttpResponse {
  body: IListUser.Result;
}

namespace IListUser {
  export type Result = {
    users: ProtectedUserModel[];
  };
}

export { IListUserUseCase, IListUser };
