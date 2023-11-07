import ServerTypes from '@data/protocols/server/IServerAdapter';
import { Router } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';

export const setupRoutes = (app: ServerTypes.ServerInstance): void => {
  const router = Router();
  app.use('/api', router);
  readdirSync(join(__dirname, '../routes')).map(async file => {
    if (!file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router);
    }
  });
};
