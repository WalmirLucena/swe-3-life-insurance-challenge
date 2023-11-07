import { IJWTProvider, ITokenProvider } from '@data/protocols';
import { constants } from '@main/config';
import { sign, verify } from 'jsonwebtoken';
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

  generateToken(
    secret: string,
    expiresIn: string,
    payload: { user_id: number },
  ): { token: string } {
    const privateKey = fs.readFileSync('private.key');
    const token = sign(
      payload,
      { key: privateKey, passphrase: secret },
      { algorithm: 'RS256', expiresIn },
    );
    const response = { token };

    return response;
  }
}

export { JwtAdapter };
