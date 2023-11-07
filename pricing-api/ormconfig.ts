import { constants } from './src/main/config/env';

const {
  db: { type, host, port, username, password, database },
} = constants;

export = {
  type,
  host,
  port,
  username,
  password,
  database,
  entities: ['./src/infra/typeorm/entities/*.ts'],
  migrations: ['./src/infra/database/migrations/*.ts'],
  cli: {
    entitiesDir: './src/infra/typeorm/entities',
    migrationsDir: './src/infra/database/migrations',
  },
  seeds: ['./src/infra/typeorm/seeding/seeds/**/*{.ts,.js}'],
  factories: ['./src/infra/typeorm/seeding/factories/**/*{.ts,.js}'],
  softDelete: true,
};
