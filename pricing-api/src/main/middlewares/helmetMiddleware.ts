import ServerTypes from '@data/protocols/server/IServerAdapter';
import helmet from 'helmet';

export const helmetMiddleware = (
  req: ServerTypes.RequestAdapter,
  res: ServerTypes.ResponseAdapter,
  next: ServerTypes.NextFunctionAdapter,
) => {
  helmet();
  next();
};
