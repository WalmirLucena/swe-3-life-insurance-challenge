import 'reflect-metadata';
import { setupMiddlewares, setupRoutes, setupErros } from '@main/config';
import ServerTypes from '@data/protocols/server/IServerAdapter';
import { ServerAdapter } from '@main/adapters';


export const setupApp = (): ServerTypes.ServerInstance => {
  const app = ServerAdapter.createApp();
  setupMiddlewares(app);
  setupRoutes(app);
  setupErros(app);
  return app;
};
