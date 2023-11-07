import { CreateUserController } from 'src/presentation/controllers/user';

function createUserControllerFactory(): CreateUserController {
  return new CreateUserController();
}

export { createUserControllerFactory };
