import { LoginUserController } from '@presentation/controllers/auth';

function loginUserControllerFactory(): LoginUserController {
  return new LoginUserController();
}

export { loginUserControllerFactory };
