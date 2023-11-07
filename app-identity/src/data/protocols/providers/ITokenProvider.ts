interface ITokenProvider {
  generateToken(
    secret: string,
    expiresIn: string,
    payload: IJWTProvider.Payload,
  ): IJWTProvider.Result;
  validatedToken(token: string): IJWTProvider.Payload;
}
namespace IJWTProvider {
  export type Payload = {
    user_id: number;
    role: string;
  };
  export type Result = {
    token: string;
  };
}
export { ITokenProvider, IJWTProvider };
