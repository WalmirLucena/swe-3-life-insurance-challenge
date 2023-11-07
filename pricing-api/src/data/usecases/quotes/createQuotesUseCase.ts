import { InvalidParamError } from '@data/erros';
import { badRequest, created } from '@data/helpers';
import { ICoverageRepository } from '@data/protocols/db/repositories/ICoverageRepository';
import { IQuotesRepository } from '@data/protocols/db/repositories/IQuotesRepository';
import { IOccupationsRepository } from '@data/protocols/db/repositories/OccupationsRepository';

import {
  ICreateQuotes,
  ICreateQuotesUseCase,
} from '@domain/usecases/quotes/ICreateQuotesUseCase';
import { CheckAgeFactorAdapter } from '@main/adapters/checkAgeFactorAdapter/checkAgeFactorAdapter';

class CreateQuotesUseCase implements ICreateQuotesUseCase {
  constructor(
    private quotesRepository: IQuotesRepository,
    private coverageRepository: ICoverageRepository,
    private occupationsRepository: IOccupationsRepository,
    private checkAgeFactor: CheckAgeFactorAdapter,
  ) {}

  async execute({
    age,
    capital,
    occupationCode,
    coverages,
  }: ICreateQuotes.Params): Promise<ICreateQuotes> {
    if (age < 18 || age > 60) {
      return badRequest(
        new InvalidParamError(
          'It is not possible to price insurance for this age',
        ),
      );
    }

    const coverage = await this.coverageRepository.findByCoverageIdOrName({
      coverageId: coverages,
    });

    if (!coverage) {
      return badRequest(new InvalidParamError('Coverage doesnt exists'));
    }

    const occupation = await this.occupationsRepository.findByCode(
      parseInt(occupationCode, 10),
    );

    if (!occupation) {
      return badRequest(new InvalidParamError('Occupation doesnt exists'));
    }

    const calculatedAgeFactor = this.checkAgeFactor.execute(age);

    const divide = capital / parseInt(coverage.capital, 10);

    const divideTreated = Math.ceil(divide);

    const totalValue =
      Math.round(
        parseInt(coverage.premium, 10) *
          divideTreated *
          calculatedAgeFactor *
          occupation.factor,
      ) * 100;

    await this.quotesRepository.store({
      age,
      capital,
      coverageId: parseInt(coverages, 10),
      occupationCode: occupation.code,
      premium: totalValue / 100,
    });

    return created({
      ageFactor: calculatedAgeFactor,
      occupationFactor: occupation.factor,
      coverages: [
        { coverageId: coverage.coverageId, premium: coverage.premium },
      ],
      capital,
      premium: totalValue / 100,
    });
  }
}

export { CreateQuotesUseCase };
