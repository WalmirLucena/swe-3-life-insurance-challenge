class UnauthorizedError extends Error {
  constructor(text: string) {
    super(`unauthorized: ${text}`);
    this.name = 'UnauthorizedError';
  }
}

export { UnauthorizedError };
