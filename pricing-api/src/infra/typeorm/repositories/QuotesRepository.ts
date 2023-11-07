import { QuotesModel } from '@domain/models';
import { PrismaClient } from '@prisma/client';
import {
  ICreateQuotesData,
  IQuotesRepository,
} from '@data/protocols/db/repositories/IQuotesRepository';

const prisma = new PrismaClient();

class QuotesRepository implements IQuotesRepository {
  async store(data: ICreateQuotesData): Promise<QuotesModel> {
    const coverage = await prisma.quote.create({
      data: {
        ...data,
      },
    });

    return coverage;
  }
}

export { QuotesRepository };
