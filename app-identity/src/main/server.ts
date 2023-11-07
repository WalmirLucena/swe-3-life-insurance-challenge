/* eslint-disable no-console */
import 'reflect-metadata';
import '@infra/database';
import { generateKeyPair } from 'crypto';
import fs from 'fs';
import { constants, setupApp } from './config';

const { port, secret, generatePairKeys } = constants;

if (generatePairKeys) {
  generateKeyPair(
    'rsa',
    {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: secret,
      },
    },
    (erro, chavePublica, chavePrivada) => {
      fs.writeFileSync('public.pem', chavePublica);
      fs.writeFileSync('private.key', chavePrivada);
    },
  );
}

const app = setupApp();

app.listen(port, () => console.log(`Server running  http://localhost:${port}`));
