import { MissingParamError } from '@data/erros';
import { badRequest } from '@data/helpers';
import { IEnsureAuthenticated } from '@main/middlewares/protocols';
import ServerTypes from '../../../data/protocols/server/IServerAdapter';

const authenticatedMiddlewaresAdapter = (
  ensureAuthenticated: IEnsureAuthenticated,
) => {
  return async (
    request: ServerTypes.RequestAdapter,
    response: ServerTypes.ResponseAdapter,
    next: ServerTypes.NextFunctionAdapter,
  ): Promise<void> => {
    const authtoken = request.headers.authorization;

    if (!authtoken) {
      const { statusCode, body } = badRequest(
        new MissingParamError('Missing Token'),
      );

      response
        .status(statusCode)
        .json({ error: { code: statusCode, message: body.error.name } });
      next();
    }

    const [, token] = authtoken.split(' ');
    const { statusCode, body } = ensureAuthenticated.execute(token);

    if (statusCode >= 200 && statusCode <= 299 && body.role === 'admin') {
      request.payload = {
        user_id: body.user_id,
        role: body.role,
      };
    } else {
      response.status(statusCode).json({
        error: body,
      });
    }
    // eslint-disable-next-line consistent-return
    return next();
  };
};

export { authenticatedMiddlewaresAdapter };
