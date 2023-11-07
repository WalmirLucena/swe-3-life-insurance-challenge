import { FakerProviderAdapters } from '@main/adapters';

function fakerProviderFactory(): FakerProviderAdapters {
  return new FakerProviderAdapters();
}

export { fakerProviderFactory };
