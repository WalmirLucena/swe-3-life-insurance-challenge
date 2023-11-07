import { MissingParamError, UnauthorizedError } from '@data/erros';
import { ok, unauthorized } from '@data/helpers';
import { ITokenProvider } from '@data/protocols';
import { IHttpResponse } from '@presentation/protocols';
import { IEnsureAuthenticated } from './protocols';

class EnsureAuthenticated implements IEnsureAuthenticated {
  constructor(private tokenProvider: ITokenProvider) {}

  execute(token: string): IHttpResponse {
    if (!token) {
      return unauthorized(new MissingParamError('MissingToken'));
    }

    const payload = this.tokenProvider.validatedToken(token);

    if (!payload) {
      return unauthorized(new UnauthorizedError('Forbidden'));
    }

    const { user_id, role } = payload;

    return ok({ user_id, role });
  }
}

export { EnsureAuthenticated };
