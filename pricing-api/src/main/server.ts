/* eslint-disable no-console */
import 'reflect-metadata';
import '@infra/database';

import { constants, setupApp } from './config';

const { port } = constants;

const app = setupApp();

app.listen(port, () => console.log(`Server running  http://localhost:${port}`));
