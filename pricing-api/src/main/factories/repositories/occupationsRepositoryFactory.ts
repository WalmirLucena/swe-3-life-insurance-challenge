import { IOccupationsRepository } from '@data/protocols/db/repositories/OccupationsRepository';
import { OccupationsRepository } from '@infra/typeorm/repositories';

function occupationsRepositoryFactory(): IOccupationsRepository {
  return new OccupationsRepository();
}

export { occupationsRepositoryFactory };
