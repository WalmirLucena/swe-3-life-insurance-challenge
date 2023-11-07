import { HashAdapters } from '@main/adapters';

function hashAdaptersFactory(): HashAdapters {
  return new HashAdapters();
}

export { hashAdaptersFactory };
