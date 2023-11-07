import ServerTypes from '@data/protocols/server/IServerAdapter';
import { routerExpressAdapter } from '@main/adapters';
import { loginUserControllerFactory } from '@main/factories/controllers/auth';

export default (router: ServerTypes.RouterAdapter): void => {
  router.post('/login', routerExpressAdapter(loginUserControllerFactory()));
};
