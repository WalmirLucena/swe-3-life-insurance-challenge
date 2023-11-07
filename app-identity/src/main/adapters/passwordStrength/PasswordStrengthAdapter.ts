import { IPasswordStrengthProvider } from '@data/protocols/providers/IPasswordStrengthProvider';

class PasswordStrenghtAdapter implements IPasswordStrengthProvider {
  checker(password: string): boolean {
    if (password.length < 8 || password.length > 64) {
      return false;
    }

    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      return false;
    }

    if (!/\d/.test(password)) {
      return false;
    }

    if (!/[@#!$%]/.test(password)) {
      return false;
    }

    return true;
  }
}

export { PasswordStrenghtAdapter };
