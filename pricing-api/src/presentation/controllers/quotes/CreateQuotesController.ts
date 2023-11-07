import { createQuotesUseCaseFactory } from '@main/factories/usecases/quotes/createCoverageUseCaseFactory';
import { ICreateQuotes } from '@domain/usecases/quotes/ICreateQuotesUseCase';
import { IController, IHttpRequest, IHttpResponse } from '../../protocols';

class CreateQuotesController implements IController {
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const createQuotesUseCase = createQuotesUseCaseFactory();

    const params = {
      ...request.body,
    };

    const response = await createQuotesUseCase.execute(
      params as ICreateQuotes.Params,
    );

    return response;
  }
}

export { CreateQuotesController };
