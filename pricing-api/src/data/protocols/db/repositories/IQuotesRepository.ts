import { QuotesModel } from '@domain/models';

type ICreateQuotesData = {
  age: number;
  capital: number;
  occupationCode: number;
  coverageId: number;
  premium: number;
};

interface IQuotesRepository {
  store(user: ICreateQuotesData): Promise<QuotesModel>;
}

export { IQuotesRepository, ICreateQuotesData };
