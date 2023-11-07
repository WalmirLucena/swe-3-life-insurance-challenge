import { IHttpResponse } from '@presentation/protocols';

const badRequest = (
  error: Error | string,
  message?: string,
): IHttpResponse => ({
  statusCode: 400,
  body: { error, message },
});

const unauthorized = (error: Error, message?: string): IHttpResponse => ({
  statusCode: 401,
  body: { error, message },
});

const created = (body?: any): IHttpResponse => ({
  statusCode: 201,
  body,
});

const updated = (body?: any): IHttpResponse => ({
  statusCode: 204,
  body,
});

const ok = (body?: any): IHttpResponse => ({
  statusCode: 200,
  body,
});

const forbidden = (error: Error): IHttpResponse => ({
  statusCode: 403,
  body: error,
});

export { badRequest, created, unauthorized, ok, forbidden, updated };
