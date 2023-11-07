import { define } from 'typeorm-seeding';

import { UserRoles } from '@data/protocols';
import { User } from '../../entities';

define(User, () => {
  const user = new User();
  user.username = 'WalmirADM';
  user.role = UserRoles.admin;
  user.password = 'P@assword123';
  return user;
});
