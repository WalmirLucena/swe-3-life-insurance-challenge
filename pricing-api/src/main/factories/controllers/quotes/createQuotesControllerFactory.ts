import { CreateQuotesController } from '@presentation/controllers/quotes/CreateQuotesController';

function createQuotesControllerFactory(): CreateQuotesController {
  return new CreateQuotesController();
}

export { createQuotesControllerFactory };
