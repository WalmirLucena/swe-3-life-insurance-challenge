import { IFakerProvider } from '@data/protocols/providers/IFakerProvider';
import * as faker from 'faker';

class FakerProviderAdapters implements IFakerProvider {
  email(): string {
    return faker.internet.email();
  }

  id(): number {
    return faker.datatype.number({
      min: 10,
      max: 50,
    });
  }

  number(): number {
    return faker.datatype.number({
      min: 1000,
      max: 5000,
    });
  }

  password(): string {
    return faker.name.findName();
  }

  string(): string {
    return faker.name.findName();
  }

  createdAt(): Date {
    return faker.date.recent();
  }

  updatedAt(): Date {
    return faker.date.recent();
  }
}

export { FakerProviderAdapters };
