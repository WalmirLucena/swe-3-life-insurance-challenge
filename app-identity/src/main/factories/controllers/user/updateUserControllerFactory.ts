import { UpdateUserController } from 'src/presentation/controllers/user';

function updateUserControllerFactory(): UpdateUserController {
  return new UpdateUserController();
}

export { updateUserControllerFactory };
