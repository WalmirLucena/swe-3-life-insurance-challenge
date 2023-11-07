import { ICoverageRepository } from '@data/protocols/db/repositories/ICoverageRepository';
import { CoverageRepository } from '@infra/typeorm/repositories';

function coverageRepositoryFactory(): ICoverageRepository {
  return new CoverageRepository();
}

export { coverageRepositoryFactory };
