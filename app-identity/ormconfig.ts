import { constants } from './src/main/config/env';
import './src/infra/typeorm/entities/User';

const {
  db: { type, host, port, username, password, database },
} = constants;

module.exports = {
  type,
  host,
  port,
  username,
  password,
  database,
  synchronize: true,
  entities: ['./src/infra/typeorm/entities/*.ts'],
  migrations: ['./src/infra/database/migrations/*.ts'],
  cli: {
    entitiesDir: './src/infra/typeorm/entities',
    migrationsDir: './src/infra/database/migrations',
  },
  seeds: ['./src/infra/typeorm/seeding/seeds/**/*{.ts,.js}'],
  factories: ['./src/infra/typeorm/seeding/factories/**/*{.ts,.js}'],
};
