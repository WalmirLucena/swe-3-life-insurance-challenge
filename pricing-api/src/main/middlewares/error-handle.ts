import ServerTypes from '@data/protocols/server/IServerAdapter';
import { IHttpResponse } from '@presentation/protocols';
import 'express-async-errors';

export const errorHandle = (
  error: Error | any,
  req: ServerTypes.RequestAdapter,
  res: ServerTypes.ResponseAdapter,
  next: ServerTypes.NextFunctionAdapter,
) => {
  const responseJson: IHttpResponse = {
    statusCode: 500,
    body: 'Internal server error',
  };
  console.error(error);
  return res.status(500).json(responseJson);
};
