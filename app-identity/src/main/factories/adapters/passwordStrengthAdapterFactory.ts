import { PasswordStrenghtAdapter } from '@main/adapters/passwordStrength/PasswordStrengthAdapter';

function PasswordStrengthAdapterFactory(): PasswordStrenghtAdapter {
  return new PasswordStrenghtAdapter();
}

export { PasswordStrengthAdapterFactory };
