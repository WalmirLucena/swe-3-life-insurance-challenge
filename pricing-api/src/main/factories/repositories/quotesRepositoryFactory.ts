import { IQuotesRepository } from '@data/protocols/db/repositories/IQuotesRepository';
import { QuotesRepository } from '@infra/typeorm/repositories';

function quotesRepositoryFactory(): IQuotesRepository {
  return new QuotesRepository();
}

export { quotesRepositoryFactory };
