import { ProtectedUserModel, UserModel } from '@domain/models';
import { ICreateUser } from '@domain/usecases/users/ICreateUserUseCase';

type IUpdateUser = {
  role?: string;
  username?: string;
};

enum UserRoles {
  admin = 'admin',
  user = 'user',
}

interface IUsersRepository {
  store(user: ICreateUser.Params): Promise<UserModel>;
  findByUsername(email: string): Promise<UserModel>;
  findByUserId(user_id: number): Promise<UserModel>;
  listUsers(): Promise<ProtectedUserModel[]>;
  updateUser(data: IUpdateUser, user_id: number): Promise<UserModel>;
}

export { IUsersRepository, IUpdateUser, UserRoles };
