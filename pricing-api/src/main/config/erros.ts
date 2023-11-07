import ServerTypes from '@data/protocols/server/IServerAdapter';
import { errorHandle } from '@main/middlewares';

export const setupErros = (app: ServerTypes.ServerInstance): void => {
  app.use(errorHandle);
};
