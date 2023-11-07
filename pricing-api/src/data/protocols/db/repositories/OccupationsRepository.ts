import { OccupationsModel } from '@domain/models';

interface IOccupationsRepository {
  findByCode(code: number): Promise<OccupationsModel>;
}

export { IOccupationsRepository };
