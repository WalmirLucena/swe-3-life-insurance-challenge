import { IUpdateUser, IUsersRepository, UserRoles } from '@data/protocols';
import { ProtectedUserModel, UserModel } from '@domain/models';
import { ICreateUser } from '@domain/usecases/users';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> implements IUsersRepository {
  async findByUserId(user_id: number): Promise<UserModel> {
    const repository = getCustomRepository(UsersRepository);

    const user = await repository.findOne(user_id);

    return user;
  }

  async store(user: ICreateUser.Params): Promise<UserModel> {
    const repository = getCustomRepository(UsersRepository);

    const newUser = repository.create({ ...user, role: UserRoles.user });
    await repository.save(newUser);

    return newUser;
  }

  async findByUsername(username: string): Promise<UserModel> {
    const repository = getCustomRepository(UsersRepository);

    const user = await repository.findOne({ username });

    return user;
  }

  async listUsers(): Promise<ProtectedUserModel[]> {
    const repository = getCustomRepository(UsersRepository);

    const users = await repository.find();
    return users.map(user => {
      delete user.password;
      return user;
    });
  }

  async updateUser(data: IUpdateUser, user_id: number): Promise<UserModel> {
    const repository = getCustomRepository(UsersRepository);
    const user = await repository.findOne({ id: user_id });
    return repository.save({ ...user, ...data });
  }
}

export { UsersRepository };
