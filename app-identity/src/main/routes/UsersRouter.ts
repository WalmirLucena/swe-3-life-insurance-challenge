import ServerTypes from '@data/protocols/server/IServerAdapter';
import {
  authenticatedMiddlewaresAdapter,
  routerExpressAdapter,
} from '@main/adapters';
import {
  createUserControllerFactory,
  getUserControllerFactory,
  listUserControllerFactory,
  updateUserControllerFactory,
} from '@main/factories/controllers/user';
import { ensureAuthenticatedFactory } from '@main/factories/middlewares';

export default (router: ServerTypes.RouterAdapter): void => {
  router.post(
    '/user',
    authenticatedMiddlewaresAdapter(ensureAuthenticatedFactory()),
    routerExpressAdapter(createUserControllerFactory()),
  );
  router.get(
    '/user',
    authenticatedMiddlewaresAdapter(ensureAuthenticatedFactory()),
    routerExpressAdapter(getUserControllerFactory()),
  );
  router.get(
    '/users',
    authenticatedMiddlewaresAdapter(ensureAuthenticatedFactory()),
    routerExpressAdapter(listUserControllerFactory()),
  );
  router.patch(
    '/user',
    authenticatedMiddlewaresAdapter(ensureAuthenticatedFactory()),
    routerExpressAdapter(updateUserControllerFactory()),
  );
};
