import { OccupationsModel, QuotesModel } from '@domain/models';
import { PrismaClient } from '@prisma/client';
import { IOccupationsRepository } from '@data/protocols/db/repositories/OccupationsRepository';

const prisma = new PrismaClient();

class OccupationsRepository implements IOccupationsRepository {
  async findByCode(code: number): Promise<OccupationsModel> {
    const occupation = await prisma.occupations.findUnique({
      where: {
        code,
      },
    });
    return occupation;
  }
}

export { OccupationsRepository };
