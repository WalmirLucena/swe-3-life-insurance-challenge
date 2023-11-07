import { createConnection } from 'typeorm';
import { constants } from '../../main/config/env';

const {
  db: { type, host, port, username, password, database },
} = constants;

createConnection({
  type: 'postgres',
  host: 'db',
  port: 5433,
  username,
  password,
  database,
});
