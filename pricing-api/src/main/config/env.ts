import { config } from 'dotenv';

config({
  path: process.env.NODE_ENV === 'localhost' ? '.env.localhost' : '.env.dev',
});

const {
  TYPE,
  PORT,
  HOST,
  PORTBD,
  USERNAMEDB,
  PWDDB,
  DATABASE,
  SECRET,
  EXPIRESIN,
  DATABASE_URL,
} = process.env;

const constants = {
  port: PORT,
  secret: SECRET,
  expiresIn: EXPIRESIN,
  db: {
    type: TYPE,
    host: HOST,
    port: PORTBD,
    username: USERNAMEDB,
    password: PWDDB,
    database: DATABASE,
    url: DATABASE_URL,
  },
};

export { constants };
