import ServerTypes from '@data/protocols/server/IServerAdapter';
import { bodyParser, cors, helmetMiddleware } from '@main/middlewares';

export const setupMiddlewares = (app: ServerTypes.ServerInstance): void => {
  app.use(bodyParser);
  app.use(cors);
  app.use(helmetMiddleware);
};
