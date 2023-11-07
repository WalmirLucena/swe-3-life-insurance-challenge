import { CreateQuotesUseCase } from '@data/usecases/quotes/createQuotesUseCase';
import { checkAgeFactorAdapterFactory } from '@main/factories/adapters';
import {
  coverageRepositoryFactory,
  quotesRepositoryFactory,
} from '@main/factories/repositories';
import { occupationsRepositoryFactory } from '@main/factories/repositories/occupationsRepositoryFactory';

function createQuotesUseCaseFactory(): CreateQuotesUseCase {
  return new CreateQuotesUseCase(
    quotesRepositoryFactory(),
    coverageRepositoryFactory(),
    occupationsRepositoryFactory(),
    checkAgeFactorAdapterFactory(),
  );
}

export { createQuotesUseCaseFactory };
