import { CheckAgeFactorAdapter } from '@main/adapters/checkAgeFactorAdapter/checkAgeFactorAdapter';

function checkAgeFactorAdapterFactory(): CheckAgeFactorAdapter {
  return new CheckAgeFactorAdapter();
}

export { checkAgeFactorAdapterFactory };
