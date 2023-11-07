import ServerTypes from '@data/protocols/server/IServerAdapter';
import { routerExpressAdapter } from '@main/adapters';

import { createQuotesControllerFactory } from '@main/factories/controllers/quotes/createQuotesControllerFactory';

export default (router: ServerTypes.RouterAdapter): void => {
  router.post('/quote', routerExpressAdapter(createQuotesControllerFactory()));
};
