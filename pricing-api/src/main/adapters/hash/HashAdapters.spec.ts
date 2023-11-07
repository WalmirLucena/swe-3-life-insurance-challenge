import { hashAdaptersFactory } from '@main/factories/adapters';
import * as faker from 'faker';
import { HashAdapters } from '..';

interface StubTypes {
  sut: HashAdapters;
}

const makeSut = (): StubTypes => {
  const sut = hashAdaptersFactory();
  return { sut };
};

describe('BCryptProvider', () => {
  it('should be able to hash a value', async () => {
    const { sut } = makeSut();
    const password = faker.internet.password();

    const hashPassword = await sut.hash(password);

    expect(hashPassword.length > 0).toBe(true);
  });

  it('should be able to compare if password is correct', async () => {
    const { sut } = makeSut();
    const password = faker.internet.password();

    const hashPassword = await sut.hash(password);
    const isValid = await sut.compare(password, hashPassword);

    expect(isValid).toBe(true);
  });

  it('should be able to compare if password not correct', async () => {
    const { sut } = makeSut();
    const password = faker.internet.password();

    const hashPassword = 'hash_password_incorrect';
    const isValid = await sut.compare(password, hashPassword);

    expect(isValid).toBe(false);
  });
});
