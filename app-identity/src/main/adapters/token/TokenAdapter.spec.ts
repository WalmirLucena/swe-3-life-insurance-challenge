import { tokenAdaptersFactory } from '@main/factories/adapters';
import * as faker from 'faker';
import { JwtAdapter } from './TokenAdapter';

interface StubTypes {
  sut: JwtAdapter;
}

const makeSut = (): StubTypes => {
  const sut = tokenAdaptersFactory();
  return { sut };
};

describe('BCryptProvider', () => {
  it('should be able to hash a value', async () => {
    const { sut } = makeSut();

    const result = sut.generateToken(faker.internet.password(), '1d', {
      user_id: faker.datatype.number({
        min: 10,
        max: 50,
      }),
    });

    expect(result.token.length > 0).toBe(true);
  });
});
