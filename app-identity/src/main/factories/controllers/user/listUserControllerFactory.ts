import { ListUserController } from 'src/presentation/controllers/user';

function listUserControllerFactory(): ListUserController {
  return new ListUserController();
}

export { listUserControllerFactory };
