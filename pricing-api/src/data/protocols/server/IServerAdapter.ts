import { Request, Response, NextFunction, Router, Express } from 'express';

namespace ServerTypes {
  export type ServerInstance = Express;

  export type RequestAdapter = Request & {
    body: any;
    params: any;
    payload: any;
    query: any;
  };

  export type ResponseAdapter = Response & {
    status(code: number): ResponseAdapter;
    json(body: any): ResponseAdapter;
    set(field: string, value?: string | string[]): ResponseAdapter;
  };

  export type NextFunctionAdapter = NextFunction;

  export type RouterAdapter = Router;
}

export default ServerTypes;
