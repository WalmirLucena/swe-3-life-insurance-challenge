import { JwtAdapter } from '@main/adapters/token/TokenAdapter';

function tokenAdaptersFactory(): JwtAdapter {
  return new JwtAdapter();
}

export { tokenAdaptersFactory };
