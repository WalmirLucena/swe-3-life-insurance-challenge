import { IHashProvider } from '@data/protocols';
import { hash, compare } from 'bcrypt';

class HashAdapters implements IHashProvider {
  async hash(value: string): Promise<string> {
    const hashed = await hash(value, 8);
    return hashed;
  }

  async compare(value: string, hashedValue: string): Promise<boolean> {
    const isValid = await compare(value, hashedValue);
    return isValid;
  }
}

export { HashAdapters };
