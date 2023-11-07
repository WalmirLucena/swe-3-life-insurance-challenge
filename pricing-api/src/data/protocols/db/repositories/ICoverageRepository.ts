import { CoverageModel } from '@domain/models';
import { IUpdateCoverage } from '@domain/usecases/coverage';

type IUpdateData = {
  description: string;
  name: string;
  capital: string;
  premium: string;
};

type IFindData = {
  name?: string;
  coverageId?: string;
};

interface ICoverageRepository {
  store(user: IUpdateData): Promise<CoverageModel>;
  findByCoverageIdOrName(data: IFindData): Promise<CoverageModel>;
  deleteCoverage(coverageId: string): Promise<CoverageModel>;
  updateCoverage(data: IUpdateCoverage.Params): Promise<CoverageModel>;
  restoreCoverage(data: CoverageModel): Promise<void>;
}

export { ICoverageRepository, IUpdateData, IFindData };
