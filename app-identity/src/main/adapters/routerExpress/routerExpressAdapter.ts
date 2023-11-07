import { IController } from '@presentation/protocols';
import ServerTypes from '../../../data/protocols/server/IServerAdapter';

export const routerExpressAdapter = (controller: IController) => {
  return async (
    req: ServerTypes.RequestAdapter,
    res: ServerTypes.ResponseAdapter,
  ) => {
    const request = {
      body: { ...(req.body || {}) },
      params: { ...(req.params || {}) },
      payload: { ...(req.payload || {}) },
      query: { ...(req.query || {}) },
    };

    const httpResponse = await controller.handle(request);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body,
      });
    }
  };
};
