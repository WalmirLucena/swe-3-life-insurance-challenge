import { CoverageModel } from '@domain/models';
import {
  ICoverageRepository,
  IFindData,
  IUpdateData,
} from '@data/protocols/db/repositories/ICoverageRepository';
import { IUpdateCoverage } from '@domain/usecases/coverage';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CoverageRepository implements ICoverageRepository {
  async findByCoverageIdOrName(data: IFindData): Promise<CoverageModel> {
    const { name, coverageId } = data;
    const prisma = new PrismaClient();
    const whereCondition = { deleted: null } as any;

    if (name) {
      whereCondition.name = name;
    } else {
      whereCondition.coverageId = parseInt(coverageId, 10);
    }
    const coverage = await prisma.coverage.findUnique({
      where: whereCondition,
    });

    return coverage;
  }

  async store(data: IUpdateData): Promise<CoverageModel> {
    const coverage = await prisma.coverage.create({
      data: {
        deleted: null,
        ...data,
      },
    });

    return coverage;
  }

  async deleteCoverage(coverageId: string): Promise<CoverageModel> {
    const removed = await prisma.coverage.update({
      where: { coverageId: parseInt(coverageId, 10) },
      data: { deleted: new Date() },
    });
    return removed;
  }

  async restoreCoverage(data: CoverageModel): Promise<void> {
    const updated = await prisma.coverage.update({
      where: { coverageid: data.coverageId, deleted: { not: null } },
      data: { deleted: new Date() },
    });

    return updated;
  }

  async updateCoverage(data: IUpdateCoverage.Params): Promise<CoverageModel> {
    const { coverageId, ...updateObj } = data;
    const coverage = await prisma.coverage.findUnique({
      where: { coverageId: parseInt(coverageId, 10) },
    });
    if (coverage.deleted) {
      coverage.deleted = null;
    }
    const updated = await prisma.coverage.update({
      where: { coverageId: parseInt(coverageId, 10) },
      data: { ...coverage, ...updateObj },
    });

    return updated;
  }
}

export { CoverageRepository };
