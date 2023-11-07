import { EnsureAuthenticated } from '@main/middlewares/EnsureAuthenticated';
import { tokenAdaptersFactory } from '../adapters';

function ensureAuthenticatedFactory(): EnsureAuthenticated {
  return new EnsureAuthenticated(tokenAdaptersFactory());
}

export { ensureAuthenticatedFactory };
