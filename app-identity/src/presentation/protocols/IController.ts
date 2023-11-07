import { IHttpRequest, IHttpResponse } from '.';

interface IController {
  handle(httpRequest: IHttpRequest): Promise<IHttpResponse>;
}

export { IController };
