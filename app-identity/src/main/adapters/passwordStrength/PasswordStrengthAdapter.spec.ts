import { PasswordStrengthAdapterFactory } from '@main/factories/adapters';

describe('PasswordStrenghtAdapter', () => {
  const passwordStrengthAdapter = PasswordStrengthAdapterFactory();

  describe('checker', () => {
    it('should return true for a valid password', () => {
      const password = 'MyPassword123@';
      const result = passwordStrengthAdapter.checker(password);
      expect(result).toBe(true);
    });

    it('should return false for a password with less than 8 characters', () => {
      const password = 'MyPass1';
      const result = passwordStrengthAdapter.checker(password);
      expect(result).toBe(false);
    });

    it('should return false for a password with more than 64 characters', () => {
      const password = 'A'.repeat(65);
      const result = passwordStrengthAdapter.checker(password);
      expect(result).toBe(false);
    });

    it('should return false for a password without lowercase letters', () => {
      const password = 'MYPASSWORD123@';
      const result = passwordStrengthAdapter.checker(password);
      expect(result).toBe(false);
    });

    it('should return false for a password without uppercase letters', () => {
      const password = 'mypassword123@';
      const result = passwordStrengthAdapter.checker(password);
      expect(result).toBe(false);
    });

    it('should return false for a password without digits', () => {
      const password = 'MyPassword@';
      const result = passwordStrengthAdapter.checker(password);
      expect(result).toBe(false);
    });

    it('should return false for a password without special characters', () => {
      const password = 'MyPassword123';
      const result = passwordStrengthAdapter.checker(password);
      expect(result).toBe(false);
    });
  });
});
