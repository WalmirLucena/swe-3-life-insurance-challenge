import { UserModel } from '@domain/models';
import { IHttpResponse } from '@presentation/protocols';

interface IUpdateUserUseCase {
  execute(data: IUpdateUser.Params): Promise<IHttpResponse>;
}

interface IUpdateUser extends IHttpResponse {
  body: IUpdateUser.Result;
}

namespace IUpdateUser {
  export type Params = {
    payload: {
      user_id: number;
      role: string;
    };
    role: string;
    id_patch: number;
  };

  export type Result = {
    data: UserModel;
  };
}

export { IUpdateUserUseCase, IUpdateUser };
