import ServerTypes from '@data/protocols/server/IServerAdapter';
import {
  authenticatedMiddlewaresAdapter,
  routerExpressAdapter,
} from '@main/adapters';
import {
  deleteCoverageControllerFactory,
  updateCoverageControllerFactory,
  createCoverageControllerFactory,
} from '@main/factories/controllers/coverage';

import { ensureAuthenticatedFactory } from '@main/factories/middlewares';

export default (router: ServerTypes.RouterAdapter): void => {
  router.post(
    '/coverage',
    routerExpressAdapter(createCoverageControllerFactory()),
  );
  router.patch(
    '/coverage',
    routerExpressAdapter(deleteCoverageControllerFactory()),
  );
  router.put(
    '/coverage',
    routerExpressAdapter(updateCoverageControllerFactory()),
  );
};
