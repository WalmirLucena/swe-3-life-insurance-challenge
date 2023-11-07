interface IHttpResponse {
  statusCode?: number;
  body?: any;
  error?: {
    code: number;
    message: string;
    error: string | Error;
  };
}

interface IHttpRequest {
  body?: any;
  params?: any;
  query?: any;
  payload?: any;
}

export { IHttpRequest, IHttpResponse };
