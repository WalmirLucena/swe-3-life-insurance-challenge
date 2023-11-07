import { IJWTProvider, ITokenProvider } from '@data/protocols';
import { verify } from 'jsonwebtoken';
import fs from 'fs';

class JwtAdapter implements ITokenProvider {
  validatedToken(token: string): IJWTProvider.Payload {
    const publicKey = fs.readFileSync('public.pem');

    try {
      const payload = <IJWTProvider.Payload>verify(token, publicKey);
      return payload;
    } catch {
      return null;
    }
  }
}

export { JwtAdapter };
