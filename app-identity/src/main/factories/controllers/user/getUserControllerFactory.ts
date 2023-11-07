import { GetUserController } from '@presentation/controllers/user/GetUserController';

function getUserControllerFactory(): GetUserController {
  return new GetUserController();
}

export { getUserControllerFactory };
