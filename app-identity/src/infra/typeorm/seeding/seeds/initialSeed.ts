import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { UserRoles } from '@data/protocols';
import { hashAdaptersFactory } from '@main/factories/adapters';
import { User } from '../../entities';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const userRepository = connection.getRepository(User);
    const existingUsers = await userRepository.find({
      where: [{ username: 'WalmirADM' }, { username: 'WalmirUser' }],
    });

    if (existingUsers.length === 0) {
      await connection
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
          {
            username: 'WalmirADM',
            role: UserRoles.admin,
            password: await hashAdaptersFactory().hash('P@ssword123'),
          },
          {
            username: 'WalmirUser',
            role: UserRoles.user,
            password: await hashAdaptersFactory().hash('P@ssword123'),
          },
        ])
        .execute();
    }
  }
}
