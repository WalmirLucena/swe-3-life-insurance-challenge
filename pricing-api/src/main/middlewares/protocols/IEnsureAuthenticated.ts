import { IHttpResponse } from '@presentation/protocols';

interface IEnsureAuthenticated {
  execute(token: string): IHttpResponse;
}

export { IEnsureAuthenticated };
