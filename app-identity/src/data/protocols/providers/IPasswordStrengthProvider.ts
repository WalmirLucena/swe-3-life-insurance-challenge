interface IPasswordStrengthProvider {
  checker(password: string): boolean;
}

export { IPasswordStrengthProvider };
