import { QuotesModel } from '@domain/models';
import { IHttpResponse } from '@presentation/protocols';

interface ICreateQuotesUseCase {
  execute(Quotes: ICreateQuotes.Params): Promise<IHttpResponse>;
}

interface ICreateQuotes extends IHttpResponse {
  body?: ICreateQuotes.Result;
}

namespace ICreateQuotes {
  export type Params = {
    age: number;
    capital: number;
    occupationCode: string;
    coverages: string;
  };

  export type Result = {
    Quotes: QuotesModel;
  };
}

export { ICreateQuotesUseCase, ICreateQuotes };
