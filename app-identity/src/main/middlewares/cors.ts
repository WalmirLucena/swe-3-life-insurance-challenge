import ServerTypes from '@data/protocols/server/IServerAdapter';

export const cors = (
  req: ServerTypes.RequestAdapter,
  res: ServerTypes.ResponseAdapter,
  next: ServerTypes.NextFunctionAdapter,
): void => {
  res.set('access-control-allow-origin', '*');
  res.set('access-control-allow-headers', '*');
  res.set('access-control-allow-methods', '*');
  next();
};
